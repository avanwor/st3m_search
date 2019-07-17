import React from 'react';

const Search = ({ value, handleChange, handleSubmit }) => {
  //return a search bar that contains an image (logo), an input (search field), and a button to send request
  return (
    <div className="search">
      <img src="https://st3m.s3-us-west-1.amazonaws.com/Appstemlogo.png"></img>
      <input className="input" type="text" value={value} onChange={handleChange} placeholder="Search Gifs on Giffy..." />
      <button type="submit" onClick={handleSubmit}><i className="fa fa-search"></i></button>
    </div>
  );
};

export default Search;
