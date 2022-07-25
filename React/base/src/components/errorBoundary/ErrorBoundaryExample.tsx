import { useEffect, useState } from "react";

const throwError = () => {
  throw new Error("Something Broken");
}

export default function ErrorBoundaryExample() {
  const [error, setError] = useState(false);

  const throwErrorInRender = () => setError(true);

  useEffect(() => {
    if (error) throwError();
  }, [error]);

  return (
    <div>
      <button onClick={throwErrorInRender}>에러 만들기</button>
    </div>
  );
}