import type { MealResultsProps } from "../../types";
import ErrorMessage from "./ErrorMessage";
import MealCard from "./MealCard";

export default function MealResults({
  meals,
  loading,
  error,
  retryError,
}: MealResultsProps) {
  return (
    <section>
      {loading && <p>Loading...</p>}
      {error ? (
        <ErrorMessage error={error} retryError={retryError} />
      ) : (
        meals.map((meal) => <MealCard key={meal.idMeal} meal={meal} />)
      )}
    </section>
  );
}
