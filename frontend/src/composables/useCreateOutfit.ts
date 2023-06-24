import { Outfit } from "~/lib/constants";

export const useCreateOutfit = (outfit: Outfit) =>
  useState<Outfit>("use-create-outfit", () => outfit);
