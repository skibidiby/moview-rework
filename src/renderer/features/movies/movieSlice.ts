import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from 'renderer/app/store';

interface Movie {
  title: string;
  content: string;
  cover: string;
  background: string;
  file_name: string;
  id: number;
  movie_folder: string;
  parent_directory: string;
  pc: string;
  rating: number;
  trailer: string;
  cast: Cast[];
}
export interface Cast {
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  order: number;
  popularity: number;
  profile_path: string;
}
interface MovieSliceState {
  movies: Movie[];
}
const initialState: MovieSliceState = {
  movies: [
    {
      title: 'Spider-man',
      content: 'cool, movie',
      cover: 'https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
      background: '/q01XdEa4gW25BtZ5qmkbuwxfq1p.jpg',
      cast: [
        {
          cast_id: 1,
          character: 'test',
          credit_id: 'test',
          gender: 2,
          id: 1,
          known_for_department: 'acting',
          name: 'michael',
          order: 0,
          popularity: 12,
          profile_path: '/2JB4FMgQmnhbBlQ4SxWFN9EIVDi.jpg',
        },
      ],
      file_name: 'test',
      id: 1,
      movie_folder: 'test',
      parent_directory: 'test',
      pc: 'ctc',
      rating: 1,
      trailer: 'test',
    },
    {
      title: 'Spider-man',
      content: 'cool, movie',
      cover: 'https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
      background: '/q01XdEa4gW25BtZ5qmkbuwxfq1p.jpg',
      cast: [
        {
          cast_id: 1,
          character: 'test',
          credit_id: 'test',
          gender: 2,
          id: 1,
          known_for_department: 'acting',
          name: 'michael',
          order: 0,
          popularity: 12,
          profile_path: '/2JB4FMgQmnhbBlQ4SxWFN9EIVDi.jpg',
        },
      ],
      file_name: 'test',
      id: 1,
      movie_folder: 'test',
      parent_directory: 'test',
      pc: 'ctc',
      rating: 1,
      trailer: 'test',
    },
    {
      title: 'Spider-man',
      content: 'cool, movie',
      cover: 'https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
      background: '/q01XdEa4gW25BtZ5qmkbuwxfq1p.jpg',
      cast: [
        {
          cast_id: 1,
          character: 'test',
          credit_id: 'test',
          gender: 2,
          id: 1,
          known_for_department: 'acting',
          name: 'michael',
          order: 0,
          popularity: 12,
          profile_path: '/2JB4FMgQmnhbBlQ4SxWFN9EIVDi.jpg',
        },
      ],
      file_name: 'test',
      id: 1,
      movie_folder: 'test',
      parent_directory: 'test',
      pc: 'ctc',
      rating: 1,
      trailer: 'test',
    },
    {
      title: 'Spider-man',
      content: 'cool, movie',
      cover: 'https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
      background: '/q01XdEa4gW25BtZ5qmkbuwxfq1p.jpg',
      cast: [
        {
          cast_id: 1,
          character: 'test',
          credit_id: 'test',
          gender: 2,
          id: 1,
          known_for_department: 'acting',
          name: 'michael',
          order: 0,
          popularity: 12,
          profile_path: '/2JB4FMgQmnhbBlQ4SxWFN9EIVDi.jpg',
        },
      ],
      file_name: 'test',
      id: 1,
      movie_folder: 'test',
      parent_directory: 'test',
      pc: 'ctc',
      rating: 1,
      trailer: 'test',
    },
    {
      title: 'Spider-man',
      content: 'cool, movie',
      cover: 'https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
      background: '/q01XdEa4gW25BtZ5qmkbuwxfq1p.jpg',
      cast: [
        {
          cast_id: 1,
          character: 'test',
          credit_id: 'test',
          gender: 2,
          id: 1,
          known_for_department: 'acting',
          name: 'michael',
          order: 0,
          popularity: 12,
          profile_path: '/2JB4FMgQmnhbBlQ4SxWFN9EIVDi.jpg',
        },
      ],
      file_name: 'test',
      id: 1,
      movie_folder: 'test',
      parent_directory: 'test',
      pc: 'ctc',
      rating: 1,
      trailer: 'test',
    },
  ],
};

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
});

export const { addMovies } = movieSlice.actions;
export const selectMovies = (state: RootState) => state.movies.movies;
// export const selectMovies = (state: RootState) => state.movies;

export default movieSlice.reducer;
