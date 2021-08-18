import React, {useState} from "react";

function NewPlantForm() {

  const [plantName, setPlantName] = useState("")
  const [imageURL, setImageURL] = useState("")
  const [plantPrice, setPlantPrice] = useState("")


  function newPlantSubmit(event){
    event.preventDefault()
    fetch('http://localhost:6001/plants',{
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({"name" : plantName, "image" : imageURL, "price": plantPrice})
    })
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={newPlantSubmit}> 
        <input onChange={(event)=>setPlantName(event.target.value)} value={plantName} type="text" name="name" placeholder="Plant name" />
        <input onChange={(event)=>setImageURL(event.target.value)} value={imageURL} type="text" name="image" placeholder="Image URL" />
        <input onChange={(event)=>setPlantPrice(event.target.value)}value={plantPrice} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
