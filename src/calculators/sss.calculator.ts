import type { Year, ContributionResult, SSSBracket } from "../types/index";
import { loadJSON } from "../utils/data-loader";
import { findBracket } from "../utils/bracket-finder";

const SSS_DATA: Partial<Record<Year, SSSBracket[]>> = {
  "2025": loadJSON<SSSBracket[]>("../data/sss/sss_2025.json"),
};

export class SSSCalculator {
  constructor(private year: Year) {}

  calculate(salary: number): ContributionResult {
    const table = SSS_DATA[this.year];
    if (!table) {
      throw new Error(`SSS table for ${this.year} is not available`);
    }

    const bracket = findBracket(table, salary);
    const emp = bracket.contributions.employee ?? {};
    const er = bracket.contributions.employer ?? {};

    const employee = emp.total ?? (emp.regularSS ?? 0) + (emp.mpf ?? 0);
    const employer = er.total ?? (er.regularSS ?? 0) + (er.mpf ?? 0) + (er.ec ?? 0);

    return {
      employee,
      employer,
      total: employee + employer,
    };
  }
}
