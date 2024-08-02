import React from "react";
import styles from "./FlexDiv.module.css";

function FlexDiv({
  direction = "row",
  gap = "medium",
  justify = "center",
  align = "center",
  children,
  className,
  onClick,
}) {
  const directions = {
    row: styles.flex_direction_row,
    column: styles.flex_direction_column,
  };
  const gaps = {
    none: styles.gap_none,
    small: styles.gap_small,
    medium: styles.gap_medium,
    large: styles.gap_large,
  };
  const justifies = {
    center: styles.justify_center,
    around: styles.justify_space_around,
    between: styles.justify_space_between,
    start: styles.justify_start,
    stretch: styles.justify_stretch,
  };
  const aligns = {
    center: styles.align_center,
    left: styles.align_left,
    right: styles.align_right,
  };
  return (
    <div
      onClick={onClick}
      className={`${className} ${styles.flex} ${directions[direction]} ${gaps[gap]} ${justifies[justify]} ${aligns[align]}`}
    >
      {children}
    </div>
  );
}

export default FlexDiv;
