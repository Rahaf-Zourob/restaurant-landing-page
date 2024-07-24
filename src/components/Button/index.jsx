import style from "./button.module.css"
export default function Button({ shape, rate, handelClick, children }) {
    return (
        <button onClick={handelClick} className={`${style.button}  ${shape === "circle" ? style.circle : style.rectangle}  ${rate && style.btn_rate}`}>{children}</button>
    )
}