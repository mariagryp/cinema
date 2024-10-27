import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMovieCard } from "../types";

interface MoviesState {
  data: IMovieCard[];
}

const initialState: MoviesState = {
  data: [
    {
      id: 1,
      img: "https://www.myvue.com/-/jssmedia/vuecinemas/img/import/a808f819-72cc-4749-be0d-7a4f56ec2d1d_the-wild-robot_posters_wrb_intl_tree_digital_1sheet_uk1_712px.jpg?mw=450&rev=815b46e4dc3b4e3282fb86d436388f85",
      title: "Movie Name",
      genre: "Movie Genre ",
    },
    {
      id: 2,
      img: "https://www.myvue.com/-/jssmedia/vuecinemas/img/import/a808f819-72cc-4749-be0d-7a4f56ec2d1d_the-wild-robot_posters_wrb_intl_tree_digital_1sheet_uk1_712px.jpg?mw=450&rev=815b46e4dc3b4e3282fb86d436388f85",
      title: "Movie Name 2",
      genre: "Movie Genre 2",
    },

    {
      id: 3,
      img: "https://www.myvue.com/-/jssmedia/vuecinemas/img/import/a808f819-72cc-4749-be0d-7a4f56ec2d1d_the-wild-robot_posters_wrb_intl_tree_digital_1sheet_uk1_712px.jpg?mw=450&rev=815b46e4dc3b4e3282fb86d436388f85",
      title: "Movie Name 3",
      genre: "Movie Genre 3",
    },

    {
      id: 4,
      img: "https://www.myvue.com/-/jssmedia/vuecinemas/img/import/a808f819-72cc-4749-be0d-7a4f56ec2d1d_the-wild-robot_posters_wrb_intl_tree_digital_1sheet_uk1_712px.jpg?mw=450&rev=815b46e4dc3b4e3282fb86d436388f85",
      title: "Name 4",
      genre: "Movie Genre 4",
    },
  ],
};

const moviesSlice = createSlice({
  name: "moviesSlice",
  initialState,
  reducers: {
    setMovieTitle: (
      state,
      action: PayloadAction<{ id: number; title: string }>
    ) => {
      const { id, title } = action.payload;
      const updatedMovies = state.data.map((movie) => {
        if (movie.id === id) {
          movie.title = title;
          return movie;
        }
        return movie;
      });

      state.data = updatedMovies;
    },
  },
});

export const { setMovieTitle } = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;
