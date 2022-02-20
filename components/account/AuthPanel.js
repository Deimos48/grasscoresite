import * as styles from '../../styles/account/AuthPanel.module.css'
import Image from 'next/image'
import Link from 'next/link'

const AuthPanel = () => {
  
  return (
    <div className={styles.auth}>
      <Image src="/images/locked.png" width="32" height="32" />
      <h1>Авторизация</h1>
      <p>Для того, чтобы попасть в личный кабинет, авторизуйтесь с помощью одной из социальных сетей</p>
      <a href="https://discord.com/api/oauth2/authorize?client_id=910623293751562281&redirect_uri=http%3A%2F%2F127.0.0.1%3A5000%2Flogin&response_type=code&scope=identify%20email%20guilds"><button className={styles.btn_discord}>Войти с помощью Discord</button></a>
      <p>
        Авторизовываясь, вы соглашаетесь с <Link href="/policy">политикой конфиденциальности сайта.</Link>
      </p>
      {/* <button className={styles.auth__btn_return}>
        <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" class="mr-2 h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
        <span>Вернуть на главную</span>
      </button> */}
    </div>
  )
}

export default AuthPanel