import React from 'react'

import style from '../styles/Header.module.css'

export default function Header() {
  return (

    <header className={style.sectionHeader}>

    <image className={style.logo}/>
    <div className={style.test}>
        <ul className={style.navigation}>
            <li className={style.link}>О нас</li>
            <li className={style.link}>Проекты</li>
            <li className={style.link}>Этапы</li>
            <li className={style.link}>Отзывы</li>
            <li className={style.link}>Контакты</li>
        </ul>
        <svg className={style.searchIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="7.56126" height="1.89031" transform="matrix(0.713342 0.700816 -0.713342 0.700816 18.6062 17.3762)" fill="#333333"/>
          <path d="M20.9303 10.7726C20.9303 16.1533 16.4855 20.5452 10.9652 20.5452C5.44478 20.5452 1 16.1533 1 10.7726C1 5.39198 5.44478 1 10.9652 1C16.4855 1 20.9303 5.39198 20.9303 10.7726Z" stroke="#333333" strokeWidth="2"/>
        </svg>
    </div>

    </header> 
    
  )
}
