import React, { useState, useEffect } from 'react';
import './App.css';
import domain from './config';
import Header from './components/Header'

import {BrowserRouter,Route} from 'react-router-dom'
import Home from './components/Home'
import About from "./components/About";
import Organisations from "./components/Organisations";
import Resources from "./components/Resources";


function App() {

  // const [authors, setAuthors] = useState([]);

  // useEffect(() => {
  //   fetch(`${domain}/authors`)
  //     .then(res => res.json())
  //     .then(result => setAuthors(result.authors))
  // }, [])
  // return (
  //   <div className="App-header">
  //     <h1>Authors:</h1>
  //     <ul>
  //       {
  //         authors.length > 0 ? authors.map((a, i) => <li key={i}>{a}</li>) : <p>loading...</p>
  //       }
  //     </ul>
  //   </div>
  // );

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/organisations" component={Organisations} />
        <Route path="/resources" component={Resources} />
      </div>
    </BrowserRouter>
  );
  }
export default App;
