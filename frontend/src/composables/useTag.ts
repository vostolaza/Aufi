export const useTag = (label: string) =>
  useState<String>("use-tag", () => label);
