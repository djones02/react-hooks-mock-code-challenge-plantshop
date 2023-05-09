import React,{useState} from "react";

function NewPlantForm({addPlant}) {
  const initialForm = {
    name: '',
    image: '',
    price: 0    
  }
  const [form, setForm] = useState(initialForm)
  
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch('http://localhost:6001/plants', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => res.json())
    .then((data) => {
      addPlant(data)
      
    })
    setForm(initialForm)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={e => handleSubmit(e)}>
        <input type="text" name="name" placeholder="Plant name" onChange={e => handleChange(e)}/>
        <input type="text" name="image" placeholder="Image URL" onChange={e => handleChange(e)}/>
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={e => handleChange(e)}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
