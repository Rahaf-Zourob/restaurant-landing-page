import React from "react";
import styles from "./SearchBar.module.css";

function SearchBar({
    type = "text",
    label,
    placeholder,
    value,
    onChange,
    children,
}) {
    return (
        <form className={styles.input_wrapper}>
            {label && <span>{label}: </span>}
            <input className={styles.input}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            {children}
        </form>
    );
}

export default SearchBar;
