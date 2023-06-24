import React, { useState } from "react";

import style from "../../styles/Questions.module.css";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={style.item} onClick={() => setIsActive(!isActive)}>
      <div className={style.title}>
        {title}

        {isActive ? (
          <svg
            className={style.accordion__imgActive}
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx="25" cy="25" rx="25" ry="25" fill="#ECECEC" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M25.0571 24.0571L25.0571 9L25.9429 9L25.9429 24.0571L33.8835 24.0571L41 24.0571L41 24.9429L25.9429 24.9429L25.9429 40L25.0571 40L25.0571 24.9429L10 24.9429L10 24.0571L25.0571 24.0571Z"
              fill="#666666"
            />
          </svg>
        ) : (
          <svg
            className={style.accordion__imgDisabled}
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx="25" cy="25" rx="25" ry="25" fill="#ECECEC" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M25.0571 24.0571L25.0571 9L25.9429 9L25.9429 24.0571L33.8835 24.0571L41 24.0571L41 24.9429L25.9429 24.9429L25.9429 40L25.0571 40L25.0571 24.9429L10 24.9429L10 24.0571L25.0571 24.0571Z"
              fill="#666666"
            />
          </svg>
        )}
      </div>
      {isActive && <div className={style.content}>{content}</div>}
    </div>
  );
};

export default Accordion;
