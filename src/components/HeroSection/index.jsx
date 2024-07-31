import { location } from "../../utils/location";
import { combinedShape } from "../../utils/combinedShape";
import { navbarMenu } from "../../constant/navbarMenu";
import Logo from "../Logo";
import Container from "../Container";
import LinkList from "../LinkList/index";
import Button from "../Button";
import { cart } from "../../utils/cart";
import FlexDiv from "../FlexDiv";
import { bigWaves } from "../../utils/bigWaves";
import { smallWaves } from "../../utils/smallWaves";
import styles from "./HeroSection.module.css";
import SearchBar from "../SearchBar";
import Circle from "../Circle";
import { facebook } from "../../utils/facebook";
import { instagram } from "../../utils/instagram";
import { twitter } from "../../utils/twitter";
function HeroSection() {
  return (
    <section className={styles.section}>
      <Container>
        <FlexDiv justify="between">
          <Logo />
          <LinkList data={navbarMenu} gap="large" />
          <FlexDiv gap="large">
            <Button border>Inicia sesión</Button>
            <Button shape="circle" bgColor>
              {cart}
            </Button>
          </FlexDiv>
        </FlexDiv>

        <FlexDiv justify="between" className={styles.main}>
          <div className={styles.content_container}>
            <p className={styles.title}>De tu fonda favorita</p>
            <h1 className={styles.h1}>
              La comida que <br /> ya conoces <br /> al mejor precio
            </h1>
            <SearchBar
              className={styles.search_bar}
              placeholder="Busca tu platillo favorito"
            >
              <Button bgColor radius="medium" className={styles.search_btn}>
                Buscar
              </Button>
            </SearchBar>
          </div>
          <FlexDiv className={styles.imgs_container}>
            <div className={styles.combined_shape_container}>
              <div className={styles.combined_shape}>{combinedShape}</div>
              <div className={styles.combined_shape}>{combinedShape}</div>
            </div>
            <img
              className={styles.coffee_img}
              src="./assets/Images/coffee.png"
              alt=""
            />
            <img
              className={styles.cutting_table_img}
              src="./assets/Images/cutting_table.png"
              alt=""
            />
            <img
              className={styles.egg_pan_img}
              src="./assets/Images/egg_pan.png"
              alt=""
            />
            <Circle
              className={styles.circle}
              background="lightOrange"
              size="medium"
            >
              <div>{location}</div>
            </Circle>
            <div className={styles.single_combined_shape}>{combinedShape}</div>
          </FlexDiv>
        </FlexDiv>
        <FlexDiv gap="small" justify="start">
          <Button shape="circle" bgColor>
            {facebook}
          </Button>
          <Button shape="circle" bgColor>
            {twitter}
          </Button>
          <Button shape="circle" bgColor>
            {instagram}
          </Button>
        </FlexDiv>
      </Container>
      <div className={styles.bk_container}>
        <div className={styles.big_waves}>{bigWaves}</div>
        <div className={styles.small_waves}>{smallWaves}</div>
        <img
          className={styles.background}
          src="./assets/images/green-background.png"
          alt="Green Background"
        />
      </div>
    </section>
  );
}

export default HeroSection;
