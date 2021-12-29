import { PAGE_BUTTON_CLICK } from "../constants";

const initalState = {
  isPageMove: false,
  page: 0,
};

export const pageReducer = (state = initalState, action: any) => {
  switch (action.type) {
    case PAGE_BUTTON_CLICK:
      state.isPageMove = action.payload;
      return { ...state };
    default:
      return state;
  }
};
