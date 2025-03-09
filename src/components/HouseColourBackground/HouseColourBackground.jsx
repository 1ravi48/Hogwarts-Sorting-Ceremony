import "./HouseColourBackground.css";

export default function HouseColourBackground({ backgroundColor, imagePath }) {
  return (
    <div
      style={{ backgroundColor: backgroundColor }}
      className="house-background"
    >
      <img src={imagePath} className="house-logo"></img>
    </div>
  );
}
