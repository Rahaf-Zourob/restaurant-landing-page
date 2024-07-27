import styles from "./image.module.css"
export default function Image({ src, alt }) {
  return (
    <img src={src} alt={alt} className={styles.img} />
  )
}