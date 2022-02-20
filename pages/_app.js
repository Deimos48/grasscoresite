import Layout from '../components/layout'
import wrapperStore from '../store/store'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default wrapperStore.withRedux(MyApp)
