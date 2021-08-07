import React, { useCallback } from 'react';
import { useChange } from '../../hooks/useChange';
import { useSelect } from '../../hooks/useSelect';
import { useUpdateEffect } from '../../hooks/useUpdateEffect';
import { selectFilterQueryParams } from '../../store/ducks/books/selectors';
import { fetchBooks } from '../../store/ducks/books/slice';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { Categories, SortBy } from '../../types';
import { IFilterParams } from '../../types/api';
import { PAGINATION_STEP } from '../../utils/constants';
import { debounce } from '../../utils/debounce';
import { AppDropdown } from '../AppDropdown';
import { SearchInput } from '../SearchInput';

import styles from './header.module.scss';


const sortKeys = Object.values(SortBy);
const categoryKeys = Object.values(Categories);

export const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const {category, query, sortBy} = useAppSelector(selectFilterQueryParams)
  const { input } = useChange(query);
  const sortSelect = useSelect(sortKeys, sortBy)
  const categorySelect = useSelect(categoryKeys, category)
  const searchNewBooks = useCallback(
    debounce((filterParams: IFilterParams) => {
      dispatch(
        fetchBooks({
          count: PAGINATION_STEP,
          startIndex: 0,
          filterParams
        })
      );
    }, 250),
    []
  );
  useUpdateEffect(() => {
    const query = input.value 
    const sortBy = sortSelect.value.value 
    const category = categorySelect.value.value 
    searchNewBooks({query, sortBy, category});
  }, [input.value, sortSelect.value.value, categorySelect.value.value]);
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Search for books</h1>
      <SearchInput placeholder="Search book..." {...input} />
      <div className={styles.dropdowns}>
        <AppDropdown
          label="Categories"
          {...categorySelect}
        />
        <AppDropdown
          label="Sorting By"
          {...sortSelect}
        />
      </div>
    </header>
  );
};
