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
        <HouseColourBackground backgroundColor="#ae0001" />
        <HouseColourBackground backgroundColor="#1a472a" />
        <HouseColourBackground backgroundColor="#222f5b" />
        <HouseColourBackground backgroundColor="#ecb939" />
      </div>
      <img
        src="../public/hogwarts-sorting-hat.png"
        className={isHover ? "sorting-hat-enlarged" : "sorting-hat"}
        onMouseEnter={handleHover}
        onMouseLeave={handleNotHover}
      />
      <p className={isHover ? "sorting-hat-greet" : "sorting-hat-not-greet"}>
        Click me to begin the sorting ceremony
      </p>
    </div>
  );
}
