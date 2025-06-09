import React from "react";
import TrafficLight from "./TrafficLight";

const App = () => {
  console.log("App se renderizó");
  return (
    <div className="app">
      <h1>Semáforo</h1>
      <TrafficLight />
    </div>
  );
};

export default App;
