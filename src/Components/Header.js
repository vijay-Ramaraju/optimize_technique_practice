import React, { useState } from 'react'


const Header = ({ setSearch }) => {

  const handleOnchange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className=" flex justify-center text-white w-full p-2  shadow-lg gap-5">
      <div>
        <h1 className="border border-gray-300 text-black p-2">CINEMA </h1>
      </div>
      <input
        onChange={handleOnchange}
        
        type="search"
        className="w-56 rounded-md bg-gray-50 border border-gray-300 outline-none px-2 text-black"
        placeholder="Cinema"
      />
    </div>
  );
};

export default Header
