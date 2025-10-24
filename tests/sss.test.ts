import { describe, it, expect } from "vitest";
import { SSSCalculator } from "../src/calculators/sss.calculator";

describe("SSS Calculator", () => {
  const calculator = new SSSCalculator("2025");

  it("should calculate SSS contribution for salary 26400", () => {
    const result = calculator.calculate(26400);
    expect(result.employee).toBeGreaterThan(0);
    expect(result.employer).toBeGreaterThan(0);
    expect(result.total).toBe(result.employee + result.employer);
  });

  it("should throw error for negative salary", () => {
    expect(() => calculator.calculate(-1000)).toThrow("Salary must be a non-negative number");
  });

  it("should throw error for invalid salary", () => {
    expect(() => calculator.calculate(NaN)).toThrow("Salary must be a non-negative number");
  });

  it("should handle minimum salary bracket", () => {
    const result = calculator.calculate(5000);
    expect(result.total).toBeGreaterThan(0);
  });

  it("should handle maximum salary bracket", () => {
    const result = calculator.calculate(35000);
    expect(result.total).toBeGreaterThan(0);
  });
});
