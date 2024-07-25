import styles from "./button.module.css"
export default function Button({ shape, rate, handelClick, children }) {
    return (
        <button onClick={handelClick} className={`${styles.button}  ${shape === "circle" ? styles.circle : styles.rectangle}  ${rate && styles.btn_rate}`}>{children}</button>
    )
}