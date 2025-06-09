import React, { useState } from "react";

const TrafficLight = () => {
  const [color, setColor] = useState("red");
  const [showPurple, setShowPurple] = useState(false);

  const getClass = (currentColor) =>
    `light ${color === currentColor ? "active" : ""} ${currentColor}`;

  const cycleColors = () => {
    const colors = ["red", "yellow", "green"];
    if (showPurple) colors.push("purple");
    const currentIndex = colors.indexOf(color);
    const nextColor = colors[(currentIndex + 1) % colors.length];
    setColor(nextColor);
  };

  return (
    <div className="traffic-light-container">
      <div className={getClass("red")} onClick={() => setColor("red")}></div>
      <div className={getClass("yellow")} onClick={() => setColor("yellow")}></div>
      <div className={getClass("green")} onClick={() => setColor("green")}></div>
      {showPurple && (
        <div className={getClass("purple")} onClick={() => setColor("purple")}></div>
      )}
      <button onClick={cycleColors}>Cambiar color</button>
      <button onClick={() => setShowPurple(!showPurple)}>
        {showPurple ? "Ocultar púrpura" : "Agregar púrpura"}
      </button>
    </div>
  );
};

export default TrafficLight;
