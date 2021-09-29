import React from "react";

import styles from "./ToolBar.module.scss";
import Dropdown from "../Dropdown/Dropdown";
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { FILTER_PRODUCTS } from '../../store/actions/actionTypes';

export default function ToolBar() {
  const dispatch = useAppDispatch();
  function updateType(value) {
    dispatch({type: FILTER_PRODUCTS, payload: value});
  }

  return (
    <div className={styles.ToolBar}>
      <div className={styles.dropdownContainer}>
        <Dropdown filterItems={updateType} />
      </div>
    </div>
  );
}
