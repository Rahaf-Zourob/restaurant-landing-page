import Image from '../Image';
import BtnRate from '../BtnRate';

import styles from "./menu.module.css"

export default function MenuCard({ type, image, name, time, classify, description, rateNum, price }) {
  return (
    <div className={`${styles.card} ${type === "fondas" ? styles.fondas : styles.mejores}`}>
      <div className={styles.rate}>
        <Image src={image} alt={name} />
        <BtnRate rate={rateNum}>{rateNum}</BtnRate>
      </div>
      {type === "fondas" ?
        <div className={styles.description}>
          <h3>{name}</h3>
          <div className={styles.flex}>
            <p className={styles.time}>{time}</p>
            <p className={styles.classify}>{classify}</p>
          </div>
        </div>
        :
        <div className={styles.description}>
          <p className={styles.classify}>{classify}</p>
          <h3>{name}</h3>
          <p className={styles.description_mejores}>{description}</p>
          <div className={styles.flex}>
            <p className={styles.time}>{time}</p>
            <p className={styles.price}>{price}</p>
          </div>
        </div>
      }
    </div>
  )

}