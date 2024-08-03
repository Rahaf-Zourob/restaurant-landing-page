import React from "react";
import styles from "./PortraitDecoration.module.css";
import FlexDiv from "../FlexDiv";

function PortraitDecoration({ children, imgUrl, bkColor = "pink", alter, className ,photoStyling }) {
  return (
    <FlexDiv className={className}>
      <div className={styles.portrait_container}>
        <img className={photoStyling} src={imgUrl} alt={alter} />
        <div className={`${styles.background} ${styles[bkColor]}`}></div>
      </div>
      {children}
    </FlexDiv>
  );
}

export default PortraitDecoration;
