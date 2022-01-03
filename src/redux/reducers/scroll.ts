import { ABOUT_PAGE_SCROLL_TRUE, SCROLL_MOVING_TRUE } from "../constants";

const initalState = {
  navChange: false,
  aboutChange: false,
};

export const scrollReducer = (state = initalState, action: any) => {
  switch (action.type) {
    case SCROLL_MOVING_TRUE:
      state.navChange = action.payload;
      return { ...state };
    case ABOUT_PAGE_SCROLL_TRUE:
      state.aboutChange = action.payload;
      return { ...state };
    default:
      return state;
  }
};
