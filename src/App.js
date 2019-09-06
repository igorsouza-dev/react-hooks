import React, { useState } from 'react';

function App() {
  const [tech, setTech] = useState(['React', 'Reactjs', 'ReactNative']);
  const [newTech, setNewTech] = useState('');
  function handleAdd() {
    setTech([...tech, newTech]);
  }
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
      <button onClick={() => handleAdd()}>Add</button>
    </>
  );
}

export default App;
