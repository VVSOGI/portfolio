import { PAGE_BUTTON_CLICK } from "../constants";

export const pageChange = (item: any) => {
  return {
    type: PAGE_BUTTON_CLICK,
    payload: item,
  };
};
