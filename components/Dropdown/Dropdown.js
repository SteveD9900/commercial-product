import React, { useState } from "react";
import styles from "./Dropdown.module.scss";

export default function Dropdown(props) {
    const [selectedType, setSelectedType] = useState("All");
    const [options] = useState(props.options);

    const onChangeHandler = (e) => {
      setSelectedType(e.target.value);
      props.filterItems(e.target.value);
    }

    return (
        <div className={styles.Dropdown}>
            <span>Filter By</span>
            <select
              className={styles.Dropdown}
              value={selectedType}
              onChange={onChangeHandler}
            >
              {options.map((option) => (
                <option key={option} name={option} value={option}>{option}</option>
              ))}

            </select>
        </div>
    );
  }