import styles from './footer-styles.module.css'
import SocialLink from './social-link'

export default function Footer() {
  return (
  <div className={styles.footer}>
    <SocialLink icon="/social/instagram-color-icon.png" name="Instagram" link="https://www.instagram.com/iamsroik/"/>
    <SocialLink icon="/social/youtube-color-icon.png" name="YouTube" link="https://www.youtube.com/channel/UC21xcITB_H73iJBdLFyY1iA"/>
    <SocialLink icon="/social/github-icon.png" name="GitHub" link="https://github.com/sroik"/>
  </div>
  )
}