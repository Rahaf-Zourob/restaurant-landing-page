import styles from "./Circle.module.css";

function Circle({ children, size = "medium", background = "green" }) {
  const sizes = {
    small: styles.small,
    medium: styles.medium,
    large: styles.large,
  };
  const backgrounds = {
    green: styles.green,
    lightOrange: styles.light_orange,
    darkOrange: styles.dark_orange,
    pink: styles.pink,
  };

  return (
    <div className={`${sizes[size]} ${backgrounds[background]} ${styles.border_radius}`}>
      {children}
    </div>
  );
}

export default Circle;

// You can determine size "small / medium / large"
// You can determine BK "green / light_orange/ dark_orange/ pink"
