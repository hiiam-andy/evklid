import React from 'react'

import style from '../styles/HowWeWorks.module.css'

export default function HowWeWorks() {
  return (
    <div className={style.sectionWork}>
    <h1 className={style.heading}>Как мы работаем</h1>
    <ul className={style.navigation}>
        <li className={style.workBtn}>1 шаг</li>
        <li className={style.workBtn}>2 шаг</li>
        <li className={style.workBtn}>3 шаг</li>
        <li className={style.workBtn}>4 шаг</li>
    </ul>
    <div className={style.slider}>
        <div className={style.slide__description}>
            <h3 className={style.slide__heading}>Проводим консультацию</h3>
            <p className={style.slide__text}>Влечет за собой процесс внедрения и модернизации приоритизации разума над эмоциями. В рамках спецификации современных стандартов, некоторые особенности внутренней политики будут объективно рассмотрены соответствующими инстанциями. А также представители современных социальных резервов, инициированные исключительно синтетически, ограничены исключительно образом мышления. Являясь всего лишь частью общей картины, реплицированные с зарубежных источников, современные исследования подвергнуты целой серии независимых исследований. Кстати,  стремящиеся вытеснить традиционное производство, нанотехнологии освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, призваны к ответу.</p>
            <a href="1234" className={style.btnMore}>Подробнее</a>
            <a href="1234" className={style.btnContract}>Договор</a>
        </div>
        <div className={style.right}>
            <img src="../img/how1.jpg" alt="консультация" className={style.image}/>
        </div>
    </div>
</div>
  )
}
