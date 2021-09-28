import React, { useState, useEffect } from "react";

import styles from "./ItemDetails.module.scss";

export default function ItemDetails(props) {
  const [isSale] = useState(props.details.isSale);

  return (
    <div className={styles.ItemDetails}>
        {isSale ? (
            <div className={styles.saleStatus}>Sale</div>
        ) : null}
      <div className={styles.content}>
        <div className={styles.imgContainer}>
            <img
                className={styles.displayImage}
                alt="item"
                src={props.details.productImage}
            />
        </div>
        <span className={styles.displayName}>{props.details.productName}</span> &nbsp;
        <span className={styles.displayPrice}>{props.details.price}</span>
      </div>
    </div>
  );
}
