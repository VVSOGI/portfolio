import { PAGE_BUTTON_CLICK, PAGE_MOVE_INDEX } from "../constants";

const initalState = {
  isPageMove: false,
  page: 1,
};

export const pageReducer = (state = initalState, action: any) => {
  switch (action.type) {
    case PAGE_BUTTON_CLICK:
      state.isPageMove = action.payload;
      return { ...state };
    case PAGE_MOVE_INDEX:
      state.page = action.payload;
      return { ...state };
    default:
      return state;
  }
};
