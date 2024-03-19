import React from 'react'
import styles from './Search.module.css'
import SearchIcon from '@mui/icons-material/Search';

export const Search = () => {
  return (
  
    <div className={styles['search-bar']}>
     <input type='text' name='search' className={styles['search']}
      placeholder='جستجو'  />
      <SearchIcon/>
    </div>
   
  )
}
