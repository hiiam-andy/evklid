import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import style from "../../styles/Header.module.css";

import HeaderLogoSVG from "../SVG/HeaderLogoSVG";
import HamburgerSVG from "../SVG/HamburgerSVG";
import XSVG from "../SVG/XSVG";
import SearchIcon from "../SVG/SearchIcon";
import SearchModal from "./SearchModal";
import SideMenu from "./SideMenu";
import { MAIN_ROUTE } from "../../Pages/PAGES";

export default function Header() {
  const navigate = useNavigate();

  const [isShowMenu, setIsShowMenu] = useState(false);
  const [isShowSearch, setIsShowSearch] = useState(false);

  const showMenu = () => {
    setIsShowMenu(!isShowMenu);
  };
  const showSearch = (answer) => {
    if (answer === "close") {
      setIsShowSearch(false);
    }
    if (answer === "open") {
      setIsShowSearch(true);
    }
  };

  return (
    <header className={style.sectionHeader}>
      {!isShowMenu ? (
        <HamburgerSVG
          className={style.sideMenuHamburger}
          onClick={() => showMenu()}
        />
      ) : (
        <XSVG className={style.sideMenuX} onClick={() => showMenu()} />
      )}

      <SideMenu
        list={[style.sideMenu, isShowMenu ? style.menuIsActive : ""].join(" ")}
        link={style.sideMenu__link}
      />

      <HeaderLogoSVG
        className={style.logo}
        onClick={() => navigate(MAIN_ROUTE)}
      />

      <div className={style.navAndSearch}>
        <SideMenu list={style.navigation} link={style.navigationLink} />
        <SearchIcon
          className={style.searchIcon}
          onClick={() => showSearch("open")}
        />
        <SearchModal isShowSearch={isShowSearch} showSearch={showSearch} />
      </div>
    </header>
  );
}
