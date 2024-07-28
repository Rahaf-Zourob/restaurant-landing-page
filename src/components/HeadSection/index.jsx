import styles from './HeadSection.module.css'
export default function HeadSection({ classify, title, children, description }) {
    return (
        <div>
            <p className={styles.classify}><span>{classify}</span></p>
            <h2 className={styles.head}>{title}</h2>
            {description && <div className={styles.description}>
                <p>{description}</p>
                {children}
            </div>}
        </div>
    )
}