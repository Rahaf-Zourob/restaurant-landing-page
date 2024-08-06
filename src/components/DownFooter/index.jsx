// import SearchBar from '../SearchBar/SearchBar';
// import Container from './../Container';
// import LinkList from "../LinkList";
// import Logo from '../Logo';

// import { socialMedia } from './../../constant/socialMedia';
// import { paymentMethod, footerLinks } from '../../constant/footer';
// import { menuLinks1, menuLinks2 } from "../../constant/menuLinks";
// import { message } from './../../utils/message';

// import styles from "./downFooter.module.css"

// export default function DownFooter() {
//     return (
//         <div className={styles.footer}>
//             <Container>
//                 <div className={styles.flex}>
//                     <div className={styles.contact}>
//                         <h3 className={styles.h3}>¿Te apasiona ayudar a tu comunidad?</h3>
//                         <Logo />
//                         <LinkList data={socialMedia} social_media img={true} />
//                     </div>
//                     <div className={styles.menu}>
//                         <a className={styles.footerHead} href="/">Menu</a>
//                         <div>
//                             <LinkList data={menuLinks1} direction="column" />
//                             <LinkList data={menuLinks2} direction="column" />
//                         </div>
//                     </div>
//                     <div className={styles.subscribe}>
//                         <a className={styles.footerHead} href="/">Suscríbete</a>
//                         <SearchBar type="text" name="telegram" placeholder="Tu e-mail" width="100%">
//                             {message}
//                         </SearchBar>
//                     </div>
//                 </div>
//                 <hr />
//                 <div className={styles.footerLinks}>
//                     <LinkList data={paymentMethod} img={true} />
//                     <div className={styles.footerLinks}>
//                         <LinkList data={footerLinks} direction="row" />
//                         <p className={styles.signature}>© 2020 Fonditas</p>
//                     </div>
//                 </div>
//             </Container>
//         </div>
//     )
// }