import { useEffect, useState } from "react";
import type { Category } from "./types";
import MealList from "./assets/components/MealList";

function App() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchCategory = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php",
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setCategories(data.categories);
      setLoading(false);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
        setLoading(false);
      } else {
        setError("Something went wrong");
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  if (loading) return <>Loading Data...</>;
  if (error) return <>Error : {error}</>;
  return (
    <>
      <h1>Data Kategori</h1>
      <ul>
        {categories.map((category) => (
            <li key={category.idCategory}>{category.idCategory} {category.strCategory}</li>

          ))}
      </ul>

      <section>
          <MealList />
      </section>
    </>
  );
}

export default App;
