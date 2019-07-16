import React from 'react';

const Search = ({ handleChange, value }) => {
  return (
    <div className="Search">
      <input className="input" type="text" value={value} onChange={handleChange} placeholder="Search Getty Images..." />
    </div>
  );
};

export default Search;
