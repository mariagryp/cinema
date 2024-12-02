import { Movie } from "../../types";

export const helpers = {
  getInfoData: (data: Movie) => [
    {
      label: "Release Date:",
      value: data.release,
    },
    {
      label: "Cast:",
      value: data.cast.join(", "),
    },
    {
      label: "Run Time:",
      value: data.duration,
    },
    {
      label: "Country:",
      value: data.country,
    },
    {
      label: "Premier:",
      value: data.premier,
    },
  ],
};
