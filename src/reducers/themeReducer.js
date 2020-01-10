import produce from "immer";
import { TOGGLE_THEME, SET_THEME } from "constants/types";

const initialState = {
  theme: "light"
};

/* eslint-disable default-case, no-param-reassign */
const themeReducer = produce((draft, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      draft.theme = draft.theme === "light"? "dark" : "light";
      break;
    case SET_THEME:
      console.log('action.theme: ' + action.theme)
      draft.theme = action.theme;
      break;
  }
}, initialState);

export default themeReducer;
