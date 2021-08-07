import { createSelector } from '@reduxjs/toolkit';
import { formatStatus } from '../../../utils/formatStatus';
import { RootState } from '../../rootReducer';

const booksState = (state: RootState) => state.books;

export const selectBooks = (state: RootState) => booksState(state).books;
export const selectFilterQueryParams = (state: RootState) => booksState(state).filterParams
export const selectStartIndex = (state: RootState) => booksState(state).startIndex;
export const selectTotalItems = (state: RootState) =>
  booksState(state).totalItems;
export const selectStatus = (state: RootState) => {
  const status = booksState(state).statusInfo;
  return formatStatus(status);
};

export const selectIsBooksFinished = createSelector(
  selectBooks,
  selectTotalItems,
  (books, total) => {
    return books.length >= total;
  }
);
