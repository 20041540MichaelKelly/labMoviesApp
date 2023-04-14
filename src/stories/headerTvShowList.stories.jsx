import React from "react";
import TvShowHeader from "../components/tvshows/headerTvShowList";
import { MemoryRouter } from "react-router";
import TvShowContextProvider from "../contexts/tvShowContext";

export default {
  title: "TV Show /TvShowPageHeader",
  component: TvShowHeader,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <TvShowContextProvider>{Story()}</TvShowContextProvider>,
  ],
};

export const Basic = () => <TvShowHeader title="Discover TV Shows" />;

Basic.storyName = "Default";
