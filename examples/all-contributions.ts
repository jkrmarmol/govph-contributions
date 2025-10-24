import { Contribution } from "../src/contribution";

const contribution = new Contribution("2025");

console.log("=== Calculate All Contributions ===");
console.log("\nSalary: ₱26,400");
console.log(contribution.calculateAll(26400));

console.log("\n\nSalary: ₱65,000");
console.log(contribution.calculateAll(65000));

console.log("\n\nSalary: ₱120,000");
console.log(contribution.calculateAll(120000));
