import MenuCard from '../../../../components/MenuCard';
import Container from '../../../../components/Container';
import HeadSection from '../../../../components/HeadSection';

import { fondasData } from '../../../../mock/fondasData';

import styles from "../style.module.css"
import { leftArrow } from './../../../../utils/leftArrow';
import { rightArrow } from './../../../../utils/rightArrow';

export default function FondasSection() {
  return (
    <section>
      <Container>
      <HeadSection classify="Fonditas" title="Fondas cercanas" description="‘Estás son las fondas que se encuentran cerca!">
                    <div className={styles.description}>
                    <p>Ver todos</p>
                    <div className={styles.buttons}>
                      <button className={styles.arrow}>{leftArrow}</button>
                      <button className={styles.arrow}>{rightArrow}</button>
                    </div>
                    </div>
                </HeadSection>
        <div className={styles.menu_section}>
        {fondasData.map((item)=> <MenuCard key={item.id} type="fondas" name={item.name} time={item.time} classify={item.classify} image={item.image} rateNum={item.rate} />)}
        </div>
    </Container>
    </section>
  )
}