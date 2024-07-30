// import MenuCard from '../../../../components/MenuCard';
// import Container from './../../../../components/Container';
// import HeadSection from './../../../../components/HeadSection';

// import { mejoresData } from './../../../../mock/mejoresData';

// import styles from "../style.module.css"

// export default function MejoresSection() {
//     return (
//         <section>
//             <Container>
//                 <HeadSection classify="Fonditas" title="Los mejores menús" description="Aquí están los mejores menús de la semana, y decide que vas a pedir ">
//                     <p>Ver todos</p>
//                 </HeadSection>
//                 <div className={`${styles.menu_section} ${styles.gap}`}>
//                     {mejoresData.map((item) => <MenuCard key={item.id} type="mejores" price={item.price} image={item.image} classify={item.classify} description={item.description} time={item.time} rateNum={item.rate} name={item.name} />
//                     )}
//                 </div>
//             </Container>
//         </section>
//     )
// }