import Layout from "../components/Layout"
import "swiper/css/bundle"
import "../../public/fonts/hkgrotesk/stylesheet.css"
import "react-image-lightbox/style.css"
import "../scss/style.default.scss"

const App1 = ({ Component, pageProps }) => {
  return (
    <Layout {...pageProps}>
      123
      <Component {...pageProps} />
    </Layout>
  )
}

// This default export is required in a new `pages/_app.js` file.
export default App1
