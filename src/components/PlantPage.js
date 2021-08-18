import React, {useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [search, setSearch] = useState("")

  return (
    <main>
      <NewPlantForm />
      <Search search={search} setSearch={setSearch} />
      <PlantList search={search}/>
    </main>
  );
}

export default PlantPage;
