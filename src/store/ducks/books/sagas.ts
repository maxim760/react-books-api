import { PayloadAction } from '@reduxjs/toolkit';
import { put, takeLatest, call, all, select } from 'redux-saga/effects';
import { apiBooks } from '../../../services/apiBooks';
import { STATUS } from '../../../types';
import { IGetBooksParams } from '../../../types/api';
import { IBooksData } from '../../../types/books';
import { selectBooks } from './selectors';
import { fetchBooks, setStatus, addBooks, setBooks, setErrorStatus, setTotalItems, setFilterParams } from './slice';
function* fetchBooksWatcher() {
  yield takeLatest(fetchBooks, fetchBooksWorker);
}
function* fetchBooksWorker({ payload }: PayloadAction<IGetBooksParams>) {
  if (payload.startIndex === 0) {
    yield put(setBooks([]))
  }
  yield put(setFilterParams(payload.filterParams))
  yield put(setStatus(STATUS.LOADING));
  try {
    const books: IBooksData = yield call(apiBooks.getAll, payload);
    yield put(addBooks(books.items));
    yield put(setTotalItems(books.totalItems))
    yield put(setStatus(STATUS.SUCCESS))
  } catch (error) {
    yield put(setErrorStatus(error.message))
  } 
}

export function* booksSaga() {
  yield all([
    fetchBooksWatcher()
  ])
} 