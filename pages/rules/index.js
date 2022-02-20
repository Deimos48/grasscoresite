import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/home/Home.module.css'
import HeadComponent from "../../components/withHead"
import RulesPage from '../../components/rules/RulesPage'
import { useSelector } from 'react-redux'

const Rules = () => {
  const listRules = useSelector((state) => state.rules.listRules)

  return (
    <>
      <RulesPage list={listRules} />
    </>
  )
}

export default Rules