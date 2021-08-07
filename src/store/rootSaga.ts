import { all } from "redux-saga/effects";
import { booksSaga } from "./ducks/books/sagas";

export function* rootSaga() {
  yield all([
    booksSaga()
  ]);
}