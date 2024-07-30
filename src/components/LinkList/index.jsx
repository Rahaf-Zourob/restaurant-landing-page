import styles from "./linkList.module.css";
export default function LinkList({ data, social_media, img, direction='row', gap }) {

  const gaps = {
    small: styles.gap_small,
    medium: styles.gap_medium,
    large: styles.gap_large,
  };

  return (
    <>
      {img ? (
        <ul className ={`${styles.img_list} ${gaps[gap]}`} >
          {data.map((item) => (
            <li
              key={item.id}
              className={social_media ? styles.social_media : styles.payment}
            >
              <a href={item.link}>{item.svg}</a>
            </li>
          ))}
        </ul>
      ) : (
        <ul
          className={`${styles.service} ${
            direction === "row" ? styles.row : styles.column
          } ${gaps[gap]} `}
        >
          {data.map((service) => (
            <li key={service.id}>
              <a href={service.link}>{service.name}</a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}