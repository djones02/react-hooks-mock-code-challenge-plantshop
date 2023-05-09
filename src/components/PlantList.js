import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, deletePlant, updatePlant}) {
  const plantMap = plants.map((plant) => {
    return <PlantCard updatePlant={updatePlant} deletePlant={deletePlant} key={plant.id} plant={plant}/>
  })

  return (
    <ul className="cards">
      {plantMap}
    </ul>
  );
}

export default PlantList;
