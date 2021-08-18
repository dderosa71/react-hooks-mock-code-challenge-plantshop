import React, { useState } from "react";

function PlantCard({ name, image, price, id, setPlants }) {

  const [inStock, setInStock] = useState(true)
  const [newPrice, setNewPrice] = useState("")
  const [editedPrice, setEditedPrice] = useState(price)


  function switchStock() {
    setInStock((inStock) => !inStock)
    console.log('dom')
  }

  function handleDelete(event) {
    event.preventDefault()
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    setPlants(((plants) => plants.filter((plant) => plant.id !== id)))
  }

  function updatePrice(event) {
    event.preventDefault()
    console.log(id)
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        "price": newPrice
      })
    })
    setEditedPrice(newPrice)
  }

  function handlePriceChange(event) {
    setNewPrice(event.target.value)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {editedPrice}</p>
      {inStock ? (
        <button onClick={switchStock} className="primary">In Stock</button>
      ) : (
        <button onClick={switchStock}>Out of Stock</button>
      )}
      <button onClick={handleDelete} style={{ backgroundColor: "red" }}>Delete</button>
      <form onSubmit={updatePrice}>
          <input onChange={handlePriceChange} value={newPrice} placeholder="Edit Price" type="number" />
          <button type="submit">Edit Price</button>
      </form>
    </li>
  );
}

export default PlantCard;
