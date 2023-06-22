import React from 'react'

import style from '../../styles/HowWeWorks.module.css'

export default function HowWeWorkItem({title, body}) {
  return (
    <div className={style.slider}>
        <div className={style.slide__description}>
            <h3 className={style.slide__heading}>{title}</h3>
            <p className={style.slide__text}>{body}</p>
            <button className={style.btnMore}>Подробнее</button>
            <button className={style.btnContract}>Договор</button>
        </div>
        <div className={style.right}>
            <img src="../../img/how1.jpg" alt="консультация" className={style.image}/>
        </div>
    </div>
  )
}
