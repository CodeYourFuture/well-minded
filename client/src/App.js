import React, { useState, useEffect } from "react";
import "./App.css";
import domain from "./config";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "../src/components/Header";
import Home from "../src/components/Home/Home";
import About from "../src/components/About/About";
import Organisations from "../src/components/Organisation/Organisations";
import Resources from "../src/components/Resource/Resources";
import Footer from "../src/components/Footer";
import Login from "../src/components/Admin/Login";
import Contact from "../src/components/Contact/Contact";
import AdminArea from "../src/components/Admin/AdminArea";
import Blogs from "../src/components/Home/Blogs";

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
        <Route path="/login" component={Login} />
        <Route path="/contact" component={Contact} />
        <Route path="/AdminArea" component={AdminArea} />
        <Route path="/blogs" component={Blogs} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;
