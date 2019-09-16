import React from 'react';

const Filter = () => {
  return (
    <div className="filter">
      <h1>Filter Results</h1>
      <label htmlFor="">Location by city</label>
      <input type="text" placeholder="E.g San Frabcisco" />
      <label htmlFor="">Zip code</label>
      <input type="text" placeholder="Zip Code" />
      <label htmlFor="">Provider Category</label>
      <select>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
      <label htmlFor="">Speciality by provider category</label>
      <select>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
      <button>Hide advanced search</button>
      Gender of healthcare provider
      <input type="checkbox" name="vehicle" value="Bike"/> I have a bike<br/>
  <input type="checkbox" name="vehicle" value="Car" /> I have a car<br/>
    </div>
  );
};

export default Filter;
