import React from 'react'
import styles from './HambergerMenu.module.css'

export const HambergerMenu = ({children}) => {
  return (
    <div className={styles['back-hambergermenu']}>
    <div className={styles['hamberger-menu']} >  
    {children}
    </div>
    </div> 
  )
}
