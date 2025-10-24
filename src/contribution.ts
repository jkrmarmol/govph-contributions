import type { Year, ContributionResult } from "./types";
import { SSSCalculator, PhilHealthCalculator, PagIBIGCalculator } from "./calculators";

export class Contribution {
  year: Year;
  private sss: SSSCalculator;
  private philhealth: PhilHealthCalculator;
  private pagibig: PagIBIGCalculator;

  constructor(year: Year = "2025") {
    this.year = year;
    this.sss = new SSSCalculator(year);
    this.philhealth = new PhilHealthCalculator(year);
    this.pagibig = new PagIBIGCalculator(year);
  }

  getSSSContribution(salary: number): ContributionResult {
    return this.sss.calculate(salary);
  }

  getPhilHealthContribution(salary: number): ContributionResult {
    return this.philhealth.calculate(salary);
  }

  getPagIBIGContribution(salary: number): ContributionResult {
    return this.pagibig.calculate(salary);
  }

  calculateAll(salary: number) {
    const sss = this.getSSSContribution(salary);
    const philhealth = this.getPhilHealthContribution(salary);
    const pagibig = this.getPagIBIGContribution(salary);

    return {
      sss,
      philhealth,
      pagibig,
      total: {
        employee: sss.employee + philhealth.employee + pagibig.employee,
        employer: sss.employer + philhealth.employer + pagibig.employer,
        total: sss.total + philhealth.total + pagibig.total,
      },
    };
  }
}
