import { Link, useParams } from "react-router-dom";
type IdParams = {
  id: string
}

export default function MealDetail() {
  const {id} = useParams<IdParams>();
  return (
    <>
    <h1>MealDetail</h1>
    <p>Id: {id}</p>
    <Link to="/">back</Link>
    </>
  )
}
