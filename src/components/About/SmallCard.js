import React from "react";
import style from "../../styles/About.module.css";

export default function SmallCard({ title, body, image, alt }) {
  return (
    <div className={style.smallCard}>
      <img className={style.smallCard__image} src={image} alt={alt} />
      <div className={style.smallCard__text}>
        <h2 className={style.smallCard__heading}>{title}</h2>
        <div className={style.smallCard__text}>{body}</div>
      </div>
    </div>
  );
}
