import React from "react";
import style from "../../styles/Header.module.css";
import CloseSearch from "../SVG/CloseSearch";

export default function SearchModal({ showSearch }) {
  return (
    <div className={style.searchContainer}>
      <div className={style.searchField} onClick={(e) => e.stopPropagation()}>
        <input className={style.searchInput} placeholder="Что будем искать?" />
        <CloseSearch
          className={style.closeSearch}
          onClick={() => showSearch("close")}
        />
      </div>
    </div>
  );
}
