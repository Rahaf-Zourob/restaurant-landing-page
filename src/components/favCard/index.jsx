import React from "react";
import styles from "./FavCard.module.css";

function FavCard({ id, imageSrc, title, description }) {
    return (
        <div className={styles.card} key={id}>
            <img className={styles.cardImage} src={imageSrc} alt={title} />
            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardDescription}>{description}</p>
            </div>
        </div>
    );
}



export default FavCard;
