import React, { useState } from "react";

import styles from "./ToolBar.module.scss";
import Dropdown from "../Dropdown/Dropdown";
import SearchInput from "../SearchInput/SearchInput";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { FILTER_PRODUCTS } from "../../store/actions/actionTypes";

export default function ToolBar(props) {
  const dispatch = useAppDispatch();
  const { searchType, searchWords } = useAppSelector((state) => state.products);
  function updateType(value) {
    dispatch({
      type: FILTER_PRODUCTS,
      payload: { searchType: value, searchWords },
    });
  }

  function searchName(keywords) {
    dispatch({
      type: FILTER_PRODUCTS,
      payload: { searchType, searchWords: keywords },
    });
  }

  return (
    <div className={styles.ToolBar}>
      <div className={styles.dropdownContainer}>
        <SearchInput filterBySearch={searchName} />
        &nbsp;
        <Dropdown filterItems={updateType} options={props.typeList} />
      </div>
    </div>
  );
}
