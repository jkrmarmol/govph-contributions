import { describe, it, expect } from "vitest";
import { PhilHealthCalculator } from "../src/calculators/philhealth.calculator";

describe("PhilHealth Calculator", () => {
  const calculator = new PhilHealthCalculator("2025");

  it("should calculate PhilHealth for salary 40000", () => {
    const result = calculator.calculate(40000);
    expect(result.employee).toBe(1000);
    expect(result.employer).toBe(1000);
    expect(result.total).toBe(2000);
  });

  it("should use minimum salary (10000) for low salary", () => {
    const result = calculator.calculate(8500);
    expect(result.employee).toBe(250);
    expect(result.employer).toBe(250);
    expect(result.total).toBe(500);
  });

  it("should cap at maximum salary (100000)", () => {
    const result = calculator.calculate(120000);
    expect(result.employee).toBe(2500);
    expect(result.employer).toBe(2500);
    expect(result.total).toBe(5000);
  });

  it("should throw error for negative salary", () => {
    expect(() => calculator.calculate(-1000)).toThrow("Salary must be a non-negative number");
  });
});
