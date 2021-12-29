import { PAGE_BUTTON_CLICK, SCROLL_MOVING_TRUE } from "../constants";

export const pageChange = (item: any) => {
  return {
    type: PAGE_BUTTON_CLICK,
    payload: item,
  };
};

export const scrollMoving = (item: boolean) => {
  return {
    type: SCROLL_MOVING_TRUE,
    payload: item,
  };
};
