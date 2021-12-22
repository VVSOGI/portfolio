import { PAGE_BUTTON_CLICK } from "../constants";

const initalState = {
  isButtonClicked: false,
  page: 0,
};
export const pageReducer = (state = initalState, action: any) => {
  switch (action.type) {
    case PAGE_BUTTON_CLICK:
      state.isButtonClicked = action.payload;
      console.log({ ...state });

      return { ...state };
    default:
      return state;
  }
};
