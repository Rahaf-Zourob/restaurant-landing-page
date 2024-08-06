import React, { useState } from "react";
import { favList } from "../../constant/favList";
import CarouselCard from "../CarouselCard";
import FlexDiv from "../FlexDiv";
import Container from "../Container";
import HeadSection from "../HeadSection";
import styles from "./Carousel.module.css";

function Carousel() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClick = (index) => {
    setSelectedIndex(index === selectedIndex ? null : index);
  };

  return (
    <section className={styles.section}>
      <Container>
        <FlexDiv direction="column">
          <HeadSection
            classify="Categorías"
            title="Las favoritas"
            align="center"
            titleStyling={styles.title_styling}
            h2Styling={styles.h2_styling}
          />
        </FlexDiv>
        <FlexDiv justify="between">
          {favList.map((itemData) => (
            <CarouselCard
              data={itemData}
              handleClick={handleClick}
              key={itemData.id}
              id={itemData.id}
              isActive={itemData.id === selectedIndex}
            />
          ))}
        </FlexDiv>
      </Container>
    </section>
  );
}

export default Carousel;
