import React, { useState } from "react";

const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: ""
  })


  const handleChange = (e) => {
    const { id, value } = e.target
    setLogin(prevState => ({
      ...prevState,
      [id]: value
    }))
  }

  return (
    <div className="container">
      <h1 className="text-center"> Login Page </h1>
      
          <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <label for="email" className="control-label mt-2">
              Email
          </label>
            <input type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={login.email}
              onChange={handleChange}
            />
            <label for="password" className="control-label mt-2">
              Password
          </label>
            <input type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              value={login.password}
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary mt-3" >Submit</button>
          </div>
          
        
    </div>
  );
};
export default Login;
