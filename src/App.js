import React, { useState, useEffect } from 'react';

function App() {
  const [tech, setTech] = useState(['React', 'Reactjs', 'ReactNative']);
  const [newTech, setNewTech] = useState('');
  function handleAdd() {
    setTech([...tech, newTech]);
  }
  // empty array = executes only one time
  // componentDidMount
  useEffect(() => {
    const storageTech = localStorage.getItem('tech');
    if (storageTech) {
      setTech(JSON.parse(storageTech));
    }
  }, []);

  // array with values = executes for every change in the array
  // componentDidUpdate
  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech));
  }, [tech]);

  return (
    <>
      <ul>
        {tech.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newTech}
        onChange={e => setNewTech(e.target.value)}
        placeholder="Type the new tech"
      />
      <button type="button" onClick={() => handleAdd()}>
        Add
      </button>
    </>
  );
}

export default App;
