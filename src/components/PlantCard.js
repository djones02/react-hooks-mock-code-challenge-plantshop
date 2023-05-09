import React,{useState} from "react";

function PlantCard({plant, deletePlant}) {
  const [button, setButton] = useState(true)
  
  function handleButton() {
    setButton(prevButton => !prevButton)
  }

  function handleDelete() {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: 'DELETE',
    })
    .then(res => res.json())
    .then((plant) => deletePlant(plant))
  }

  // function handleUpdate() {
  //   fetch(`http://localhost:6001/plants/${plant.id}`, {
  //     mehtod: 'PATCH',
  //     headers: { 'Content-Type': 'application/json'},
  //     body: JSON.stringify({
  //       'price': newPrice
  //     })
  //     .then(res => res.json())
  //     .then((price) => {
  //     })
  //   })
  // }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      <input
        type="text"
        id="new-price"
        placeholder="New Price"
      />
      <button className={button? "primary": ""} onClick={handleButton}>{button? "In Stock": "Out of Stock"}</button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default PlantCard;
