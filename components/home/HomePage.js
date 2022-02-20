import Image from 'next/image'
import Link from 'next/link'
import Alert from '../account/Alert'
import AuthPanel from '../account/AuthPanel'
import PriceHome from './Price'
import HomeSection from './Section'
import * as styles from '../../styles/home/Home.module.css'

function HomePage(props) {

  const copyIP = async () => {
    try {
      const IP = "адрес сервера...."
      await navigator.clipboard.writeText(IP)
      props.setModal(true)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
    <Alert text="Скопировано!" isModal={props.isModal} setModal={props.setModal} />
    <div className={styles.home__wrapper}>
      <div className={styles.home}>
        <div className={`${styles.home__container} ${styles.home__main_wrapper}`}>
          <main className={styles.home__main}>
            <div className={styles.home__left}>
              <h1>Творческий подход к <span>ванильному выживанию</span></h1>
              <p>Общие проекты, частые ивенты, дружное сообщество — идеальные условия, чтобы раскрыть свой творческий потенциал в среде ванильного выживания</p>
              <div>
                <button className={styles.home__left_btn}>Купить доступ на сервер</button>
                <button className={styles.home__left_btn} onClick={copyIP}>Скопировать IP адрес</button>
              </div>
              <p>Для игры требуется лицензия, играем на Minecraft: Java Edition 1.18.1</p>
            </div>
            <div className={styles.home__right}>
              <AuthPanel />
            </div>
          </main>
        </div>
        <div className={styles.section__wrapper}>
          <div className={styles.home__container}>
            <HomeSection />
          </div>
          <div className={styles.section__price_wrapper}>
            <div className={styles.home__container}>
              <PriceHome />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default HomePage