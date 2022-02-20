import * as styles from '../../styles/layout/header.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  
  return (
    <div className={styles.header}>
      <ul className={styles.header__list}>
        <li className={styles.header_item}>
          <Image className={styles.header_logo} src="/images/logo.png" width="60" height="60" />
        </li>
        <div className={styles.header__center}>
          <li className={styles.header_item}>
            <p>
              <Link href="/">Главная</Link>
            </p>
          </li>
          <li className={styles.header_item}>
            <p>
              <Link href="/about">О сервере</Link>
            </p>
          </li>
          <li className={styles.header_item}>
            <p>
              <Link href="/rules">Правила</Link>
            </p>
          </li>
        </div>
        <li className={`${styles.header_item} ${styles.header_auth}`}>
          <button>Авторизация</button>
        </li>
      </ul>
    </div>
  )
}

export default Header