import * as styles from '../../styles/rules/Rules.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

const RulesPanel = (props) => {
  const scrollToRule = (num) => {
    if (typeof document !== "undefined") {
      let element = document.getElementById("rule" + num)
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <div className={styles.rules__panel}>
      <h1>Правила сервера</h1>
      <div className={styles.rules__panel_list}>
        { props.list.map(item => {
          return (
            <div className={styles.rules__panel_item} key={item.num}>
              <a href={`#rule${item.num}`}>
                <h2>{item.num}. {item.title}</h2>
              </a>
            </div>
          )
        }) }
      </div>
    </div>
  )
}

export default RulesPanel