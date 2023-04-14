import React from "react";
import SampleTvShow from "./tvSampleData";
import { MemoryRouter } from "react-router";
import TvShowContextProvider from "../contexts/tvShowContext";
import { action } from "@storybook/addon-actions";
import AddToFavouritesIcon from "../components/cardIcons/addToFavouriteTvShows";
import AddToPlayListIcon from "../components/cardIcons/addToTvShowPlaylist";

import TvShowCard from "../components/tvshows/tvShowCard";

export default {
  title: "TV Show/TvShowCard",
  component: TvShowCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <TvShowContextProvider>{Story()}</TvShowContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <TvShowCard
      tvShow={SampleTvShow}
      actionFav={(tvShow) => <AddToFavouritesIcon tvShow={tvShow} />}
      action={(tvShow) => <AddToPlayListIcon tvShow={tvShow} />}
      taging={(tvShow) => null}
    />
  );
};

Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...SampleTvShow, poster_path: undefined };
  return (
    <TvShowCard
      tvShow={sampleNoPoster}
      actionFav={(tvShow) => <AddToFavouritesIcon tvShow={tvShow} />}
      action={(tvShow) => <AddToPlayListIcon tvShow={tvShow} />}
      taging={(tvShow) => null}
    />
  );
};
Exceptional.storyName = "exception";