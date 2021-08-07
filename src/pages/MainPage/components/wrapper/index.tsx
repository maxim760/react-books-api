import React from 'react';
import styles from "./wrapper.module.scss"
interface MainPageWrapperProps {
  children: React.ReactNode
}

export const MainPageWrapper: React.FC<MainPageWrapperProps> = ({children}) => {
  return <div className={styles.page}>{ children }</div>;
};
