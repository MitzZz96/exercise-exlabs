import { Types } from "./types";

export const getBeers = (beers) => {
  return {
    type: Types.GET_BEERS,
    payload: beers,
  };
};

export const getBeer = (beer) => {
  return {
    type: Types.GET_BEER,
    payload: beer,
  };
};
