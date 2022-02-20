import * as styles from '../../styles/layout/footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  
  return (
    <div className={styles.footer__wrapper}>
      <div className={styles.section__footer}>
        <footer className={styles.footer}>
          <p>Сервер является частью сети серверов PepeLand.</p>
          <p>Вся размещенная информация на сайте не является публичной офертой.</p>
          <p>We are in no way affiliated with or endorsed by Mojang, AB. Apple emojis provided by Apple. Apple® is a registered trademark of Apple Inc.</p>
        </footer>
      </div>
    </div>
  )
}

export default Footer