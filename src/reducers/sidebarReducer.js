import produce from "immer";
import { TOGGLE_SIDEBAR } from "constants/types";

const initialState = {
  visible: false
};

/* eslint-disable default-case, no-param-reassign */
const sidebarReducer = produce((draft, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      draft.visible = !draft.visible
      break;
  }
}, initialState);

export default sidebarReducer;
