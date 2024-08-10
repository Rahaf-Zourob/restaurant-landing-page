import Container from './../Container';
import Logo from './../Logo';
import Circle from './../Circle';

import { combinedShape } from "../../utils/combinedShape";

import styles from "./topFooter.module.css"

export default function TopFooter() {
    return (
        <section className={styles.container}>
            <Container>
                <div className={styles.flex_container}>
                    <h2 className={styles.h2}>Es tiempo de <span className={styles.span}>ayudarnos</span>, ¿Te unes?</h2>
                    <div className={styles.mobile_container}>
                        <div className={styles.combined_shape}>
                            <div>{combinedShape}</div>
                            <div>{combinedShape}</div>
                        </div>
                        <div className={styles.mobile}>
                            <div className={styles.camera}>
                                <span className={styles.rectangle}></span>
                                <span className={styles.circle}></span>
                            </div>
                            <div className={styles.mobile_background}>
                                <Logo />
                                <div className={styles.img}></div>
                            </div>
                        </div>
                            <div className={styles.circles}>
                                <Circle size="small" background='fadeGreen' className={styles.end} />
                                <Circle size='large' background='lightGreen' />
                            </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}