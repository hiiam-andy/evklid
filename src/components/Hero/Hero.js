import React, {useState} from 'react'
import HeroCarousel from './HeroCarousel'

import style from '../../styles/Hero.module.css'

export default function Hero() {

  return (

    <div className={style.sectionHero}>

      <div className={style.info}>
          <h2 className={style.infoHeading}>Проектные решения любой сложности</h2>
          <p className={style.infoText}>Есть над чем задуматься: базовые сценарии поведения пользователей и по сей день остаются уделом проектантов</p>
          <button className={style.heroBtn}>Заказать расчёт</button>
      </div>

      <HeroCarousel
      style={{position:'absolute'}}/>
      
    </div>

  )
}
