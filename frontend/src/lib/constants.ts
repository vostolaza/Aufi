export const tags = ["casual", "formal", "deportivo"];

export type Outfit = {
  top: string;
  bottom: string;
  footwear: string;
  accessory: string;
};

export type User = {
  _id: string;
  username: string;
  password: string;
  tops: string[];
  bottoms: string[];
  footwear: string[];
  accessories: string[];
};

export const emptyOutfit = (): Outfit => {
  return {
    top: "",
    bottom: "",
    footwear: "",
    accessory: "",
  };
};
