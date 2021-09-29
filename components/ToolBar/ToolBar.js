import React from "react";

import styles from "./ToolBar.module.scss";
import Dropdown from "../Dropdown/Dropdown";
import SearchInput from "../SearchInput/SearchInput";
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { FILTER_PRODUCTS, SEARCH_PRODUCTS } from '../../store/actions/actionTypes';

export default function ToolBar() {
  const dispatch = useAppDispatch();
  function updateType(value) {
    dispatch({type: FILTER_PRODUCTS, payload: value});
  }

  function searchName(keywords) {
    dispatch({type: SEARCH_PRODUCTS, payload: keywords});
  }

  return (
    <div className={styles.ToolBar}>
      <div className={styles.dropdownContainer}>
        <SearchInput filterBySearch={searchName}/>&nbsp;
        <Dropdown filterItems={updateType} />
      </div>
    </div>
  );
}
