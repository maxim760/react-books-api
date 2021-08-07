import React, { useCallback, useEffect } from 'react';
import styles from './mainPage.module.scss';
import Skeleton from 'react-loading-skeleton';
import { Button } from '../../components/Button';
import { BookList } from './components/books/BookList';
import { useAppDispatch, useAppSelector } from '../../store/store';
import {
  selectBooks,
  selectIsBooksFinished,
  selectFilterQueryParams,
  selectStartIndex,
  selectStatus,
  selectTotalItems,
} from '../../store/ducks/books/selectors';
import { fetchBooks as fetchBooksStore } from '../../store/ducks/books/slice';
import { PAGINATION_STEP } from '../../utils/constants';
import { MainPageWrapper } from './components/wrapper';

export const MainPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const startIndex = useAppSelector(selectStartIndex);
  const { isLoading, isError, message } = useAppSelector(selectStatus);
  const filterParams = useAppSelector(selectFilterQueryParams);
  const totalItems = useAppSelector(selectTotalItems);
  const books = useAppSelector(selectBooks);
  const isBooksFinished = useAppSelector(selectIsBooksFinished);
  const fetchBooks = useCallback(() => {
    dispatch(fetchBooksStore({ count: PAGINATION_STEP, startIndex, filterParams }));
  }, [startIndex, filterParams, dispatch]);
  useEffect(() => {
    fetchBooks();
  }, []);
  if (isError) {
    return (
      <MainPageWrapper>
        <h2>{message ? `Ошибка: ${message}` : 'ошибка'}</h2>
      </MainPageWrapper>
    );
  }
  if (isLoading && books.length === 0) {
    return (
      <MainPageWrapper>
        <div className={styles.skeletonWrapper}>
          <Skeleton width={250} height={330} count={10} />
        </div>
      </MainPageWrapper>
    );
  }
  return (
    <MainPageWrapper>
      <p className={styles.countBooks}>Found {totalItems} results</p>
      <BookList className={styles.booksWrapper} items={books} />
      {!isBooksFinished && (
        <Button
          onClick={fetchBooks}
          className={styles.buttonMore}
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Load more'}
        </Button>
      )}
    </MainPageWrapper>
  );
};
