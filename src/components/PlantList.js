import React,{useState, useEffect } from "react";
import PlantCard from "./PlantCard";

function PlantList({search}) {

  const [plants, setPlants] = useState([])

  useEffect(()=>(fetch('http://localhost:6001/plants')
  .then(resp => resp.json())
  .then(json => setPlants(json))
  .then(dom => console.log(dom))
  ),[])

  const filteredPlants = plants.filter((plant)=>plant.name.toLowerCase().includes(search.toLowerCase()))

  const plantCardList = filteredPlants.map((plant)=> 
  <PlantCard 
  image={plant.image}
  name={plant.name}
  id={plant.id}
  price={plant.price}
  />
  )

  return (
    <ul className="cards">{plantCardList}</ul>
  );
}

export default PlantList;
