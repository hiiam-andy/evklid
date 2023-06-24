import React, { useState } from "react";

import style from "../../styles/Header.module.css";

import HeaderLogoSVG from "../SVG/HeaderLogoSVG";
import HamburgerSVG from "../SVG/HamburgerSVG";
import XSVG from "../SVG/XSVG";
import SearchIcon from "../SVG/SearchIcon";
import CloseSearch from "../SVG/CloseSearch";
import SearchModal from "./SearchModal";
import Menu from "./Menu";

export default function Header() {
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

      {isShowMenu && <Menu list={style.sideMenu} link={style.sideMenuLink} />}

      <HeaderLogoSVG className={style.logo} />

      <div className={style.navAndSearch}>
        <Menu list={style.navigation} link={style.navigationLink} />
        <SearchIcon
          className={style.searchIcon}
          onClick={() => showSearch("open")}
        />
        {isShowSearch && (
          <CloseSearch
            className={style.closeSearch}
            onClick={() => showSearch("close")}
          />
        )}

        {isShowSearch && <SearchModal showSearch={showSearch} />}
      </div>
    </header>
  );
}
