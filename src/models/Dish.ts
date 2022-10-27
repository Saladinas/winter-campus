export type Ingredient = {
  section: string;
  items: string[];
};

export type Dish = {
  id: number;
  name: string;
  description: string;
  image: string;
  ingredients: Ingredient[];
  steps: string[];
};
