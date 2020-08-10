import React, { useState, useEffect } from 'react';
import './App.css';
import domain from './config';

function App() {

  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetch(`${domain}/`)
      .then(res => res.json())
      .then(result => setAuthors(result.authors))
  }, [])
  return (
    <div className="App-header">
      <h1>Authors:</h1>
      <ul>
        {
          authors.length > 0 ? authors.map((a, i) => <li key={i}>{a}</li>) : <p>loading...</p>
        }
      </ul>
    </div>
  );
}

export default App;