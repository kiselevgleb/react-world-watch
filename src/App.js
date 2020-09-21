import React, { useState, useRef } from 'react'
import './App.css';
import InputForm from './inpForm';
import Out from './out';

function App() {
  const [watchs, setWatchs] = useState([]);

  const handleAdd = s => {
    setWatchs(prevWatchs => [...prevWatchs, s.watch]);
  }

  const handleRemove = id => {
    setWatchs(watchs.filter(o => o.id !== id));
  }
  return (
    <div className="App">
      <InputForm onAdd={handleAdd}></InputForm>
      <Out watchs={watchs} onRemove={handleRemove} />
    </div>
  );
}

export default App;
