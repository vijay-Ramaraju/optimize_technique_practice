import React from 'react'

const WatchList = ({ watch }) => {
    const { overview, title, release_date, popularity } = watch;
  return (
      <div className="flex flex-col w-1/2 m-2 p-2 border border-gray-300 mt-3 gap-2 bg-gray-50">
          <h1 className='text-center'>WatchList</h1>
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
     
    </div>
  );
}

export default WatchList
