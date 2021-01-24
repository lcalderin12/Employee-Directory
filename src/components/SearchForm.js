import React from "react";
import People from "./People"

function SearchForm(props) {
  // if(props.type.name.first === props.search){
  //   return(
  //     <People/>
  //   )
  // }

  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search first name only"
          id="search"
        />
        <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;