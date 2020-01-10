import { TOGGLE_THEME, SET_THEME } from "../constants/types";

/**
 * Theme Actions
 */
export const toggleThemeAction = () => {
  return {
    type: TOGGLE_THEME,
  };
};

export const setThemeAction = (theme) => {
  return {
    type: SET_THEME,
    theme
  };
};

