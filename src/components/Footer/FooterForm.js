import React from "react";

import style from "../../styles/Footer.module.css";

export default function FooterForm() {
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
          placeholder="Фамилия, имя и отчество *"
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
          <label className={style.check}>
            <input type="checkbox" name="check" className={style.check} />
            <span className={style.checkboxText}>
              Согласен на обработку данных
            </span>
          </label>
        </div>
      </form>
    </div>
  );
}
