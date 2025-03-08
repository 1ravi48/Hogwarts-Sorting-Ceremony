import "./App.css";
import HouseColourBackground from "./components/HouseColourBackground/HouseColourBackground";

export default function App() {
  return (
    <div className="page">
      <div className="four-colours">
        <HouseColourBackground backgroundColor="#ae0001" />
        <HouseColourBackground backgroundColor="#1a472a" />
        <HouseColourBackground backgroundColor="#222f5b" />
        <HouseColourBackground backgroundColor="#ecb939" />
      </div>
    </div>
  );
}
