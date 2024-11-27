import React, { useContext } from 'react'
import GlobalMovie from './GlobalMovie';

const MovieLists = ({ movie, setItems, setwatch }) => {
  const { title, overview, release_date, popularity } = movie;

  const handleItemView = () => {
    setItems(movie);
    setwatch(null)
  };
  return (
    <div
      onClick={handleItemView}
      className="border flex justify-between w-full border-gray-300 p-2 m-3 gap-2"
    >
      <div className="w-1/2">
        <p className="break-words  text-sm">{overview}</p>
      </div>
      <div className="w-1/2">
        <p>{title}</p>
        <p>{release_date}</p>
        <p>{popularity}</p>
      </div>
    </div>
  );
};

export default MovieLists
