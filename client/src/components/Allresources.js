import React from 'react'
import '../css/Allresources.css'

const Allresources=({resource})=>{
return (
  <div>
    <div className="card container mb-3 ">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            src={resource.logo}
            className="card-img p-3"
            alt="..."
          />
        </div>
        <div className="col-md-8 bg-light ">
          <div className="card-body text-center d-flex-row mt-5">
            <h3 className="card-title">{resource.name}</h3>
            <p>Category:{resource.category}</p>
            <p className="card-text">
              <a href={resource.website}>{resource.website} </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}

export default Allresources