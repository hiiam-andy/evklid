import React from 'react'

import style from '../styles/Hero.module.css'

export default function Hero() {
  return (

    <div className={style.sectionHero}>
      <div className={style.info}>
          <h2 className={style.infoHeading}>Проектные решения любой сложности</h2>
          <p className={style.infoText}>Есть над чем задуматься: базовые сценарии поведения пользователей и по сей день остаются уделом проектантов</p>
          <button href="1234" className={style.heroBtn}>Заказать расчёт</button>
      </div>
      <div className={style.swiper} style={{position:'absolute'}}>
        <div className="swiper-wrapper">
          <div className="swiper-slide slide1"></div>
          <div className="swiper-slide slide2"></div>
          <div className="swiper-slide slide3"></div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
        <script src="js/swiper.js"></script>
    </div>

  )
}
