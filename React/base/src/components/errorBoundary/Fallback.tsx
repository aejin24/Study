import { FallbackProps } from "react-error-boundary";

export default function Fallback({error, resetErrorBoundary}: FallbackProps ) {
  return (
    <div>
      <h1>An error occurred: {error.message}</h1>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}