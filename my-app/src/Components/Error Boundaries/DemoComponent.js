import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import Hero from "./Hero";

function DemoComponent() {
  return (
    <div>
      <ErrorBoundary>
        <Hero hero="Superman" />
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero hero="Spiderman" />
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero hero="Joker" />
      </ErrorBoundary>
    </div>
  );
}

export default DemoComponent;
