import { createStore, combineReducers, applyMiddleware } from "redux";

import articles from "../_reducers/article";
import species from "../_reducers/species";
import { logger, promise } from "../middleware";

// Global state
const rootReducers = combineReducers({
  articles,
  species
});

// Setup store for Redux
const store = createStore(rootReducers, applyMiddleware(logger, promise));

export default store;
