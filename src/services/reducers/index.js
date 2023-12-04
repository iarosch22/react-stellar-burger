import { combineReducers } from "redux";
import { ingredientReducer } from "./ingredients";

export const rootReducer = combineReducers({
    ingredient: ingredientReducer
});