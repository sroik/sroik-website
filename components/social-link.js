import styles from './social-link-styles.module.css'
import Image from 'next/image'

export default function SocialLink(props) {
  return (
    <a className={styles.soclink} href={props.link}>
      <Image layout='fixed' src={props.icon} alt="" width={22} height={22}/>
      <p className={styles.socname}>{props.name}</p>
    </a>
  )
}
