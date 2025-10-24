import { describe, it, expect } from "vitest";
import { Contribution } from "../src/contribution";

describe("Contribution Class", () => {
  const contribution = new Contribution("2025");

  it("should calculate all contributions", () => {
    const result = contribution.calculateAll(26400);

    expect(result.sss).toBeDefined();
    expect(result.philhealth).toBeDefined();
    expect(result.pagibig).toBeDefined();
    expect(result.total).toBeDefined();

    // Total should equal sum of all contributions
    expect(result.total.employee).toBe(
      result.sss.employee + result.philhealth.employee + result.pagibig.employee
    );
    expect(result.total.employer).toBe(
      result.sss.employer + result.philhealth.employer + result.pagibig.employer
    );
    expect(result.total.total).toBe(
      result.sss.total + result.philhealth.total + result.pagibig.total
    );
  });

  it("should calculate SSS contribution", () => {
    const result = contribution.getSSSContribution(26400);
    expect(result.employee).toBeGreaterThan(0);
    expect(result.employer).toBeGreaterThan(0);
  });

  it("should calculate PhilHealth contribution", () => {
    const result = contribution.getPhilHealthContribution(40000);
    expect(result.employee).toBe(1000);
    expect(result.employer).toBe(1000);
  });

  it("should calculate Pag-IBIG contribution", () => {
    const result = contribution.getPagIBIGContribution(6500);
    expect(result.employee).toBe(130);
    expect(result.employer).toBe(130);
  });
});
