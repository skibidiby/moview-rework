/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable jsx-a11y/tabindex-no-positive */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from 'renderer/firebase-config';
import MovieInfo from './movieInfo';
import { useAppSelector } from '../../app/hooks';
import { addMovies } from './movieSlice';
// import './App.css';

function Movies() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchMovies() {
      const questionsCol = collection(db, 'movies_test');
      const quesionSnapshot = await getDocs(questionsCol);
      const questionListInit = quesionSnapshot.docs.map((doc) => doc.data());
      console.log(questionListInit);
      dispatch(addMovies(questionListInit));
    }
    fetchMovies();
  }, [dispatch]);
  const movies = useAppSelector((state) => state.movies.movies);
  // const [id, setId] = useState(4);
  const [id, setId] = useState(4);
  useEffect(() => {
    document.getElementById('main')!.focus();
  });
  return (
    <div className="flex flex-col h-screen">
      <div
        id="main"
        role="main"
        className="p-2 flex overflow-x-hidden h-52 bg-black"
        tabIndex={1}
        onKeyDown={(e) => {
          const mainframe = document.getElementById('main')!;
          if (e.key === 'ArrowRight') {
            setId(id + 1);
            mainframe.scrollBy({ top: 0, left: 140, behavior: 'smooth' });
          } else if (e.key === 'ArrowLeft') {
            setId(id - 1);
            mainframe.scrollBy({ top: 0, left: -140, behavior: 'smooth' });
          }
        }}
      >
        {movies &&
          movies.map((e: any, el_id: number) => {
            return (
              <div
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movies[el_id].cover})`,
                }}
                className={`bg-blue-100 rounded shadow border p-6 m-4 h-30 bg-cover min-w-[100px] ${
                  id === el_id
                    ? ' outline outline-offset-2 outline-2 outline-blue-400'
                    : ' '
                }`}
                // key={el_id}
              >
                {/* <h5 className="text-3xl font-bold mb-4 mt-0">{e.name}</h5>
                <p className="text-gray-700 text-sm">{e.content}</p> */}
              </div>
            );
          })}
      </div>
      <MovieInfo id={id} />
    </div>
  );
}

export default Movies;
