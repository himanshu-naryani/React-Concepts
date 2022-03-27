import React from "react";

function Hero({ hero }) {
  if (hero === "Joker") {
    throw new Error("Not a Hero!");
  }
  return (
    <div>
      <h2> {hero}</h2>
    </div>
  );
}

export default Hero;
