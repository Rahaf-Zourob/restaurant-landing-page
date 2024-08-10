import styles from "./CarouselCard.module.css";
import FlexDiv from "../FlexDiv";

function CarouselCard({ handleClick, data, isActive, id }) {
  let { mealName, mealDescription, rate, url } = data;

  const handlingClick = () => {
    handleClick(id);
  };

  return (
    <FlexDiv
      onClick={handlingClick}
      direction="column"
      className={`${styles.container} ${
        isActive ? styles.active_container : styles.not_active_container
      }`}
    >
      <FlexDiv className={styles.meal_img_container}>
        <FlexDiv className={styles.img_wrapper}>
          <img src={url} alt={`${mealName}Photo`} />
        </FlexDiv>
        <FlexDiv className={`${styles.rating} ${isActive? styles.active_rating : ''}`}>{rate}</FlexDiv>
      </FlexDiv>
      <FlexDiv direction="column">
        <h3
          className={`${styles.meal_name} ${
            isActive ? styles.active_meal_name : styles.not_active_meal_name
          }`}
        >
          {mealName}
        </h3>
        <p
          className={`${styles.meal_description} ${
            isActive ? styles.active_description : styles.not_active_description
          }`}
        >
          {mealDescription}
        </p>
      </FlexDiv>
    </FlexDiv>
  );
}

export default CarouselCard;
