import "./App.css";
import HouseColourBackground from "./components/HouseColourBackground/HouseColourBackground";
import { useState } from "react";

export default function App() {
  const [isHover, setIsHover] = useState(false);

  function handleHover() {
    setIsHover(true);
  }

  function handleNotHover() {
    setIsHover(false);
  }

  return (
    <div className="page">
      <div className="four-colours">
        <HouseColourBackground
          backgroundColor="#95103b"
          imagePath="../public/gryffindor-logo.png"
        />
        <HouseColourBackground
          backgroundColor="#1d7452"
          imagePath="../public/slytherin-logo.png"
        />
        <HouseColourBackground
          backgroundColor="#97b6d3"
          imagePath="../public/ravenclaw-logo.png"
        />
        <HouseColourBackground
          backgroundColor="#ffebb9"
          imagePath="../public/hufflepuff-logo.png"
        />
        <img
          src="../public/hogwarts-sorting-hat.png"
          className={isHover ? "sorting-hat-enlarged" : "sorting-hat"}
          onMouseEnter={handleHover}
          onMouseLeave={handleNotHover}
        />
      </div>
      <p
        className={isHover ? "sorting-hat-greet" : "sorting-hat-not-greet"}
        onMouseEnter={handleHover}
        onMouseLeave={handleNotHover}
      >
        Let's begin the <br /> sorting ceremony...
      </p>
    </div>
  );
}
