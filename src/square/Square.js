import React from "react";
import styles from "./Square.module.css";

function Square() {
  return <div className={[styles.square, styles.squareHover].join(" ")} />;
}

export default Square;
