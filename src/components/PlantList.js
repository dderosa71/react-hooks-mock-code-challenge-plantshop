import React,{useState } from "react";
import PlantCard from "./PlantCard";

function PlantList({search, setPlants, filteredPlants}) {

  const plantCardList = filteredPlants.map((plant)=> 
  <PlantCard 
  key={plant.id}
  image={plant.image}
  name={plant.name}
  id={plant.id}
  price={plant.price}
  setPlants={setPlants}
  />
  )

  return (
    <ul className="cards">{plantCardList}</ul>
  );
}

export default PlantList;
