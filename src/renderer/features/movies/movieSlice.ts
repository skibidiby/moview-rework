import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'renderer/app/store';

interface Movie {
  name: string;
  content: string;
  cover: string;
  bg: string;
}
interface MovieSliceState {
  movies: Movie[];
}
const initialState: MovieSliceState = {
  movies: [
    {
      name: 'Spider-man',
      content: 'cool, movie',
      cover: 'https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
      bg: 'https://image.tmdb.org/t/p/w500/xRyINp9KfMLVjRiO5nCsoRDdvvF.jpg',
    },
    {
      name: 'Spider-man 2',
      content: '1 another cool, movie',
      cover: 'https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
      bg: 'https://image.tmdb.org/t/p/w500/xRyINp9KfMLVjRiO5nCsoRDdvvF.jpg',
    },
    {
      name: 'Spider-man 4',
      content: '2 another cool, movie',
      cover: 'https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
      bg: 'https://image.tmdb.org/t/p/w500/xRyINp9KfMLVjRiO5nCsoRDdvvF.jpg',
    },
    {
      name: 'Spider-Man: No Way Home',
      content:
        'After being bitten by a genetically altered spider at Oscorp, nerdy but endearing high school student Peter Parker is endowed with amazing powers to become the superhero known as Spider-Man.',
      cover: 'https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
      bg: 'https://image.tmdb.org/t/p/w500/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg',
    },
    {
      name: 'Spider-man 6',
      content: '4 another cool, movie',
      cover: 'https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
      bg: 'https://image.tmdb.org/t/p/w500/xRyINp9KfMLVjRiO5nCsoRDdvvF.jpg',
    },
    {
      name: 'Spider-man 7',
      content: '5 another cool, movie',
      cover: 'https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
      bg: 'https://image.tmdb.org/t/p/w500/xRyINp9KfMLVjRiO5nCsoRDdvvF.jpg',
    },
    {
      name: 'Spider-man 8',
      content: '6 another cool, movie',
      cover: 'https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
      bg: 'https://image.tmdb.org/t/p/w500/xRyINp9KfMLVjRiO5nCsoRDdvvF.jpg',
    },
    {
      name: 'Spider-man 9',
      content: '7 another cool, movie',
      cover: 'https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
      bg: 'https://image.tmdb.org/t/p/w500/xRyINp9KfMLVjRiO5nCsoRDdvvF.jpg',
    },
    {
      name: 'Spider-man 10',
      content: '8 another cool, movie',
      cover: 'https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
      bg: 'https://image.tmdb.org/t/p/w500/xRyINp9KfMLVjRiO5nCsoRDdvvF.jpg',
    },
    {
      name: 'Spider-man 22',
      content: '9 another cool, movie',
      cover: 'https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
      bg: 'https://image.tmdb.org/t/p/w500/xRyINp9KfMLVjRiO5nCsoRDdvvF.jpg',
    },
    {
      name: 'Spider-man 33',
      content: '12 another cool, movie',
      cover: 'https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
      bg: 'https://image.tmdb.org/t/p/w500/xRyINp9KfMLVjRiO5nCsoRDdvvF.jpg',
    },
    {
      name: 'Spider-man 45',
      content: '13 another cool, movie',
      cover: 'https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
      bg: 'https://image.tmdb.org/t/p/w500/xRyINp9KfMLVjRiO5nCsoRDdvvF.jpg',
    },
    {
      name: 'Spider-man 45',
      content: '34 another cool, movie',
      cover: 'https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
      bg: 'https://image.tmdb.org/t/p/w500/xRyINp9KfMLVjRiO5nCsoRDdvvF.jpg',
    },
    {
      name: 'Spider-man 53',
      content: '55 another cool, movie',
      cover: 'https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
      bg: 'https://image.tmdb.org/t/p/w500/xRyINp9KfMLVjRiO5nCsoRDdvvF.jpg',
    },
    {
      name: 'Spider-man 24',
      content: '23 another cool, movie',
      cover: 'https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
      bg: 'https://image.tmdb.org/t/p/w500/xRyINp9KfMLVjRiO5nCsoRDdvvF.jpg',
    },
    {
      name: 'Spider-man 23',
      content: '11 another cool, movie',
      cover: 'https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
      bg: 'https://image.tmdb.org/t/p/w500/xRyINp9KfMLVjRiO5nCsoRDdvvF.jpg',
    },
    {
      name: 'Spider-man 11',
      content: '32 another cool, movie',
      cover: 'https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
      bg: 'https://image.tmdb.org/t/p/w500/xRyINp9KfMLVjRiO5nCsoRDdvvF.jpg',
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
