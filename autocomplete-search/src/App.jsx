import React, { useState } from 'react';
import data from './resources/countryData.json';

function App() {
  const [state, setState] = useState([]);
  const handleChange = (event) => {
    const eventName = event.target.value.toLowerCase();
    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(eventName)
    );
    setState(filteredData);
  };
  const handleKey = (event) => {
    if (event.key === 'Escape') {
      setState([]);
    }
  };
  return (
    <div>
      <h1>Search</h1>
      <input type="text" onChange={handleChange} onKeyDown={handleKey} />
      <button>Search</button>
      {state.map((item, index) => (
        <div key={index}>{item.name}</div>
      ))}
    </div>
  );
}
export default App;
