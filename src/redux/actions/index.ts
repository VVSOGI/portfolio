import {
  ABOUT_PAGE_SCROLL_TRUE,
  PAGE_BUTTON_CLICK,
  PAGE_MOVE_INDEX,
  SCROLL_MOVING_TRUE,
  PASSION_BG_COLOR_CHANGE,
  PASSION_PAGE_ENTER,
} from "../constants";

export const pageChange = (item: any) => {
  return {
    type: PAGE_BUTTON_CLICK,
    payload: item,
  };
};

export const pageIndexChange = (item: any) => {
  return {
    type: PAGE_MOVE_INDEX,
    payload: item,
  };
};

export const scrollMoving = (item: boolean) => {
  return {
    type: SCROLL_MOVING_TRUE,
    payload: item,
  };
};

export const aboutPageScroll = (item: boolean) => {
  return {
    type: ABOUT_PAGE_SCROLL_TRUE,
    payload: item,
  };
};

export const passionBgColorChange = (item: string) => {
  return {
    type: PASSION_BG_COLOR_CHANGE,
    payload: item,
  };
};

export const passionPageEnter = (item: boolean) => {
  return {
    type: PASSION_PAGE_ENTER,
    payload: item,
  };
};
