import * as styles from '../../styles/rules/Rules.module.css'
import Image from 'next/image'
import Link from 'next/link'
import RulesPanel from './RulesPanel'
import RulesItem from './RulesItem'

const RulesPage = (props) => {
console.log(props);
  return (
    <div className={styles.rules__wrapper}>
      <div className={styles.rules__container}>
        <div className={styles.rules__panel}>
          <RulesPanel list={props.list} />
        </div>
        <div className={styles.rules__list}>
          { props.list.length > 0 ? props.list.map((item) => {
            return <RulesItem item={item} key={item.num} />
          }) : ""}
        </div>
      </div>
    </div>
  )
}

export default RulesPage