import * as styles from '../../styles/home/Price.module.css'
import Image from 'next/image'

const PriceHome = () => {
  
  return (
    <div className={styles.price}>
      <h1 className={styles.price__title}>Одна покупка на весь сезон</h1>
      <p>Погрузись в среду ванильного выживания прямо сейчас!</p>
      <div className={styles.price__form}>
        <h1>20 рублей</h1>
        <p>Вы получаете доступ навсегда, вы покупаете один раз на один сезон (не навсегда)</p>
        <div className={styles.price__btns}>
          <button>Купить доступ на сервер</button>
          <button>Скопировать IP адрес сервера</button>
        </div>
        <p>Для игры требуется лицензия Minecraft: Java Edition.</p>
        <p>Версия сервера — 1.18.1</p>
      </div>
    </div>
  )
}

export default PriceHome