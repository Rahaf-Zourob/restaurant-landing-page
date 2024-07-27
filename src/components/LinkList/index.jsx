import styles from "./linkList.module.css"
export default function LinkList({ data, social_media, img }) {
  return (
    <>
      {img ?
        <ul className={styles.img_list}>
          {
            data.map(item => <li key={item.id} className={social_media ? styles.social_media : styles.payment}>
              <a href={item.link}>{item.svg}</a>
            </li>
            )
          } </ul> :
        <ul>
          {data.map(service=><li key={service.id}><a href={service.link}>{service.name}</a></li>)}
        </ul>
      }
    </>
  )
}