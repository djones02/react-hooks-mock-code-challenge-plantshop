import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { useState, useEffect } from "react";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then((response) => response.json())
      .then((data) => {setPlants(data)})
  }, [])

  function deletePlant(deletedPlant) {
    const newPlantList = plants.filter(plant => plant.id !== deletedPlant.id)
    setPlants(newPlantList)
  }

  function addPlant(plant) {
    setPlants([...plants, plant])
  }

  function handleSearch(e) {
    setSearch(e.target.value)
  }

  function updatePlant(updatedPlant) {
    const newPlantPrice = plants.map(plant => plant.id === updatedPlant.id? updatedPlant: plant)
    setPlants(newPlantPrice)
  }

  let searchedPlant = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <main>
      <NewPlantForm addPlant={addPlant}/>
      <Search handleSearch={handleSearch}/>
      <PlantList updatePlant={updatePlant} plants={searchedPlant} deletePlant={deletePlant}/>
    </main>
  );
}

export default PlantPage;
