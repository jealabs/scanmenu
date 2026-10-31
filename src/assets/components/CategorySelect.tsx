import type { CategorySelectProps } from "../../types";

export default function CategorySelect({ category, handleCategoryChange }: CategorySelectProps) {
  return (
    <select value={category} onChange={handleCategoryChange} name="category">
      <option value="Seafood">Seafood</option>
      <option value="Beef">Beef</option>
      <option value="Chicken">Chicken</option>
      <option value="Pasta">Pasta</option>
    </select>
  );
}
