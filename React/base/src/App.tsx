import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundaryExample from "@components/errorBoundary/ErrorBoundaryExample";
import Fallback from "@components/errorBoundary/Fallback";

export default function App() {
  return (
    <div>
      <ErrorBoundary FallbackComponent={Fallback}>
        <Suspense fallback={<div>Loading...</div>}>
          <ErrorBoundaryExample />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}