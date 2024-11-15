import { Movie } from "../types";
import { rtkApi } from "./rtkApi";

const movieApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getAllMovies: build.query<Movie[], void>({
      query: () => "movies",
    }),
    getMovieById: build.query<Movie, string>({
      query: (id) => `movies?id_like=${id}`,
      /* query: (id) => `movies/${id}`, */
      transformResponse: (data: Movie[]) => {
        return data[0];
      },
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllMoviesQuery, useGetMovieByIdQuery } = movieApi;
