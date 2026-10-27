import type { MealResultsProps } from "../../types";
import MealCard from "./MealCard";

export default function MealResult({ meals, loading, error, retryError }: MealResultsProps) {
  return (
    <section>
      {loading && <p>Loading...</p>}
      {error ? (
        <div>
          <p>{error}</p>
          <button onClick={retryError}>Retry</button>
        </div>
      ) : (
        meals.map((meal) => (
          <MealCard key={meal.idMeal} meal={meal} />
        ))
      )}
    </section>
  );
}
