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

function App() {
  const [resources, setResources] = useState([]);
  const [organisations, setOrganisations] = useState([]);
  const [error, setError] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const logout = () => {
    setIsAdmin(false);
    window.localStorage.removeItem("isAdmin");
  };
  

  useEffect(() => {
    const loginState = window.localStorage.getItem("isAdmin");
    if (loginState) {
      setIsAdmin(loginState);
    }
  }, []);

  const ResFetch = () => {
    fetch(`${domain}/api/resources/`)
      .then( (res) => res.json())
      .then((data) => setResources(data))
  };

  const OrgFetch = () => {
    fetch(`${domain}/api/organisations/org`)
      .then( (res) =>res.json())
      .then((data) => setOrganisations(data));
  };

  useEffect(() => {
    ResFetch();
    OrgFetch();
  }, []);

  if (error) {
    return (
      <div>
        <h2>Error</h2>
        {error.message}
      </div>
    );
  }

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/organisations" component={Organisations} />
        <Route
          path="/resources"
          render={(props) => (
            <Resources
              {...props}
              resources={resources}
              setResources={setResources}
              isAdmin={isAdmin}
            />
          )}
        />
        <Route
          path="/AdminArea"
          render={(props) => (
            <AdminArea
              {...props}
              organisations={organisations}
              setOrganisations={setOrganisations}
              resources={resources}
              setResources={setResources}
              isAdmin={isAdmin}
            />
          )}
        />
        <Route
          path="/login"
          render={(props) => <Login {...props} setIsAdmin={setIsAdmin} />}
        />
        <Route path="/contact" component={Contact} />

        <Footer isAdmin={isAdmin} logout={logout} />
      </div>
    </BrowserRouter>
  );
}
export default App;
