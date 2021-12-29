import { SCROLL_MOVING_TRUE } from "../constants";

const initalState = {
  navChange: false,
};
export const scrollReducer = (state = initalState, action: any) => {
  switch (action.type) {
    case SCROLL_MOVING_TRUE:
      state.navChange = action.payload;
      return { ...state };
    default:
      return state;
  }
};
