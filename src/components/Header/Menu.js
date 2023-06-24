import React from "react";

export default function Menu({ list, link }) {
  const navItems = ["О нас", "Проекты", "Этапы", "Отзывы", "Контакты"];

  return (
    <ul className={list}>
      {navItems.map((navItem) => {
        return <li className={link}>{navItem}</li>;
      })}
    </ul>
  );
}
