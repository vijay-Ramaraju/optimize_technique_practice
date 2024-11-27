import React, { useContext, useState,useEffect } from 'react'
import LeftSideBar from './LeftSideBar'
import RightSideContainer from './RightSideContainer'
import GlobalMovie from './GlobalMovie'
import MovieLists from './MovieLists'
import WatchList from './WatchList'

const MainContainer = ({ search }) => {
  const [cinemaData, setCinemaData] = useState([]);
  const [items, setItems] = useState(null);
  const [watch, setwatch] = useState(null);
  const data = cinemaData.filter(movie => movie.title.includes(search))
  useEffect(() => {
    getFetchData();
  }, []);
  const getFetchData = async () => {
    const url =
      "https://api.themoviedb.org/3/discover/movie?api_key=e6171b13d4159aa39793cc0b447bbb93&sort_by=popularity.desc";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setCinemaData(data.results);
  };
  const handleItems = (movie) => {
    setItems(movie);
  };
  const hanldeWatchList = (items) => {
    setwatch(items);
  };

  return (
    <div className="mt-2 p-2 flex justify-between gap-2">
      <div className="w-1/2">
        {data.map((movie) => (
          <MovieLists
            key={movie.id}
            movie={movie}
            setItems={handleItems}
            setwatch={hanldeWatchList}
          />
        ))}
      </div>
      {items ? (
        <RightSideContainer
          items={items}
          setItems={handleItems}
          setwatch={hanldeWatchList}
        />
      ) : null}
      {watch ? <WatchList watch={watch} /> : null}
    </div>
  );
};

export default MainContainer
