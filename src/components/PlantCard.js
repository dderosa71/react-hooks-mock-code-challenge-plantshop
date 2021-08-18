import React, {useState} from "react";

function PlantCard({name, image, price, id}) {

const [inStock, setInStock] = useState(false)

function switchStock(){
  setInStock((inStock)=>!inStock)
  console.log('dom')
}

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button onClick={switchStock} className="primary">In Stock</button>
      ) : (
        <button onClick={switchStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
