import clsx from 'clsx'
import React from 'react'
import styles from "./button.module.scss";

type ButtonProps = {
  children: React.ReactNode,
  className?: string,
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<ButtonProps> = ({ children, className = "", ...props}) => {
  
  return (
    <button className={clsx(className, styles.btn)} {...props}>
      {children}
    </button>
  )
}