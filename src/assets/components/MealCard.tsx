import type { MealCardProps } from "../../types";

export default function MealCard({meal}: MealCardProps) {
  return (
    <>
      <div>
        <span>Name: {meal?.strMeal}</span>
        <img src={meal?.strMealThumb} alt={meal?.strMeal} />
      </div>
    </>
  )
}
