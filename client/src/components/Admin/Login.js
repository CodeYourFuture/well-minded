import React, { useState } from "react";



const Login = ({ setIsAdmin }) => {
  const [loginError, setLoginError] = useState(null);

  const [superAdmin, setSuperAdmin] = useState({
    email: "minko@email.com",
    password: "12345",
  });
  const [admin, setAdmin] = useState({
    email: "",
    password: "",
  });

  const submitLogin = (event) => {
    event.preventDefault()
    if (
      admin.email === superAdmin.email &&
      admin.password === superAdmin.password
    ) {
      setIsAdmin(true);
      window.localStorage.setItem("isAdmin",true)
    }else if(
      admin.email === superAdmin.email &&
      admin.password !== superAdmin.password
      ){
        setLoginError("wrong password")

    }else {
      setLoginError('check your password or email')
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setAdmin((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <div className="container login">
      <h1 className="text-center"> Login Page </h1>

      <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
        <label for="email" className="control-label mt-2">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Enter email"
          value={admin.email}
          onChange={handleChange}
        />
        <label for="password" className="control-label mt-2">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
          value={admin.password}
          onChange={handleChange}
        />
        <button
          onClick={(e)=>{submitLogin(e)}}
          type="submit"
          className="btn btn-primary mt-3"
        >
          Submit
        </button>
        {loginError && 
        <div className='bg-danger text-white'>{loginError}</div>}
      </div>
    </div>
  );
};
export default Login;
