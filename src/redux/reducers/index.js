import { beerReducer, selectedBeerReducer } from "./beerReducter";
import { combineReducers } from "redux";

const reducers = combineReducers({
  allBeers: beerReducer,
  beer: selectedBeerReducer,
});

export default reducers;
