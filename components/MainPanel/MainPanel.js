import React, { useState } from "react";
import ItemDetails from "../ItemComponent/ItemDetails";

import styles from "./MainPanel.module.scss";

export default function MainPanel(props) {

  return (
    <div className={styles.MainPanel}>
        <div className={styles.productContainer}>
        {props.products.map((product) => (
          <ItemDetails key={product.index} details={product}/>
        ))}
        {props.products.length === 0 ? (
            <span>No Result</span>
        ) : null}
        </div>
    </div>
  );
}
