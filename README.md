# GovPH Contributions Calculator

A TypeScript library for calculating Philippine government mandatory contributions (SSS, PhilHealth, and Pag-IBIG) based on monthly salary.

[![NPM Version](https://img.shields.io/npm/v/govph-contributions.svg)](https://www.npmjs.com/package/govph-contributions)
[![License](https://img.shields.io/npm/l/govph-contributions.svg)](./LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue.svg)](https://www.typescriptlang.org/)

## ✨ Features

- 🎯 **Accurate Calculations** - Based on official government contribution tables
- 📅 **Multi-Year Support** - Calculate contributions for different years (2023, 2024, 2025)
- 💼 **SSS Contributions** - Social Security System with employee and employer shares
- 🏥 **PhilHealth Contributions** - Philippine Health Insurance Corporation premiums
- 🏠 **Pag-IBIG Contributions** - Home Development Mutual Fund with flexible rates
- 📦 **Zero Dependencies** - Lightweight and fast
- 🔒 **Type-Safe** - Full TypeScript support with type definitions
- ⚡ **ESM Ready** - Modern ES Module format

## 📦 Installation

```bash
npm install govph-contributions
```

```bash
yarn add govph-contributions
```

```bash
pnpm add govph-contributions
```

## 🚀 Quick Start

```typescript
import { Contribution } from "govph-contributions";

// Create instance (defaults to 2025)
const contribution = new Contribution();

// Calculate all contributions for a monthly salary of ₱50,000
const result = contribution.calculateAll(50000);

console.log(result);
// Output:
// {
//   sss: { employee: 1125, employer: 1575, total: 2700 },
//   philhealth: { employee: 1250, employer: 1250, total: 2500 },
//   pagibig: { employee: 200, employer: 200, total: 400 },
//   total: { employee: 2575, employer: 3025, total: 5600 }
// }
```

## 📖 Usage Examples

### Calculate Individual Contributions

```typescript
import { Contribution } from "govph-contributions";

const contribution = new Contribution("2025");

// SSS Contribution
const sss = contribution.getSSSContribution(26400);
console.log(`SSS Employee: ₱${sss.employee}`);
console.log(`SSS Employer: ₱${sss.employer}`);
console.log(`SSS Total: ₱${sss.total}`);

// PhilHealth Contribution
const philhealth = contribution.getPhilHealthContribution(40000);
console.log(`PhilHealth Employee: ₱${philhealth.employee}`);
console.log(`PhilHealth Employer: ₱${philhealth.employer}`);

// Pag-IBIG Contribution
const pagibig = contribution.getPagIBIGContribution(65000);
console.log(`Pag-IBIG Employee: ₱${pagibig.employee}`);
console.log(`Pag-IBIG Employer: ₱${pagibig.employer}`);
```

### Use Different Years

```typescript
import { Contribution } from "govph-contributions";

// Calculate for 2025 (default)
const contrib2025 = new Contribution("2025");
const result2025 = contrib2025.calculateAll(50000);

// Calculate for 2024
const contrib2024 = new Contribution("2024");
const result2024 = contrib2024.calculateAll(50000);

// Calculate for 2023
const contrib2023 = new Contribution("2023");
const result2023 = contrib2023.calculateAll(50000);
```

### Compare Contributions Across Years

```typescript
import { Contribution } from "govph-contributions";

const salary = 35000;
const years = ["2023", "2024", "2025"] as const;

years.forEach((year) => {
  const contrib = new Contribution(year);
  try {
    const result = contrib.calculateAll(salary);
    console.log(`${year}: Employee ₱${result.total.employee} | Employer ₱${result.total.employer}`);
  } catch (error) {
    console.log(`${year}: Data not available`);
  }
});
```

### Error Handling

```typescript
import { Contribution } from "govph-contributions";

const contribution = new Contribution("2025");

try {
  // This will throw an error
  const result = contribution.getSSSContribution(-1000);
} catch (error) {
  console.error(error.message); // "Salary must be a non-negative number"
}
```

## 📊 Contribution Breakdown

### SSS (Social Security System)

- Based on monthly salary compensation range
- Includes regular SS, EC (Employer's Compensation), and MPF (if applicable)
- 2025 rates range from ₱495 to ₱2,700 total contribution

### PhilHealth (Philippine Health Insurance)

- Premium rate: 5% of monthly basic salary
- Split equally between employee and employer (2.5% each)
- Monthly basic salary floor: ₱10,000
- Monthly basic salary ceiling: ₱100,000
- Maximum contribution: ₱5,000 per month

### Pag-IBIG (Home Development Mutual Fund)

- **Below ₱1,500**: Employee 1%, Employer 2%
- **₱1,500 and above**: Employee 2%, Employer 2%
- Maximum contribution: ₱200 each (employee and employer) capped at ₱10,000 MFS

## 🛠️ API Reference

### `Contribution`

Main class for calculating government contributions.

#### Constructor

```typescript
new Contribution(year?: "2023" | "2024" | "2025")
```

| Parameter | Type                         | Required | Default  | Description                                   |
| --------- | ---------------------------- | -------- | -------- | --------------------------------------------- |
| `year`    | `"2023" \| "2024" \| "2025"` | No       | `"2025"` | The year for which to calculate contributions |

#### Methods

| Method                              | Parameters       | Return Type              | Description                                                  |
| ----------------------------------- | ---------------- | ------------------------ | ------------------------------------------------------------ |
| `calculateAll(salary)`              | `salary: number` | `AllContributionsResult` | Calculates all contributions (SSS, PhilHealth, and Pag-IBIG) |
| `getSSSContribution(salary)`        | `salary: number` | `ContributionResult`     | Calculates SSS contribution only                             |
| `getPhilHealthContribution(salary)` | `salary: number` | `ContributionResult`     | Calculates PhilHealth contribution only                      |
| `getPagIBIGContribution(salary)`    | `salary: number` | `ContributionResult`     | Calculates Pag-IBIG contribution only                        |

### Examples by Method

| Method                        | Example Usage                                   | Sample Output                                                     |
| ----------------------------- | ----------------------------------------------- | ----------------------------------------------------------------- |
| `calculateAll()`              | `contribution.calculateAll(50000)`              | `{ sss: {...}, philhealth: {...}, pagibig: {...}, total: {...} }` |
| `getSSSContribution()`        | `contribution.getSSSContribution(26400)`        | `{ employee: 990, employer: 1485, total: 2475 }`                  |
| `getPhilHealthContribution()` | `contribution.getPhilHealthContribution(40000)` | `{ employee: 1000, employer: 1000, total: 2000 }`                 |
| `getPagIBIGContribution()`    | `contribution.getPagIBIGContribution(65000)`    | `{ employee: 200, employer: 200, total: 400 }`                    |
|                               |

## 🧪 Testing

The library includes comprehensive test coverage using Vitest.

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with UI
npm run test:ui

# Generate coverage report
npm run test:coverage
```

## 🔧 Development

```bash
# Clone the repository
git clone https://github.com/jkrmarmol/govph-contributions.git
cd govph-contributions

# Install dependencies
npm install

# Run development examples
npm run dev              # Basic usage
npm run dev:all          # All contributions
npm run dev:year         # Custom year examples

# Type checking
npm run typecheck

# Linting
npm run lint
npm run lint:fix

# Format code
npm run format

# Build
npm run build

# Run all checks
npm run check
```

## 📋 Requirements

- Node.js >= 18.0.0
- TypeScript >= 5.0.0 (for development)

## 📝 License

ISC © [Kurt Russelle Marmol](https://github.com/jkrmarmol)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📮 Contact

Kurt Russelle Marmol - jkurtrussellemarmol@gmail.com

Project Link: [https://github.com/jkrmarmol/govph-contributions](https://github.com/jkrmarmol/govph-contributions)

## 🙏 Acknowledgments

- Data based on official Philippine government contribution tables
- SSS contribution tables from [SSS Official Website](https://www.sss.gov.ph/)
- PhilHealth premium rates from [PhilHealth Official Website](https://www.philhealth.gov.ph/)
- Pag-IBIG contribution rates from [Pag-IBIG Fund Official Website](https://www.pagibigfund.gov.ph/)

## ⚠️ Disclaimer

This library is provided for informational and calculation purposes only. While we strive to keep the contribution tables up-to-date and accurate, please verify all calculations with official government sources. The authors are not responsible for any discrepancies or errors in calculations.

For official and legally binding information, please consult:

- [Social Security System (SSS)](https://www.sss.gov.ph/)
- [Philippine Health Insurance Corporation (PhilHealth)](https://www.philhealth.gov.ph/)
- [Home Development Mutual Fund (Pag-IBIG Fund)](https://www.pagibigfund.gov.ph/)
