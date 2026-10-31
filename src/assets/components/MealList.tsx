import { useEffect, useState } from "react";
import type { FilterCategory } from "../../types";
import MealResults from "./MealResults";
import CategorySelect from "./CategorySelect";

export default function MealList() {
  const [category, setCategory] = useState<string>("Seafood");
  const [meals, setMeals] = useState<FilterCategory[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const retryError = () => {
    fetchCategory();
  };

  const fetchCategory = async () => {
    try {
      setLoading(true);
      setError(null);
      setMeals([]);

      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setMeals(data.meals ?? []);
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

  useEffect(() => {
    fetchCategory();
  }, [category]);

  return (
    <>
      <section>
        <h1>Meal List</h1>
        <CategorySelect
          category={category}
          handleCategoryChange={handleCategoryChange}
        />
      </section>

      <section>
        <MealResults
          meals={meals}
          loading={loading}
          error={error}
          retryError={retryError}
        />
      </section>
    </>
  );
}
