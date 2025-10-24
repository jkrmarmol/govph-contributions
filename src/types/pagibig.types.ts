export type PagIBIGBracket = {
  year: number[];
  monthlySalary: {
    min: number;
    max: number;
  };
  rate: {
    employee: number;
    employer: number;
    total: number;
  };
};
