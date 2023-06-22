import React from 'react'
import style from '../../styles/Header.module.css'

export default function SearchModal( {setIsShowSearch}) {
  return (
    <div className={style.searchContainer} onClick={()=>setIsShowSearch(false)}>
      <div className={style.searchField} onClick={e=>e.stopPropagation()}>
      <input
        className={style.searchInput}
        placeholder='Что будем искать?'/>
      </div>
    </div> 
  )
}