import React from 'react';

const Search = ({ handleSubmit }) => {
    //return a search bar that contains an image (logo), an input (search field), and a button to send request
    return (
      <form className="search" onSubmit={handleSubmit}>
          <img src="https://st3m.s3-us-west-1.amazonaws.com/Appstemlogo.png"></img>
          <input className="input" id="input" name="input" type="text" placeholder="Search gifs on Giffy..." />
          <button><i className="fa fa-search"></i></button>
      </form>
    )
};

export default Search;
