import React,{useState} from "react";

function PlantCard({plant, deletePlant, handleUpdate}) {
  const [button, setButton] = useState(true)
  const [newPrice, setNewPrice] = useState(plant.price)
  
  function handleButton() {
    setButton(prevButton => !prevButton)
  }

  function changePrice(e) {
    setNewPrice(e.target.value)
  }

  function handleDelete() {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(() => {
      deletePlant(plant.id)
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: 'PATCH',
      headers: { 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        price: parseFloat(newPrice)
      }) 
    })
    .then(response => response.json())
    .then((price) => {
      handleUpdate(price)
    })
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      <form onSubmit={e => handleSubmit(e)}>
        <input onChange={e => changePrice(e)} value={newPrice} type="number" step="0.01" name="price" placeholder="new price" />
        <input type="submit" value="Submit" />
      </form>
      <button className={button? "primary": ""} onClick={handleButton}>{button? "In Stock": "Out of Stock"}</button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default PlantCard;
