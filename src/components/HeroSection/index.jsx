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
function HeroSection() {
  return (
    <section className={styles.container}>
      <Container>
        <FlexDiv justify="around">
          <Logo />
          <LinkList data={navbarMenu} gap="large" />
          <FlexDiv gap="large">
            <Button border>Inicia sesión</Button>
            <Button shape="circle" bgColor>
              {cart}
            </Button>
          </FlexDiv>
        </FlexDiv>

        <FlexDiv>
          <div>
            <p>De tu fonda favorita</p>
            <h1>La comida que ya conoces al mejor precio</h1>
            <SearchBar placeholder="Busca tu platillo favorito">
              <Button bgColor>Buscar</Button>
            </SearchBar>
          </div>
          <div>
            <div>
              <combinedShape />
              
            </div>
          </div>
        </FlexDiv>

        <div></div>
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
