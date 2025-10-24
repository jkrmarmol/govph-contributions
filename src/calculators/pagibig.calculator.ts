import type { Year, ContributionResult, PagIBIGBracket } from "../types";
import { loadJSON } from "../utils";

const PAGIBIG_DATA = loadJSON<PagIBIGBracket[]>("../data/pagibig/pagibig_2025.json");
const PAGIBIG_BY_YEAR: Partial<Record<"2023" | "2024" | "2025", PagIBIGBracket[]>> = {
  "2025": PAGIBIG_DATA as unknown as PagIBIGBracket[],
};

export class PagIBIGCalculator {
  constructor(private year: Year) {}

  calculate(salary: number): ContributionResult {
    if (!Number.isFinite(salary) || salary < 0) {
      throw new Error("Salary must be a non-negative number");
    }

    const table = PAGIBIG_BY_YEAR[this.year];
    if (!table) {
      throw new Error(`Pag-IBIG table for ${this.year} is not available`);
    }

    // Find the appropriate bracket (handle boundary cases)
    let bracket = table.find((b) => salary >= b.monthlySalary.min && salary <= b.monthlySalary.max);

    // If no exact match and salary > 1500, use the 2% bracket
    if (!bracket && salary > 1500) {
      bracket = table.find((b) => b.monthlySalary.min === 1500);
    }

    if (!bracket) {
      throw new Error("No Pag-IBIG bracket found for the given salary");
    }

    // Parse rate strings (e.g., "2%" -> 0.02)
    const employeeRate = bracket.rate.employee / 100;
    const employerRate = bracket.rate.employer / 100;

    // Cap at ₱10,000 for MFS above ₱10,000
    const mfs = salary > 10000 ? 10000 : salary;

    let employee = mfs * employeeRate;
    let employer = mfs * employerRate;

    // Cap employee and employer at ₱200 each for MFS above ₱10,000
    if (salary > 10000) {
      employee = Math.min(employee, 200);
      employer = Math.min(employer, 200);
    }

    return {
      employee,
      employer,
      total: employee + employer,
    };
  }
}
