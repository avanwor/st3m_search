import React from 'react';

const Search = ({ handleChange, value }) => {
  return (
    <div className="search">
      <img src="https://st3m.s3-us-west-1.amazonaws.com/Appstemlogo.png"></img>
      <input className="input" type="text" value={value} onChange={handleChange} placeholder="Search Getty Images..." />
    </div>
  );
};

export default Search;
