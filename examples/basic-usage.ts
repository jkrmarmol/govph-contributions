import { Contribution } from "../src/contribution";

const contribution = new Contribution("2025");

console.log("=== SSS Contribution ===");
console.log(contribution.getSSSContribution(26400));

console.log("\n=== PhilHealth Contribution ===");
console.log(contribution.getPhilHealthContribution(70000));

console.log("\n=== Pag-IBIG Contribution ===");
console.log(contribution.getPagIBIGContribution(65000));
