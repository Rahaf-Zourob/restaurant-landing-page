import styles from "./Circle.module.css";

function Circle({
  children,
  size = "medium",
  background = "green",
  className,
}) {
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
    fadeGreen: styles.fade_green
  };

  return (
    <div
      className={`${sizes[size]} ${backgrounds[background]} ${styles.border_radius} ${styles.centering_children} ${className}`}
    >
      {children}
    </div>
  );
}

export default Circle;
