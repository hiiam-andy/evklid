import React from "react";

import style from "../../styles/Footer.module.css";

export default function FooterForm({ check, checked }) {
  return (
    <div className={style.center}>
      <h3 className={style.centerHeading}>Оставить заявку</h3>
      <form
        className={style.form}
        action="https://jsonplaceholder.typicode.com/posts"
        method="post"
      >
        <input
          className={style.field}
          type="text"
          name="name"
          placeholder="Фамилия, имя и отчество*"
          id="name"
        />
        <input
          className={style.field}
          type="email"
          name="email"
          placeholder="E-mail*"
        />
        <textarea
          className={[style.field, style.message].join(" ")}
          type="text"
          name="message"
          placeholder="Сообщение"
          cols="40"
          rows="3"
        />
        <div className={style.application}>
          <button type="submint" className={style.btn}>
            Отправить данные
          </button>
          <label className={style.checkLabel} onClick={() => check()}>
            <svg
              onClick={(e) => e.stopPropagation()}
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="0.5" y="0.5" width="13" height="13" stroke="#CACACA" />
              {checked && (
                <path
                  d="M10.9495 4.08233L5.99977 9.03208L3.17135 6.20365"
                  stroke="#97EE3F"
                  strokeWidth="2"
                />
              )}
            </svg>

            <input type="checkbox" name="check" className={style.check} />
            <span
              className={style.checkboxText}
              onClick={(e) => e.stopPropagation()}
            >
              Согласен на обработку данных
            </span>
          </label>
        </div>
      </form>
    </div>
  );
}
