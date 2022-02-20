import * as styles from '../../styles/account/Alert.module.css'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const Alert = (props) => {
  const AlertElement = useRef(null)

  useEffect(() => {
    props.setModal(false)
  }, [])

  useEffect(() => {
    const time = null
    if (props.isModal) {
      AlertElement.current.classList.add(styles.alert__active)
      time = setTimeout(() => {
        AlertElement.current.classList.remove(styles.alert__active)
        props.setModal(false)
      }, 2000)
    }
    

    return () => {
      clearTimeout(time)
    }
  }, [props.isModal])

  return (
    <>
      {props.isModal ? (
          <div ref={AlertElement} className={styles.alert__wrapper}>
            <div className={styles.alert}>
              <Image src="/images/accept.png" width="32" height="32" />
              <p>{props.text}</p>
            </div>
          </div>
      )  : ""}
    </>
  )
}

export default Alert