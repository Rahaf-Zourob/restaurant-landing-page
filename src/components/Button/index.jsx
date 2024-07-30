import styles from "./button.module.css";
export default function Button({
  shape,
  handelClick,
  children,
  bgColor,
  border = false
}) {
  return (
    <button
      onClick={handelClick}
      className={`${styles.button} ${
        shape === "circle" ? styles.circle : styles.rectangle
      } ${bgColor ? styles.bgPink : styles.transparent} ${border? styles.insert_border : ''}`}
    >
      {children}
    </button>
  );
}
