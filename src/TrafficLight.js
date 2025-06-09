import React, { useState } from "react";

const TrafficLight = () => {
  const [color, setColor] = useState("red");
  const [showPurple, setShowPurple] = useState(false);

  const cycleColor = () => {
    const colors = ["red", "green", "yellow"];
    if (showPurple) colors.push("purple");

    const currentIndex = colors.indexOf(color);
    const nextIndex = (currentIndex + 1) % colors.length;
    setColor(colors[nextIndex]);
  };

  return (
    <div className="traffic-container">
      <div className="traffic-light">
        <div
          className={`light red ${color === "red" ? "glow" : ""}`}
          onClick={() => setColor("red")}
        ></div>
        <div
          className={`light yellow ${color === "yellow" ? "glow" : ""}`}
          onClick={() => setColor("yellow")}
        ></div>
        <div
          className={`light green ${color === "green" ? "glow" : ""}`}
          onClick={() => setColor("green")}
        ></div>
        {showPurple && (
          <div
            className={`light purple ${color === "purple" ? "glow" : ""}`}
            onClick={() => setColor("purple")}
          ></div>
        )}
      </div>

      <div className="buttons">
        <button onClick={cycleColor}>Cambiar Color</button>
        <button onClick={() => setShowPurple(!showPurple)}>
          {showPurple ? "Quitar púrpura" : "Añadir púrpura"}
        </button>
      </div>
    </div>
  );
};

export default TrafficLight;
