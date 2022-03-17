/* eslint-disable jsx-a11y/tabindex-no-positive */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Modal from './Modal';
import { selectMovies, Cast } from './movieSlice';

interface Props {
  switchPanel(): void;
  id: number;
  infoRef: React.RefObject<HTMLDivElement>;
  infoPanel: boolean;
}
function MovieInfo(props: Props) {
  const movies = useSelector(selectMovies);
  const [elID, setelID] = useState(0);
  const [showInfo, setShowInfo] = useState(false);
  const [showTrailer, setShowTrailer] = useState(false);
  const { id, infoRef, infoPanel, switchPanel } = props;
  useEffect(() => {
    if (infoPanel) {
      setelID(1);
    }
  }, [infoPanel]);
  return (
    <div
      className="flex flex-grow bg-contain bg-no-repeat bg-right bg-black"
      id="info"
      role="contentinfo"
      ref={infoRef}
      tabIndex={2}
      onKeyDown={(e) => {
        if (
          (e.key === 'ArrowDown' && elID < 3) ||
          (e.key === 'ArrowRight' && elID < 3)
        ) {
          setelID(elID + 1);
        } else if (e.key === 'ArrowUp' || (e.key === 'ArrowLeft' && elID)) {
          setelID(elID - 1);
          if (elID === 1) {
            switchPanel();
          }
        } else if (e.key === 'Enter') {
          switch (elID) {
            case 1:
              setShowInfo(!showInfo);
              break;
            case 2:
              setShowTrailer(!showTrailer);
              break;
            case 3:
              window.open(`https://www.themoviedb.org/movie/${movies[id].id}`);
              break;

            default:
              console.log('err');
              break;
          }
        }
      }}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movies[id].background})`,
      }}
    >
      {showInfo ? (
        <div className="w-full h-full z-50">
          <Modal
            text={movies[id].content}
            trailer={false}
            videoSrc={movies[id].trailer}
          />
        </div>
      ) : (
        ''
      )}
      {showTrailer ? (
        <div className="w-full h-full z-50">
          <Modal
            text={movies[id].content}
            trailer
            videoSrc={movies[id].trailer}
          />
        </div>
      ) : (
        ''
      )}
      <div className="bg-gradient-to-r from-black via-[#1B1A17] to-transperent h-full w-full">
        <div className="p-10 w-1/2 max-h-[200px]">
          <h1 className="text-3xl text-white overflox-x-hidden whitespace-nowrap">
            {movies[id].title}
          </h1>
          <p
            className={`text-xl text-white mt-5 h-[200px] overflow-hidden  ${
              elID === 1
                ? ' outline outline-offset-2 outline-2 outline-blue-400'
                : ' '
            }`}
          >
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
                  <p className="text-white text-sm text-center mt-0">
                    {i.name}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="flex flex-row mt-5 space-x-10 justify-center">
            <div
              className={`text-white text-xl text-center  w-full h-10 rounded shadow border  ${
                elID === 2
                  ? ' outline outline-offset-2 outline-2 outline-blue-400'
                  : ' '
              }`}
            >
              <p className="inline-block align-middle">Play trailer</p>
            </div>
            <div
              className={`text-white text-xl text-center  w-full h-10 rounded shadow border  ${
                elID === 3
                  ? ' outline outline-offset-2 outline-2 outline-blue-400'
                  : ' '
              }`}
            >
              <p className="inline-block align-middle">See in TMDB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MovieInfo;
