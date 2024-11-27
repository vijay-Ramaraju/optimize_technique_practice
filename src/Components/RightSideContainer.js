import React, { useContext } from 'react'
import GlobalMovie from './GlobalMovie';

const RightSideContainer = ({ items, setwatch, setItems }) => {
  const { overview, title, release_date, popularity } = items;

  const handleWatchList = () => {
    setwatch(items);
    setItems(null)
  };

  return (
    <div className="flex flex-col w-1/2 m-2 p-2 border border-gray-300 mt-3 gap-2 absolute top-1/3 left-1/3 right-1/3  shadow-lg bg-white">
      
      <h1>
        <span className="font-bold">Title: </span>
        {title}
      </h1>
      <h1>
        <span className="font-bold">About: </span>
        {overview}
      </h1>
      <h1>
        <span className="font-bold">Relesed Data: </span>
        {release_date}
      </h1>
      <h1>
        <span className="font-bold">Popularity: </span>
        {popularity}
      </h1>
      <div>
        <button
          onClick={handleWatchList}
          className="font-bold bg-green-500 p-1 border border-gray-400 rounded-md"
        >
          + Watchlist
        </button>
      </div>
    </div>
  );
};  

export default RightSideContainer
