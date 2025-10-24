export type Year = "2023" | "2024" | "2025";

export type ContributionResult = {
  employee: number;
  employer: number;
  total: number;
};

export type AllContributionsResult = {
  sss: ContributionResult;
  philhealth: ContributionResult;
  pagibig: ContributionResult;
  total: ContributionResult;
};
