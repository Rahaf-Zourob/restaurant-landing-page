import styles from "./searchBar.module.css";
export default function SearchBar({
  width,
  type = "text",
  label,
  placeholder,
  children,
  name,
  className
}) {
  return (
    <form className={`${className} ${styles.input_wrapper} `} style={{ width: width }}>
      {label && <label>{label}: </label>}
      <input
        className={`${styles.input}`}
        type={type}
        name={name}
        placeholder={placeholder}
      />
      {children}
    </form>
  );
}
