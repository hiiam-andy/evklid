import React from "react";
import { useNavigate } from "react-router-dom";

import style from "../../styles/HowWeWorks.module.css";
import { STAGES_ROUTE } from "../../Pages/PAGES";

export default function HowWeWorkItem({ title, body, image }) {
  const navigate = useNavigate();

  return (
    <div className={style.slider}>
      <div className={style.slide__description}>
        <h3 className={style.slide__heading}>{title}</h3>
        <p className={style.slide__text}>{body}</p>
        <button
          className={style.btnMore}
          onClick={() => navigate(STAGES_ROUTE)}
        >
          Подробнее
        </button>
        <button className={style.btnContract}>Договор</button>
      </div>

      <img src={image} alt="консультация" className={style.image} />
    </div>
  );
}
