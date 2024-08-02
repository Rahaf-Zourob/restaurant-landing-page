import FlexDiv from "../FlexDiv";
import styles from "./HeadSection.module.css";

export default function HeadSection({
  classify,
  title,
  children,
  description,
  align = "start",
  h2Styling,
  titleStyling
}) {
  return (
    <FlexDiv direction="column" align={align} gap="none">
      <p className={styles.classify}>
        <span className={titleStyling}>{classify}</span>
      </p>
      <h2 className={`${styles.head} ${h2Styling}`}>{title}</h2>
      {description && (
        <div className={styles.description}>
          <p>{description}</p>
          {children}
        </div>
      )}
    </FlexDiv>
  );
}
