import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './components/navbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>  
    </>
  
  )
}

export default MyApp
