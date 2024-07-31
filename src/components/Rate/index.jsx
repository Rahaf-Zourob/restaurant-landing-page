import { star } from '../../utils/rate';
import styles from "./rate.module.css"
export default function Rate({ rate }) {
    return (
        <div className={styles.container}>
            {star}
            <p className={styles.p}>{rate}</p>
        </div>
    )
}
