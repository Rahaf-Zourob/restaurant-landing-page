import React from "react";
import FlexDiv from "../FlexDiv";
import PortraitDecoration from "../PortraitDecoration";
import Container from "../Container";
import styles from "./ChefFemale.module.css";
import HeadSection from "../HeadSection";
import SearchBar from "../SearchBar";
import { location } from "../../utils/location";
import Button from "../Button";
import { combinedShape } from "../../utils/combinedShape";
import Circle from "../Circle";
import { multiCirclePatternV2 } from "../../utils/multiCirclePatternV2";

function ChefFemale() {
  const imageUrl = "/assets/Images/portrait_Decoration/chef-woman.png";

  return (
    <section className={styles.section}>
      <Container>
        <FlexDiv justify="between" gap="large">
          <FlexDiv className={styles.portrait_container}>
            <PortraitDecoration
              className={styles.Portrait_decoration}
              photoStyling={styles.lady_img}
              imgUrl={imageUrl}
              alter="Man with a laptop"
              bkColor="orange"
            >
              <img
                className={styles.wooden_board}
                src="./assets/Images/portrait_Decoration/wooden-board.png"
                alt=""
              />
              <img
                className={styles.location_img}
                src="./assets/Images/portrait_Decoration/location.png"
                alt="map"
              />
              <img
                className={styles.coffee_img}
                src="./assets/Images/portrait_Decoration/coffee.png"
                alt="pattern shape"
              />
              <div className={styles.combined_shape_container}>
                <div className={styles.combined_shape}>{combinedShape}</div>
                <div className={styles.combined_shape}>{combinedShape}</div>
              </div>
            </PortraitDecoration>
          </FlexDiv>
          <FlexDiv
            className={styles.content}
            direction="column"
            align="start"
            justify="start"
          >
            <HeadSection
              classify="FONDAS"
              title={<>Sube tu fonda a <span className={styles.bold_span}> fonditas </span> y duplica tus ingresos </>}
              align="start"
              titleStyling={styles.title_styling}
              h2Styling={styles.h2_styling}
              description={
                <>
                Inscríbete a nuestra plataforma y comienza a generar en estos 
                  <br /> momentos de crísis
                </>
              }
              titleContainerWidth
            />
            <FlexDiv justify="stretch">
              <Button radius="medium" bgColor="pink">
              Subir mi fonda
              </Button>
            </FlexDiv>
          </FlexDiv>
        </FlexDiv>
      </Container>
      <Circle className={styles.big_circle} background="pink" size="large" />
      <Circle
        className={styles.small_circle}
        background="fadeGreen"
        size="small"
      />
        <div className={styles.multi_circle_pattern_v2}> {multiCirclePatternV2}</div>
    </section>
  );
}

export default ChefFemale;
