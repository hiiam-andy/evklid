import React from "react";
import { useNavigate } from "react-router-dom";

import style from "../../styles/Footer.module.css";

import FooterForm from "./FooterForm";
import { ABOUT_ROUTE, PROJECTS_ROUTE, REVIEWS_ROUTE } from "../../Pages/PAGES";
import FooterLogoSVG from "../SVG/FooterLogoSVG";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className={style.sectionFooter}>
      <div className={style.left}>
        <FooterLogoSVG className={style.logo} />

        <ul className={style.navigation}>
          <li className={style.navLink} onClick={() => navigate(ABOUT_ROUTE)}>
            О нас
          </li>
          <li
            className={style.navLink}
            onClick={() => navigate(PROJECTS_ROUTE)}
          >
            Проекты
          </li>
          <li className={style.navLink} onClick={() => navigate(REVIEWS_ROUTE)}>
            Отзывы
          </li>
          <li className={style.navLink}>Договор оферты</li>
          <li className={style.navLink}>Договор подряда</li>
          <li className={style.navLink}>Конфиденциальность</li>
          <li className={style.navLink}>Партнёрское соглашение</li>
        </ul>

        <div className={style.social}>
          <svg
            className={style.socialLink}
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30 0C13.5 0 0 13.5241 0 30.1807C0 45.241 10.98 57.741 25.32 60V38.9157H17.7V30.1807H25.32V23.5241C25.32 15.9639 29.79 11.8072 36.66 11.8072C39.93 11.8072 43.3499 12.3795 43.3499 12.3795V19.8193H39.57C35.85 19.8193 34.68 22.1386 34.68 24.5181V30.1807H43.0199L41.6699 38.9157H34.68V60C41.7493 58.8791 48.1866 55.2576 52.8297 49.7893C57.4729 44.3211 60.016 37.3664 59.9999 30.1807C59.9999 13.5241 46.4999 0 30 0Z"
              fill="#7C7C7C"
            />
          </svg>

          <svg
            className={style.socialLink}
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30 0C13.432 0 0 13.4314 0 30C0 46.5686 13.432 60 30 60C46.568 60 60 46.5686 60 30C60 13.4314 46.568 0 30 0ZM45.2176 33.2446C46.6159 34.6103 48.0951 35.8957 49.3504 37.4026C49.9065 38.0692 50.4307 38.7585 50.8297 39.5337C51.3993 40.6392 50.8849 41.8515 49.8954 41.9171L43.7494 41.9159C42.162 42.0473 40.8988 41.4071 39.8339 40.3218C38.9837 39.457 38.195 38.5332 37.3762 37.6389C37.0416 37.2718 36.6893 36.9262 36.2695 36.6543C35.4316 36.1093 34.7036 36.2762 34.2236 37.1515C33.7344 38.0421 33.6227 39.0292 33.5761 40.0205C33.5092 41.4697 33.0721 41.8484 31.618 41.9165C28.5109 42.062 25.5628 41.5906 22.8227 40.0241C20.4055 38.6425 18.5346 36.6924 16.9043 34.4845C13.7297 30.1805 11.2984 25.4566 9.11386 20.597C8.6222 19.5026 8.98189 18.917 10.1893 18.8943C12.1952 18.8557 14.2011 18.8606 16.2071 18.8925C17.0234 18.9054 17.5636 19.3725 17.8772 20.1428C18.9612 22.8098 20.2901 25.3473 21.9554 27.7007C22.3992 28.3274 22.8522 28.9522 23.4973 29.3948C24.2093 29.8834 24.7519 29.7219 25.0877 28.9271C25.3025 28.4219 25.3952 27.8817 25.4418 27.3404C25.6014 25.486 25.6205 23.6323 25.3442 21.7854C25.1724 20.6296 24.5224 19.8832 23.3702 19.6647C22.7834 19.5536 22.8694 19.3363 23.1548 19.0011C23.6501 18.4217 24.1142 18.0632 25.0416 18.0632L31.9857 18.062C33.0801 18.2768 33.3256 18.7679 33.4742 19.8703L33.4803 27.5871C33.4674 28.0137 33.6945 29.2782 34.4606 29.5574C35.0744 29.76 35.4795 29.2677 35.8465 28.8792C37.5118 27.112 38.6983 25.0263 39.7608 22.8675C40.2298 21.9155 40.6343 20.9303 41.0271 19.9433C41.3193 19.2135 41.7735 18.8544 42.5972 18.8667L49.2841 18.8747C49.4811 18.8747 49.6812 18.8765 49.8764 18.9103C51.0034 19.103 51.3121 19.5879 50.9635 20.6873C50.4147 22.4145 49.3485 23.8533 48.3063 25.2958C47.1892 26.8401 45.9977 28.3304 44.8917 29.8815C43.8752 31.2994 43.9556 32.0133 45.2176 33.2446Z"
              fill="#7C7C7C"
            />
          </svg>

          <svg
            className={style.socialLink}
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_166612_3111)">
              <path
                d="M24.2578 30C24.2578 33.1714 26.8286 35.7422 30 35.7422C33.1714 35.7422 35.7422 33.1714 35.7422 30C35.7422 26.8286 33.1714 24.2578 30 24.2578C26.8286 24.2578 24.2578 26.8286 24.2578 30Z"
                fill="#7C7C7C"
              />
              <path
                d="M16.571 19.8403C16.8471 19.0923 17.2874 18.4153 17.8596 17.8596C18.4154 17.2874 19.0919 16.847 19.8404 16.571C20.4474 16.3352 21.3593 16.0546 23.0388 15.9781C24.8557 15.8953 25.4004 15.8774 30 15.8774C34.6001 15.8774 35.1448 15.8948 36.9612 15.9777C38.6407 16.0546 39.5531 16.3352 40.1596 16.571C40.9081 16.847 41.5851 17.2874 42.1404 17.8596C42.7126 18.4153 43.1529 19.0919 43.4294 19.8403C43.6652 20.4473 43.9458 21.3596 44.0222 23.0392C44.1051 24.8556 44.1229 25.4003 44.1229 30.0004C44.1229 34.6 44.1051 35.1447 44.0222 36.9616C43.9458 38.6411 43.6652 39.553 43.4294 40.16C43.1529 40.9084 42.713 41.585 42.1408 42.1407C41.5851 42.7129 40.9085 43.1533 40.1601 43.4293C39.5531 43.6655 38.6407 43.9461 36.9612 44.0226C35.1448 44.1054 34.6005 44.1228 30.0005 44.1228C25.3999 44.1228 24.8552 44.1054 23.0392 44.0226C21.3597 43.9461 20.4474 43.6655 19.8404 43.4293C18.338 42.8498 17.1506 41.6624 16.571 40.16C16.3353 39.553 16.0547 38.6411 15.9778 36.9616C15.8949 35.1447 15.8775 34.6 15.8775 30.0004C15.8775 25.4003 15.8949 24.8556 15.9778 23.0392C16.0542 21.3596 16.3348 20.4473 16.571 19.8403ZM30 38.8457C34.8857 38.8457 38.8463 34.8856 38.8463 29.9999C38.8463 25.1142 34.8857 21.1541 30 21.1541C25.1147 21.1541 21.1542 25.1142 21.1542 29.9999C21.1542 34.8856 25.1147 38.8457 30 38.8457ZM20.8044 22.8716C21.9461 22.8716 22.8717 21.946 22.8717 20.8044C22.8717 19.6627 21.9461 18.7371 20.8044 18.7371C19.6628 18.7371 18.7372 19.6627 18.7372 20.8044C18.7376 21.946 19.6628 22.8716 20.8044 22.8716Z"
                fill="#7C7C7C"
              />
              <path
                d="M30 0C46.566 0 60 13.434 60 30C60 46.566 46.566 60 30 60C13.434 60 0 46.566 0 30C0 13.434 13.434 0 30 0ZM12.8773 37.1022C12.9607 38.936 13.2523 40.188 13.678 41.2839C14.5729 43.5979 16.4021 45.4271 18.7161 46.322C19.8116 46.7477 21.064 47.0389 22.8973 47.1227C24.7343 47.2064 25.3212 47.2266 29.9995 47.2266C34.6783 47.2266 35.2647 47.2064 37.1022 47.1227C38.9355 47.0389 40.188 46.7477 41.2834 46.322C42.4333 45.8894 43.4743 45.2115 44.3349 44.3349C45.211 43.4747 45.889 42.4333 46.3216 41.2839C46.7473 40.1884 47.0389 38.936 47.1222 37.1027C47.2069 35.2652 47.2266 34.6783 47.2266 30C47.2266 25.3217 47.2069 24.7348 47.1227 22.8978C47.0393 21.064 46.7482 19.812 46.3225 18.7161C45.8899 17.5667 45.2115 16.5253 44.3349 15.6651C43.4747 14.7885 42.4333 14.1106 41.2839 13.678C40.188 13.2523 38.936 12.9611 37.1022 12.8773C35.2652 12.7936 34.6783 12.7734 30 12.7734C25.3217 12.7734 24.7348 12.7936 22.8978 12.8778C21.064 12.9611 19.812 13.2523 18.7161 13.6775C17.5667 14.1101 16.5253 14.7885 15.6647 15.6651C14.7885 16.5257 14.1101 17.5667 13.678 18.7161C13.2518 19.812 12.9607 21.064 12.8769 22.8978C12.7931 24.7348 12.7734 25.3217 12.7734 30C12.7734 34.6783 12.7931 35.2652 12.8773 37.1022Z"
                fill="#7C7C7C"
              />
            </g>
            <defs>
              <clipPath id="clip0_166612_3111">
                <rect
                  width="60"
                  height="60"
                  fill="white"
                  transform="matrix(-1 0 0 1 60 0)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>

      <FooterForm />

      <p className={style.text}>
        Высокий уровень вовлечения представителей целевой аудитории является
        четким доказательством простого факта: разбавленное изрядной долей
        эмпатии, рациональное мышление позволяет оценить значение модели
        развития. Таким образом, консультация с широким активом обеспечивает
        широкому кругу (специалистов) участие в формировании стандартных
        подходов.
      </p>
    </footer>
  );
}
