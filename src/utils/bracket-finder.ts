type Bracket<T> = T & {
  rangeCompensation: { min: number; max: number | null };
};

export function findBracket<T>(brackets: Bracket<T>[], salary: number): Bracket<T> {
  if (!Number.isFinite(salary) || salary < 0) {
    throw new Error("Salary must be a non-negative number");
  }

  const sorted = [...brackets].sort((a, b) => a.rangeCompensation.min - b.rangeCompensation.min);

  let match: Bracket<T> | undefined;
  for (const bracket of sorted) {
    if (salary >= bracket.rangeCompensation.min) {
      match = bracket;
    } else {
      break;
    }
  }

  if (!match) {
    throw new Error("No bracket found for the given salary");
  }
  return match;
}
