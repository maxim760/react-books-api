import React from 'react'
import searchLogo from '../../assets/images/search.svg';
import Dropdown from "react-dropdown"
import 'react-dropdown/style.css';

import styles from "./header.module.scss"

export const Header: React.FC = () => {
  
  return (
    <header className={styles.header}>
        <h1 className={styles.title}>Search for books</h1>
        <div className={styles.inputWrapper}>
          <input className={styles.input} placeholder="Search book..." />
          <img
            className={styles.searchIcon}
            src={searchLogo}
            alt="search logo"
          />
        </div>
        <div className={styles.dropdowns}>
          <div className={styles.dropdown}>
            <div className={styles.dropdownTitle}>Categories</div>
            <Dropdown
              options={[
                { value: 'arsenal', label: 'ars' },
                { value: 'manchester', label: 'mu' },
              ]}
            />
          </div>
          <div>
            <div className={styles.dropdown}>
              <div className={styles.dropdownTitle}>Sorting By</div>
              <Dropdown
                options={[
                  { value: 'arsenal', label: 'ars' },
                  { value: 'manchester', label: 'mu' },
                ]}
              />
            </div>
          </div>
        </div>
      </header>
  )
}