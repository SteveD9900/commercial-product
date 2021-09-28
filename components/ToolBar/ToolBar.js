import React from "react";

import styles from "./ToolBar.module.scss";
import Dropdown from "../DropdownMenu/Dropdown";

export default function ToolBar() {

  return (
    <div className={styles.ToolBar}>
      <div className={styles.dropdownContainer}>
        <Dropdown />
      </div>
    </div>
  );
}
