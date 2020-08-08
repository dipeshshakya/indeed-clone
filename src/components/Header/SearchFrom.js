import React from "react";

function SearchFrom() {
  return (
    <form className="form__wrapper">
      <div className="SearchForm__whatInput">
        <label htmlFor="">What</label>
        <p>Job title, keywords, or company</p>
        <input type="text" placeholder="Job title, keywords, or company" />
      </div>
      <div className="SearchForm__whereInput">
        <label htmlFor="">where</label>
        <p>city, state/territory or postcode</p>
        <input type="text" placeholder="city, state/territory or postcode" />
      </div>
      <div className="form__button">
        <button type="submit">Find jobs</button>
      </div>
    </form>
  );
}

export default SearchFrom;
