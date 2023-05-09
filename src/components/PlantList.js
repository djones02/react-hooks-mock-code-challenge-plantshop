import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, deletePlant, handleUpdate}) {
  const plantMap = plants.map((plant) => {
    return <PlantCard handleUpdate={handleUpdate} deletePlant={deletePlant} key={plant.id} plant={plant}/>
  })

  return (
    <ul className="cards">
      {plantMap}
    </ul>
  );
}

export default PlantList;
