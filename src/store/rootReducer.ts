import { combineReducers } from "@reduxjs/toolkit";
import { booksReducer } from "./ducks/books/slice";

export const rootReducer = combineReducers({
  books: booksReducer
})

export type RootState = ReturnType<typeof rootReducer>;