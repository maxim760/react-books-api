import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Categories, IStatus, SortBy, STATUS } from '../../../types';
import { IGetBooksParams } from '../../../types/api';
import { IBook } from '../../../types/books';
import { IBooksState } from './types';

const initialState: IBooksState = {
  books: [],
  statusInfo: {
    status: STATUS.NEVER,
  },
  startIndex: 0,
  totalItems: 0,
  filterParams: {
    category: Categories.all,
    query: "",
    sortBy: SortBy.relevance
  },
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBooks(state, action: PayloadAction<IBook[]>) {
      const books = action.payload
      state.books = action.payload;
      state.startIndex = books.length
    },
    addBooks(state, action: PayloadAction<IBook[]>) {
      const books = action.payload
      state.books.push(...books);
      state.startIndex += books.length
    },
    setFullStatus(state, action: PayloadAction<IStatus>) {
      state.statusInfo = action.payload;
    },
    setStatus(state, action: PayloadAction<IStatus['status']>) {
      state.statusInfo = { status: action.payload };
    },
    setErrorStatus(state, action: PayloadAction<string | undefined>) {
      state.statusInfo = {status: STATUS.ERROR, message: action.payload}
    },
    setTotalItems(state, action: PayloadAction<number>) {
      state.totalItems = action.payload
    },
    setFilterParams(state, action: PayloadAction<IBooksState["filterParams"]>) {
      state.filterParams = action.payload
    },
    fetchBooks(state, action: PayloadAction<IGetBooksParams>) {},
  },
});

export const {
  addBooks,
  setBooks,
  setFilterParams,
  setFullStatus,
  setStatus,
  setErrorStatus,
  fetchBooks,
  setTotalItems
} = booksSlice.actions;
export const booksReducer = booksSlice.reducer;
