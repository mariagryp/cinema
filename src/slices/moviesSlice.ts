import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "../types";

interface MoviesState {
  data: Movie[];
}

const initialState: MoviesState = {
  data: [
    {
      id: 1,
      img: "https://www.myvue.com/-/jssmedia/vuecinemas/img/import/97af0272-0abf-4d8b-a1f0-3261cd1c646a_red-one_posters_one-sheet-2---imax_712px.jpg?mw=450&rev=46a4e260a43d487ca0ded8ae42d7c39f",
      title: "Movie Name",
      genre: "Movie Genre ",
      description: "Description",
      times: ["10:30", "12:00", "14:30"],
      duration: 63,
      country: "USA",
      year: 2023,
      cast: ["Another Name", "First Name", "Next Name"],
      premier: "7 september 2023",
    },
    {
      id: 2,
      img: "https://www.myvue.com/-/jssmedia/vuecinemas/img/import/a808f819-72cc-4749-be0d-7a4f56ec2d1d_the-wild-robot_posters_wrb_intl_tree_digital_1sheet_uk1_712px.jpg?mw=450&rev=815b46e4dc3b4e3282fb86d436388f85",
      title: "Movie Name 2",
      genre: "Movie Genre 2",
      description: "Description",
      times: ["10:30", "12:00", "16:30"],
      duration: 85,
      country: "USA",
      year: 2023,
      cast: ["Another Name", "First Name", "Next Name"],
      premier: "8 september 2023",
    },

    {
      id: 3,
      img: "https://www.myvue.com/-/jssmedia/vuecinemas/img/import/851b9fd2-ced6-4571-bd3b-44640146d51c_beetlejuice-beetlejuice_posters_main-one-sheet_712px.jpg?mw=450&rev=00907a7c148741a29539df93ebc3b952",
      title: "Movie Name 3",
      genre: "Movie Genre 3",
      description: "Description",
      times: ["10:30", "16:30", "20:30"],
      duration: 63,
      country: "USA",
      year: 2023,
      cast: ["Another Name", "First Name", "Next Name"],
      premier: "7 september 2023",
    },

    {
      id: 4,
      img: "https://www.myvue.com/-/jssmedia/vuecinemas/img/import/5f80eae9-b062-42b2-9b09-1a84a3eb9822_transformers-one_posters_transformers-one-out-now-1-sheet_712px.jpg?mw=450&rev=2883917e4fd046fc9463122873f0e531",
      title: "Name 4",
      genre: "Movie Genre 4",
      description: "Description",
      times: ["18:00", "19:30", "21:00"],
      duration: 63,
      country: "USA",
      year: 2023,
      cast: ["Another Name", "First Name", "Next Name"],
      premier: "7 september 2023",
    },
  ],
};

const moviesSlice = createSlice({
  name: "moviesSlice",
  initialState,
  reducers: {},
});

export const moviesReducer = moviesSlice.reducer;
