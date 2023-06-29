import React, { useState } from "react";
import HeroCarousel from "./HeroCarousel";
import MyModal from "../UI/MyModal";

import style from "../../styles/Hero.module.css";

export default function Hero() {
  const [visible, setVisible] = useState(false);
  return (
    <div className={style.sectionHero}>
      <div className="container">
        <div className={style.info}>
          <h2 className={style.infoHeading}>
            Проектные решения любой сложности
          </h2>
          <p className={style.infoText}>
            Есть над чем задуматься: базовые сценарии поведения пользователей и
            по сей день остаются уделом проектантов
          </p>
          <button
            className={style.heroBtn}
            onClick={() => setVisible(!visible)}
          >
            Заказать расчёт
          </button>
        </div>
        <div>
          <HeroCarousel style={{ position: "absolute" }} />
        </div>
        {visible && <MyModal visible={visible} setVisible={setVisible} />}
      </div>
    </div>
  );
}
