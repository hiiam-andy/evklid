import React from "react";
import style from "../../styles/Header.module.css";
import CloseSearchSVG from "../SVG/CloseSearchSVG";
import SearchIcon from "../SVG/SearchIcon";

export default function SearchModal({ isShowSearch, showSearch }) {
  return (
    <div className={style.searchContainer}>
      <div
        className={[
          style.searchField,
          isShowSearch ? style.searchIsActive : "",
        ].join(" ")}
        onClick={(e) => e.stopPropagation()}
      >
        <input className={style.searchInput} placeholder="Что будем искать?" />
        <SearchIcon className={style.searchIcon__modal} />
        <CloseSearchSVG
          className={style.closeSearch}
          onClick={() => showSearch("close")}
        />
      </div>
    </div>
  );
}
