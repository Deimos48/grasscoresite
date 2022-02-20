import Header from "./home/Header"
import Footer from "./home/Footer"
import * as styles from '../styles/layout/layout.module.css'

const Layout = ({ children }) => {

  return (
    <>
      <div className={styles.layout__wrapper}>
        <Header />
        <div>{ children }</div>
        <Footer />
      </div>
    </>
  )
}

export default Layout;