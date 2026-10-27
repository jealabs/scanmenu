export type Category = {
  idCategory: number;
  strCategory: string;
};
export type FilterCategory = {
  idMeal: number;
  strMeal: string;
  strMealThumb: string;
};

export type MealResultsProps = {
  meals: FilterCategory[];
  loading: boolean;
  error: string | null;
  retryError: () => void;
};

export type MealCardProps = {
  meal: FilterCategory;
}
