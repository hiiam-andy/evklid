import React, { useState } from 'react'

import style from '../../styles/Header.module.css'

import HeaderLogoSVG from '../SVG/HeaderLogoSVG'
import HamburgerSVG from '../SVG/HamburgerSVG'
import XSVG from '../SVG/XSVG'
import SearchIcon from '../SVG/SearchIcon'
import CloseSearch from '../SVG/CloseSearch'
import SearchModal from './SearchModal'
export default function Header() {

  const [isShowMenu,setIsShowMenu] = useState(false)
  const [isShowSearch, setIsShowSearch] = useState(false)

  const showMenu = () => {
    setIsShowMenu(!isShowMenu)
  }

  return (
    <header className={style.sectionHeader}>
    {
      !isShowMenu
      ? <HamburgerSVG className={style.hamburger} onClick={()=>showMenu()}/>
      : <XSVG className={style.XMenu} onClick={()=>showMenu()}/>      
    }
      
     {isShowMenu && <>
     <ul className={style.menu}>
            <li className={style.menuLink}>О нас</li>
            <li className={style.menuLink}>Проекты</li>
            <li className={style.menuLink}>Этапы</li>
            <li className={style.menuLink}>Отзывы</li>
            <li className={style.menuLink}>Контакты</li>
        </ul>
     </>}

    <HeaderLogoSVG className={style.logo}/>

    <div className={style.test}>
        <ul className={style.navigation}>
            <li className={style.link}>О нас</li>
            <li className={style.link}>Проекты</li>
            <li className={style.link}>Этапы</li>
            <li className={style.link}>Отзывы</li>
            <li className={style.link}>Контакты</li>
        </ul>
        <SearchIcon
          className={style.searchIcon} 
          onClick={()=>setIsShowSearch(true)}  />
        {
          isShowSearch &&  
            <CloseSearch onClick={()=>setIsShowSearch(false)} className={style.closeSearch}/>
        }

        {
        isShowSearch && <SearchModal setIsShowSearch={setIsShowSearch}/>
        }
    </div>

    </header> 
    
  )
}
