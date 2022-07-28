import { useEffect, useState } from "react";

/**
  <ErrorBoundary FallbackComponent={Fallback}>
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundaryExample />
    </Suspense>
  </ErrorBoundary>
 */

const throwError = () => {
  throw new Error("Something Broken");
};

export default function ErrorBoundaryExample() {
  const [error, setError] = useState(false);

  const throwErrorInRender = () => setError(true);

  useEffect(() => {
    if (error) throwError();
  }, [error]);

  return (
    <div>
      <button type="button" onClick={throwErrorInRender}>
        에러 만들기
      </button>
    </div>
  );
}
