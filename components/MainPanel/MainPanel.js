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
        </div>
    </div>
  );
}
