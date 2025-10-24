import type { Year, ContributionResult, PhilHealthBracket } from "../types/index";
import { loadJSON } from "../utils/data-loader";

const PHILHEALTH_DATA = loadJSON<PhilHealthBracket[]>("../data/philhealth/philhealth.json");

export class PhilHealthCalculator {
  constructor(private year: Year) {}

  calculate(salary: number): ContributionResult {
    if (!Number.isFinite(salary) || salary < 0) {
      throw new Error("Salary must be a non-negative number");
    }

    const yearNum = parseInt(this.year);
    const bracket = PHILHEALTH_DATA.find((b) => b.year.includes(yearNum));

    if (!bracket) {
      throw new Error(`PhilHealth data for ${this.year} is not available`);
    }

    const { min, max } = bracket.monthlyBasicSalary;
    const premiumRate = bracket.premiumRate / 100;

    let baseSalary = salary;
    if (salary < min) {
      baseSalary = min;
    } else if (salary > max) {
      baseSalary = max;
    }

    const totalContribution = baseSalary * premiumRate;
    const employee = totalContribution / 2;
    const employer = totalContribution / 2;

    return {
      employee,
      employer,
      total: totalContribution,
    };
  }
}
