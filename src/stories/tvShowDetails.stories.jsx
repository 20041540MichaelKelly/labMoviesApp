import React from "react";
import TvShowDetails from "../components/tvshows/tvShowDetails";
import SampleTvShow from "./tvSampleData";
import { MemoryRouter } from "react-router";
import TvShowContextProvider from "../contexts/tvShowContext";

export default {
  title: "TV Show/TvShowDetails",
  component: TvShowDetails,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <TvShowContextProvider>{Story()}</TvShowContextProvider>,
  ],
};

export const Basic = () => <TvShowDetails tvShow={SampleTvShow} />;

Basic.storyName = "Default";