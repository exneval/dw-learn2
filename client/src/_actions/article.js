import { ADD_ARTICLE } from "../config/constants";

// Setup Action for Redux
export const addArticle = payload => {
  return {
    type: ADD_ARTICLE,
    payload
  };
};
