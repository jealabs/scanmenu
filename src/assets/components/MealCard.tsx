import { Link } from "react-router-dom";
import type { MealCardProps } from "../../types";

export default function MealCard({ meal }: MealCardProps) {
  return (
    <Link to={`/meal/${meal?.idMeal}`}>
      <span>Name: {meal?.strMeal}</span>
      <img src={meal?.strMealThumb} alt={meal?.strMeal} />
    </Link>
  );
}
