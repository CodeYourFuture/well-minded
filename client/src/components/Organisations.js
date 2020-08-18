import React from "react";

const Organisations = () => {
 const handleAddNew = () => {
   fetch("https://staging-well-minded.herokuapp.com/", {
     method: "GET",
     headers: {
       "Content-type": "application/json",
     },
     body: JSON.stringify({
      
     }),
   })
     .then((res) => res.json())
     .then(() => {
       console.log("Message Added");
     });
 };

 return (
   <div className="container">
     <h2>Search for Organization</h2>
         <input
           className="input-name"
           type="search"
           name="from"
           placeholder="Search Organization"
         />
     
       <button onClick={() => handleAddNew()} type="submit">
         Submit
       </button>
    
   </div>
 );
};
export default Organisations;
