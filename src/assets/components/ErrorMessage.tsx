import type { ErrorMessageProps } from "../../types";

export default function ErrorMessage( {error, retryError}: ErrorMessageProps ) {
  return (
    <div>
      <p>{error}</p>
      <button onClick={retryError}>Retry</button>
    </div>
  );
}
