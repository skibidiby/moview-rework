// import React from 'react';
import { useSelector } from 'react-redux';
import { selectMovies, Cast } from './movieSlice';

interface Props {
  id: number;
}
function MovieInfo(props: Props) {
  const movies = useSelector(selectMovies);
  const { id } = props;
  return (
    <div
      className="flex flex-grow bg-contain bg-no-repeat bg-right bg-black"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movies[id].background})`,
      }}
    >
      <div className="bg-gradient-to-r from-black via-[#1B1A17] to-transperent h-full w-full">
        <div className="p-10 w-1/2">
          <h1 className="text-3xl text-white overflox-x-hidden whitespace-nowrap">
            {movies[id].title}
          </h1>
          <p className="text-xl text-white pt-5 h-[200px] overflow-hidden">
            {movies[id].content}
          </p>
          <div className="grid grid-cols-4 mt-10 content-center">
            {movies[id].cast.map((i: Cast) => {
              return (
                <div className="flex flex-col items-center">
                  <div
                    className="rounded shadow border w-24 h-24 bg-cover"
                    style={{
                      backgroundImage: `url(https://image.tmdb.org/t/p/w500/${i.profile_path})`,
                    }}
                  />
                  <p className="text-white mt-auto text-sm text-center">
                    {i.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default MovieInfo;
