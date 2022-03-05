import { configureStore, Store } from '@reduxjs/toolkit';
import { counterSlice } from '../features/counter/counterSlice';
import { movieSlice } from '../features/movies/movieSlice';

export const store: Store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    movies: movieSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
