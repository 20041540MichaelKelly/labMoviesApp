import React from "react";
import SampleActor from "./actorSampleData";
import { MemoryRouter } from "react-router";
import ActorContextProvider from "../contexts/actorsContext";
import { action } from "@storybook/addon-actions";
import AddToFavouritesIcon from "../components/cardIcons/addToFavouriteActors";
import ActorCard from "../components/actors/actorCard";

export default {
  title: "Actor Page/ActorCard",
  component: ActorCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <ActorContextProvider>{Story()}</ActorContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <ActorCard
      actor={SampleActor}
      action={(actor) => <AddToFavouritesIcon actor={actor} />}
      taging={(actor) => null}
    />
  );
};

Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...SampleActor, profile_path: undefined };
  return (
    <ActorCard
      actor={sampleNoPoster}
      action={(actor) => <AddToFavouritesIcon actor={actor} />}
      taging={(actor) => null}
    />
  );
};
Exceptional.storyName = "exception";