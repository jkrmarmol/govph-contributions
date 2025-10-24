import { describe, it, expect } from "vitest";
import { PagIBIGCalculator } from "../src/calculators/pagibig.calculator";

describe("Pag-IBIG Calculator", () => {
  const calculator = new PagIBIGCalculator("2025");

  it("should calculate Pag-IBIG for salary below 1500", () => {
    const result = calculator.calculate(1200);
    expect(result.employee).toBe(12); // 1200 * 1%
    expect(result.employer).toBe(24); // 1200 * 2%
    expect(result.total).toBe(36);
  });

  it("should calculate Pag-IBIG for salary 6500", () => {
    const result = calculator.calculate(6500);
    expect(result.employee).toBe(130); // 6500 * 2%
    expect(result.employer).toBe(130); // 6500 * 2%
    expect(result.total).toBe(260);
  });

  it("should cap at 200 each for salary above 10000", () => {
    const result = calculator.calculate(12000);
    expect(result.employee).toBe(200);
    expect(result.employer).toBe(200);
    expect(result.total).toBe(400);
  });

  it("should cap at 200 each for very high salary", () => {
    const result = calculator.calculate(65000);
    expect(result.employee).toBe(200);
    expect(result.employer).toBe(200);
    expect(result.total).toBe(400);
  });

  it("should throw error for negative salary", () => {
    expect(() => calculator.calculate(-1000)).toThrow("Salary must be a non-negative number");
  });
});
