export type SSSShare = {
  regularSS?: number;
  mpf?: number | null;
  ec?: number;
  total?: number;
};

export type SSSBracket = {
  rangeCompensation: { min: number; max: number | null };
  contributions: {
    employer: SSSShare;
    employee: SSSShare;
    total: number;
  };
};
