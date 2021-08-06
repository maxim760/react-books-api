import React from 'react'
import { Header } from '../../Header'

import styles from "./main.module.scss"

interface MainTemplateProps {
  children: React.ReactNode
}

export const MainTemplate: React.FC<MainTemplateProps> = ({ children }) => {
  
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
    </>
  )
}