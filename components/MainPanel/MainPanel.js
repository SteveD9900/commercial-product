import React, { useState } from "react";
import Card from "../Card/Card";

import styles from "./MainPanel.module.scss";

export default function MainPanel(props) {

  return (
    <div className={styles.MainPanel}>
        <div className={styles.productContainer}>
        {props.products.map((product) => (
          <Card key={product.index} details={product}/>
        ))}
        {props.products.length === 0 ? (
            <span>No Result</span>
        ) : null}
        </div>
    </div>
  );
}
