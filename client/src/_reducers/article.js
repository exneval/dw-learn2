import { ADD_ARTICLE } from "../config/constants";

// Setup Reducer for Redux
const initialState = {
  data: [{ title: "Mengapa aku dilahirkan?" }]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return Object.assign({}, state, {
        data: state.data.concat(action.payload)
      });
    default:
      return state;
  }
};

export default reducer;
