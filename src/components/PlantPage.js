import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [search, setSearch] = useState("")

  const [plants, setPlants] = useState([])

  useEffect(()=>(fetch('http://localhost:6001/plants')
  .then(resp => resp.json())
  .then(json => setPlants(json))
  ),[])

  const filteredPlants = plants.filter((plant)=>plant.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <main>
      <NewPlantForm setPlants={setPlants}/>
      <Search search={search} setSearch={setSearch} />
      <PlantList search={search} filteredPlants={filteredPlants} setPlants={setPlants}/>
    </main>
  );
}

export default PlantPage;
