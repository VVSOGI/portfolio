import { combineReducers } from "redux";
import { pageReducer } from "./page";
import { scrollReducer } from "./scroll";

export const rootReducer = combineReducers({ pageReducer, scrollReducer });
