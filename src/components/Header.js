import React from 'react'

import style from '../styles/Header.module.css'

export default function Header() {
  return (
    <header className={style.sectionHeader}>
    <a href="1234" className={style.logo}> </a>
    <div className={style.test}>
        <ul className={style.navigation}>
            <li className={style.item}>
                <a href="1234" className={style.link}>О нас</a> </li>
            <li className={style.item}>
                <a href="1234" className={style.link}>Проекты</a> </li>
            <li className={style.item}> 
               <a href="1234" className={style.link}>Этапы</a> </li>
            <li className={style.item}>
                <a href="1234" className={style.link}>Отзывы</a> </li>
            <li className={style.item}>
                <a href="1234" className={style.link}>Контакты</a> </li>
        </ul>
            <a href="1234" className={style.search}>
                <svg className={style.searchIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="7.56126" height="1.89031" transform="matrix(0.713342 0.700816 -0.713342 0.700816 18.6062 17.3762)" fill="#333333"/>
                    <path d="M20.9303 10.7726C20.9303 16.1533 16.4855 20.5452 10.9652 20.5452C5.44478 20.5452 1 16.1533 1 10.7726C1 5.39198 5.44478 1 10.9652 1C16.4855 1 20.9303 5.39198 20.9303 10.7726Z" stroke="#333333" strokeWidth="2"/>
                    </svg>
            </a>
    </div>
</header> 
  )
}
