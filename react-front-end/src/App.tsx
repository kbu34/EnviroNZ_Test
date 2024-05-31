import React, { useState } from "react";
import "./App.css";

function App() {

  const [formData, setFormData] = useState({
    longitude: "",
    latitude: ""
  })

  const handleChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div className="m-2">
          <label>Latitude: </label>
          <input 
            className="border-solid border-2"
            type="text" 
            name="latitude"
            value={formData.latitude}
            onChange={handleChange}
          />
        </div>

        <div className="m-2">
          <label>Longitude: </label>
          <input 
            className="border-solid border-2"
            type="text" 
            name="longitude"
            value={formData.longitude}
            onChange={handleChange}
          />
        </div>

        <button className="rounded-md w-14 mt-2" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
