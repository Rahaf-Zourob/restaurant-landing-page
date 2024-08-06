import React from "react";
import FlexDiv from "../FlexDiv";
import PortraitDecoration from "../PortraitDecoration";
import Container from "../Container";
import styles from "./ManCustomer.module.css";
import HeadSection from "../HeadSection";
import SearchBar from "../SearchBar";
import { location } from "../../utils/location";
import Button from "../Button";
import { combinedShape } from "../../utils/combinedShape";
import { multiCirclePattern } from "../../utils/multiCirclePattern";
import Circle from "../Circle";

function ManCustomer() {
  const imageUrl = "/assets/Images/portrait_Decoration/man.png";

  return (
    <section className={styles.section}>
      <Container>
        <FlexDiv justify="between" gap="large">
          <FlexDiv className={styles.portrait_container}>
            <PortraitDecoration
              className={styles.Portrait_decoration}
              imgUrl={imageUrl}
              alter="Man with a laptop"
              bkColor="pink"
              photoStyling={styles.photo_styling}
            >
              <img
                className={styles.map_img}
                src="./assets/Images/portrait_Decoration/map.png"
                alt="map"
              />
              <img
                className={styles.bubbles_img}
                src="./assets/Images/portrait_Decoration/bubbles.png"
                alt="pattern shape"
              />
              <div className={styles.combined_shape_container}>
                <div className={styles.combined_shape}>{combinedShape}</div>
                <div className={styles.combined_shape}>{combinedShape}</div>
              </div>
              <FlexDiv className={styles.cdmx_label} justify="center">
                <FlexDiv className={styles.location_icon_cdmx}>
                  {location}
                </FlexDiv>
                <div>
                  <p className={styles.label_text}>CDMX</p>
                </div>
              </FlexDiv>
            </PortraitDecoration>
          </FlexDiv>
          <FlexDiv
            className={styles.content}
            direction="column"
            align="start"
            justify="start"
          >
            <HeadSection
              classify="MAPA"
              title="Encuentra en el mapa las mejores fondas"
              align="start"
              titleStyling={styles.title_styling}
              h2Styling={styles.h2_styling}
              description={
                <>
                  Encuentra las fondas cercanas por sí quieres hacer pick up{" "}
                  <br /> directo en las tiendas.
                </>
              }
              titleContainerWidth
            />
            <FlexDiv justify="stretch">
              <SearchBar
                placeholder="Tu código postal"
                className={styles.form_style}
                width="16.875rem"
              >
                <FlexDiv className={styles.location_icon}>{location}</FlexDiv>
              </SearchBar>
              <Button radius="medium" bgColor="pink">
                Buscar en mapa
              </Button>
            </FlexDiv>
          </FlexDiv>
        </FlexDiv>
      </Container>
      <div className={styles.multi_circle_pattern}>{multiCirclePattern}</div>
      <Circle
        className={styles.big_circle}
        background="lightOrange"
        size="large"
      />
      <Circle
        className={styles.small_circle}
        background="darkOrange"
        size="small"
      />
    </section>
  );
}

export default ManCustomer;
