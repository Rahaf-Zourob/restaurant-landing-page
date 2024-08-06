import React from "react";
import styles from "./FavCardList.module.css";
import FavCard from "../FavCard/index";

function FavCardList({ cardData }) {
    return (
        <div className={styles.cardList}>
            {cardData.map((card) => (
                <FavCard
                    key={card.id}
                    imageSrc={card.imageSrc}
                    title={card.title}
                    description={card.description}
                />
            ))}
        </div>
    );
}

export default FavCardList;
