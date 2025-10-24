import { Contribution } from "../src/contribution";

console.log("=== Government Contributions Calculator ===\n");

// Example 1: Default year (2025)
console.log("📅 Using default year (2025):");
const contribution2025 = new Contribution();
const salary2025 = 50000;

const result2025 = contribution2025.calculateAll(salary2025);
console.log(`Salary: ₱${salary2025.toLocaleString()}`);
console.log("SSS:", result2025.sss);
console.log("PhilHealth:", result2025.philhealth);
console.log("Pag-IBIG:", result2025.pagibig);
console.log("Total Employee:", result2025.total.employee);
console.log("Total Employer:", result2025.total.employer);
console.log("Total:", result2025.total.total);

console.log("\n" + "=".repeat(50) + "\n");

// Example 2: Custom year (2024)
console.log("📅 Using year 2024:");
const contribution2024 = new Contribution("2024");
const salary2024 = 50000;

try {
  const result2024 = contribution2024.calculateAll(salary2024);
  console.log(`Salary: ₱${salary2024.toLocaleString()}`);
  console.log("SSS:", result2024.sss);
  console.log("PhilHealth:", result2024.philhealth);
  console.log("Pag-IBIG:", result2024.pagibig);
  console.log("Total Employee:", result2024.total.employee);
  console.log("Total Employer:", result2024.total.employer);
  console.log("Total:", result2024.total.total);
} catch (error) {
  console.log("❌ Error:", (error as Error).message);
  console.log("💡 Note: 2024 data might not be available yet");
}

console.log("\n" + "=".repeat(50) + "\n");

// Example 3: Custom year (2023)
console.log("📅 Using year 2023:");
const contribution2023 = new Contribution("2023");
const salary2023 = 50000;

try {
  const result2023 = contribution2023.calculateAll(salary2023);
  console.log(`Salary: ₱${salary2023.toLocaleString()}`);
  console.log("SSS:", result2023.sss);
  console.log("PhilHealth:", result2023.philhealth);
  console.log("Pag-IBIG:", result2023.pagibig);
  console.log("Total Employee:", result2023.total.employee);
  console.log("Total Employer:", result2023.total.employer);
  console.log("Total:", result2023.total.total);
} catch (error) {
  console.log("❌ Error:", (error as Error).message);
  console.log("💡 Note: 2023 data might not be available yet");
}

console.log("\n" + "=".repeat(50) + "\n");

// Example 4: Comparing different years
console.log("📊 Comparing contributions across years:\n");

const testSalary = 35000;
const years: Array<"2023" | "2024" | "2025"> = ["2023", "2024", "2025"];

console.log(`Salary: ₱${testSalary.toLocaleString()}\n`);

for (const year of years) {
  const contrib = new Contribution(year);
  try {
    const result = contrib.calculateAll(testSalary);
    console.log(`Year ${year}:`);
    console.log(`  Employee Total: ₱${result.total.employee.toFixed(2)}`);
    console.log(`  Employer Total: ₱${result.total.employer.toFixed(2)}`);
    console.log(`  Grand Total: ₱${result.total.total.toFixed(2)}`);
    console.log();
  } catch (error) {
    console.log(`Year ${year}: Data not available`);
    console.log();
  }
}

console.log("=".repeat(50) + "\n");

// Example 5: Changing year on existing instance
console.log("🔄 Dynamically switching years:\n");

const salaries = [25000, 45000, 75000];

for (const salary of salaries) {
  console.log(`\nSalary: ₱${salary.toLocaleString()}`);

  for (const year of years) {
    const contrib = new Contribution(year);
    try {
      const result = contrib.calculateAll(salary);
      console.log(
        `  ${year}: Employee ₱${result.total.employee.toFixed(2)} | ` +
          `Employer ₱${result.total.employer.toFixed(2)} | ` +
          `Total ₱${result.total.total.toFixed(2)}`
      );
    } catch (error) {
      console.log(`  ${year}: Not available`);
    }
  }
}

console.log("\n" + "=".repeat(50) + "\n");

// Example 6: Individual contribution by year
console.log("🔍 Individual contributions by year:\n");

const individualSalary = 60000;
const year = "2025";

const individualContrib = new Contribution(year);

console.log(`Year: ${year}`);
console.log(`Salary: ₱${individualSalary.toLocaleString()}\n`);

try {
  const sss = individualContrib.getSSSContribution(individualSalary);
  console.log("SSS Contribution:");
  console.log(`  Employee: ₱${sss.employee.toFixed(2)}`);
  console.log(`  Employer: ₱${sss.employer.toFixed(2)}`);
  console.log(`  Total: ₱${sss.total.toFixed(2)}\n`);

  const philhealth = individualContrib.getPhilHealthContribution(individualSalary);
  console.log("PhilHealth Contribution:");
  console.log(`  Employee: ₱${philhealth.employee.toFixed(2)}`);
  console.log(`  Employer: ₱${philhealth.employer.toFixed(2)}`);
  console.log(`  Total: ₱${philhealth.total.toFixed(2)}\n`);

  const pagibig = individualContrib.getPagIBIGContribution(individualSalary);
  console.log("Pag-IBIG Contribution:");
  console.log(`  Employee: ₱${pagibig.employee.toFixed(2)}`);
  console.log(`  Employer: ₱${pagibig.employer.toFixed(2)}`);
  console.log(`  Total: ₱${pagibig.total.toFixed(2)}\n`);
} catch (error) {
  console.log("❌ Error:", (error as Error).message);
}
