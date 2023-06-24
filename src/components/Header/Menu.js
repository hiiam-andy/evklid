import React from "react";
import { useNavigate } from "react-router-dom";
import {
  PROJECTS_ROUTE,
  REVIEWS_ROUTE,
  ABOUT_ROUTE,
  STAGES_ROUTE,
  CONTACTS_ROUTE,
} from "../../Pages/PAGES";

export default function Menu({ list, link }) {
  const navigate = useNavigate();
  return (
    <ul className={list}>
      <li className={link} onClick={() => navigate(ABOUT_ROUTE)}>
        О нас
      </li>
      <li className={link} onClick={() => navigate(PROJECTS_ROUTE)}>
        Проекты
      </li>
      <li className={link} onClick={() => navigate(STAGES_ROUTE)}>
        Этапы
      </li>
      <li className={link} onClick={() => navigate(REVIEWS_ROUTE)}>
        Отзывы
      </li>
      <li className={link} onClick={() => navigate(CONTACTS_ROUTE)}>
        Контакты
      </li>
    </ul>
  );
}
