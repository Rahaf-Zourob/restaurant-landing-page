import { star } from './../../utils/rate';
import styles from "./btnRate.module.css"
export default function BtnRate({ rate }) {
    return (
        <button className={styles.button}>
            {star}
            <p className={styles.p}>{rate}</p>
        </button>
    )
}
