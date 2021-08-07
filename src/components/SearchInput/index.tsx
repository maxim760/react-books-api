import clsx from 'clsx';
import React from 'react';
import searchLogo from '../../assets/images/search.svg';
import { OnChange } from '../../types';
import styles from "./searchInput.module.scss"
interface SearchInputProps {
  onChange: OnChange,
  value: string,
  placeholder: string,
  className ?: string
}

export const SearchInput: React.FC<SearchInputProps> = ({placeholder, onChange, value, className}) => {
  return (
    <div className={clsx([styles.inputWrapper, className])}>
      <input className={styles.input} placeholder={placeholder} onChange={onChange} value={value} />
      <img className={styles.searchIcon} src={searchLogo} alt="search logo" />
    </div>
  );
};
