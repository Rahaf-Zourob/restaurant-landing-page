import styles from "./button.module.css";
export default function Button({
  shape,
  handelClick,
  children,
  bgColor,
  border = false,
  radius = 'small',
  className
}) {

  const borderRadius ={
    small : styles.radius_small,
    medium: styles.radius_medium
  }
  return (
    <button
      onClick={handelClick}
      className={`${styles.button} ${
        shape === "circle" ? styles.circle : `${styles.rectangle} ${borderRadius[radius]}`
      } ${bgColor ? styles.bgPink : styles.transparent} ${border? styles.insert_border : ''} ${className} `}
    >
      {children}
    </button>
  );
}
