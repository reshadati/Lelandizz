import React from 'react'
import styles from '../Layout.module.css'
import { HamMenu } from './HambergerMenu';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export const Header = () => {
  return (
    <div className="sticky-top">
    <div className={styles['header']}>
       <HamMenu/>
       <h3>lelandizz</h3>
       <div> 
       <ShoppingCartOutlinedIcon/>
       <SearchOutlinedIcon/>
       </div>
     
    </div></div>
  )
}
