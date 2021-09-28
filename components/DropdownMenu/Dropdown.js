import React, { useState } from "react";
import styles from "./Dropdown.module.scss";

export default function Dropdown(props) {
    const [selectedType, setSelectedType] = useState("All");
    const options = [
        "All",
        "Beer",
        "Wine",
        "Spirits",
        "Cider"
      ];
    return (
        <div className={styles.Dropdown}>
            <span>Filter By</span>
            <select
              className={styles.Dropdown}
              value={selectedType}
              onChange={(e) => {
                setSelectedType(e.target.value);
              }}
            >
              {options.map((option) => (
                <option key={option} name={option} value={option}>{option}</option>
              ))}

            </select>
        </div>
    );
  }