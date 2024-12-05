import { Movie, MovieSessions } from "../types";
import { rtkApi } from "./rtkApi";

const moviesApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getAllMovies: build.query<Movie[], void>({
      query: () => "movies",
    }),
    getMovieById: build.query<MovieSessions, string>({
      //query: (id) => `movies?id_like=${id}`,
      query: (id) => `movies/${id}?_embed=sessions`,
      /*  transformResponse: (data: Movie[]) => {
        return data[0];
      }, */
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllMoviesQuery, useGetMovieByIdQuery } = moviesApi;
