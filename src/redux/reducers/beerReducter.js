import { Types } from "../actions/types";

const initialState = {
  beers: [],
};

export const beerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Types.GET_BEERS:
      return { ...state, beers: payload };
    default:
      return state;
  }
};

export const selectedBeerReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case Types.GET_BEER:
      return { ...state, ...payload };
    default:
      return state;
  }
};
