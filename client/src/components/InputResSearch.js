import React from "react";

function InputResSearch({ searchResource, setSearchResource }) {
  return (
    <div className="container text-right mt-3 mb-3">
      Search : <input
        placeholder="Type here ...."
        value={searchResource}
        onChange={(e) => {
          setSearchResource(e.target.value);
        }}
      />
    </div>
  );
}
export default InputResSearch;
