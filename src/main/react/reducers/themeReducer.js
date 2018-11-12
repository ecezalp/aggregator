import {theme1} from "../constants/colors";

const initialState = {
  theme: theme1,
};

const theme = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default theme;