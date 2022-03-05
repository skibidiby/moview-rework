import React from 'react';
import { useSelector } from 'react-redux';
import { selectMovies } from './movieSlice';

function MovieInfo(props) {
  const movies = useSelector(selectMovies);

  return (
    <div
      className="h-screen bg-cover"
      style={{ backgroundImage: `url(${movies[props.id].bg})` }}
    >
      <div className="bg-gradient-to-r from-black to-gray-200 h-full w-3/2 opacity-75">
        <div className="p-10 w-1/2">
          <h1 className="text-3xl text-white">{movies[props.id].name}</h1>
          <p className="text-xl text-white pt-5">{movies[props.id].content}</p>
          <div className="grid grid-cols-4 mt-10">
            <div className="flex rounded shadow border w-24 h-24">
              <p className="text-white mt-auto">Tom Holland</p>
            </div>
            <div className="flex rounded shadow border w-24 h-24">
              <p className="text-white mt-auto">Zendaya</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MovieInfo;
