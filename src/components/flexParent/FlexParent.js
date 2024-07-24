import React from "react";
import styles from "./FlexParent.module.css";

function FlexParent({
    children,
    direction = "row",
    container = "ul",
    wrapper = "li",
}) {
    const ContainerTag = container;
    const WrapperTag = wrapper;

    return (
        <ContainerTag
            className={`${styles.flexContainer} ${styles[direction]}`}
        >
            {React.Children.map(children, (child, index) => (
                <WrapperTag key={index} className={styles.flexItem}>
                    {child}
                </WrapperTag>
            ))}
        </ContainerTag>
    );
}

export default FlexParent;


// You can determine the - direction of the flex  :   direction = "column / row"
// You can determine the - element tag of ContainerTag  :   container = "ul / div / h3",
// You can determine the - element tag of WrapperTag  :   wrapper = "li / div / h4",