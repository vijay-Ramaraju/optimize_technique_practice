import React, { useEffect, useState } from 'react'
import MovieLists from './MovieLists'
import RightSideContainer from './RightSideContainer'

const LeftSideBar = () => {

    const [cinemaData, setCinemaData] = useState([])
    useEffect(() => {
        getFetchData()
    }, [])
    const getFetchData = async() => {
        const url =
          "https://api.themoviedb.org/3/discover/movie?api_key=e6171b13d4159aa39793cc0b447bbb93&sort_by=popularity.desc"; 
        const response = await fetch(url);
        const data = await response.json()
        console.log(data)
        setCinemaData(data.results)
    }

    return (
      <div className="border border-gray-300 p-5 m-1 w-1/2"  >
        <div>
          {cinemaData.map((movie) => (
            <MovieLists key={movie.id} movie={movie} />
            
          ))}
        </div>
      </div>
    );
}

export default LeftSideBar
