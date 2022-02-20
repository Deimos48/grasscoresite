import * as styles from '../../styles/home/Section.module.css'
import Image from 'next/image'

const HomeSection = () => {

  return (
    <section className={styles.section}>
      <div className={styles.section__item}>
        <div className={styles.section__text}>
          <div className={styles.section__logo_wrapper}>
            <Image className={styles.section__logo} src="/images/rocket.png" width="48" height="48" />
          </div>
          <h1>Огромные проекты</h1>
          <p>Благодаря слаженному сообществу, мы смогли уничтожить морской монумент менее чем за 15 минут, раскопать 200 тысяч блоков песка за 5 часов, а также построить спавн за 4 дня. И всё это в первый месяц сезона.</p>
        </div>
        <Image src="/images/photo1.jpg" width="600" height="300" objectFit='cover' />
      </div>
      <div className={styles.section__item}>
        <Image src="/images/photo2.jpg" width="600" height="300" objectFit='cover' />
        <div className={styles.section__text}>
          <div className={styles.section__logo_wrapper}>
            <Image className={styles.section__logo} src="/images/ferris.png" width="48" height="48" />
          </div>
          <h1>Разнообразные ивенты</h1>
          <p>Администрация и игроки сервера часто проводят интересные ивенты, например: Шалкер-битва, Что? Где? Когда?, Ралли. Также присутствуют и ивентовые дни — дни, когда весь день проходят ивенты на самом сервере, или на отдельном сервере.</p>
        </div>
      </div>
    </section>
  )
}

export default HomeSection