import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import type { IdParams, MealDetailData } from "../../types";
import ErrorMessage from "../components/ErrorMessage";

export default function MealDetail() {
  const { id } = useParams<IdParams>();
  const [meal, setMeal] = useState<MealDetailData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMeal = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setMeal(data?.meals?.[0]);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  const retryError = () => {
    fetchMeal();
  };

  useEffect(() => {
    fetchMeal();
  }, [id]);

  return (
    <section>
      {loading && <p>Loading...</p>}
      {error ? (
        <ErrorMessage error={error} retryError={retryError} />
      ) : (
        <>
          <h1>{meal?.strMeal}</h1>
          <img src={meal?.strMealThumb} alt={meal?.strMeal} />
          <Link to="/">Back</Link>
        </>
      )}
    </section>
  );
}
