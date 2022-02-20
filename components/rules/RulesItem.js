import * as styles from '../../styles/rules/Rules.module.css'
import Image from 'next/image'
import Link from 'next/link'

const RulesItem = (props) => {
  console.log(props);
  return (
    <div id={`#rule${props.item.num}`} className={styles.rules__item}>
      <div>
        <h1>{props.item.num}: {props.item.title}</h1>
        { props.item.list != null ? props.item.list.map(rule => {
          return (
            <div className={styles.rules__item_item} key={rule.num}>
              <span>{rule.num}:</span>
              <p>{rule.text}</p>
            </div>
          )
        }) : "" }
      </div>
    </div>
  )
}

export default RulesItem