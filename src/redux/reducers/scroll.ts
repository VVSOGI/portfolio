import {
  ABOUT_PAGE_SCROLL_TRUE,
  SCROLL_MOVING_TRUE,
  PASSION_BG_COLOR_CHANGE,
  PASSION_PAGE_ENTER,
} from "../constants";

const initalState = {
  navChange: false,
  aboutChange: false,
  bgColor: "#ffa600",
  passionEnter: false,
};

export const scrollReducer = (state = initalState, action: any) => {
  switch (action.type) {
    case SCROLL_MOVING_TRUE:
      state.navChange = action.payload;
      return { ...state };
    case ABOUT_PAGE_SCROLL_TRUE:
      state.aboutChange = action.payload;
      return { ...state };
    case PASSION_BG_COLOR_CHANGE:
      state.bgColor = action.payload;
      return { ...state };
    case PASSION_PAGE_ENTER:
      state.passionEnter = action.payload;
      return { ...state };
    default:
      return state;
  }
};
