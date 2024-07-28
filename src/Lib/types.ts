export type SortingAlgorithmType =
  | "bubble"
  | "insert"
  | "select"
  | "merge"
  | "quick"
  | "heap";

export type AlgorithmOptions = {
  value: string;
  label: string;
};

export type frame = [number[], boolean][];

export type AlgorithmDescriptionObject = {
  title: string;
  link: string;
  description: string;
  bestCase: string;
  averageCase: string;
  worstCase: string;
};
