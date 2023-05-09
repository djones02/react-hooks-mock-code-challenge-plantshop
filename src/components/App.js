import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
import { useState, useEffect } from "react";

function App() {
  // const [plants, setPlants] = useState([])
  // useEffect(() => {
  //   fetch('http://localhost:6001/plants')
  //     .then((response) => response.json())
  //     .then((data) => {setPlants(data)})
  // }, [])

  return (
    <div className="app">
      <Header />
      <PlantPage />
    </div>
  );
}

export default App;
