import Layout from "../components/Layout"
import "swiper/css/bundle"
import "../../public/fonts/hkgrotesk/stylesheet.css"
import "react-image-lightbox/style.css"
import "../scss/style.default.scss"
import "antd/lib/style/index.css"
import { useEffect, useState } from "react"
import { GetLocal, GetUser, GetImage } from '../api/api';
import { notification } from 'antd';
import { useRouter } from "next/router";

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  const [ loggedUser, setLoggedUser ] = useState(false);
  const [ avatar, setAvatar ] = useState('');
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');


  useEffect(() => {
    if (GetLocal('user')) {
      getUser(GetLocal('user'))
    }
  }, [Component]);
  const getUser = async (id) => {
    const res = await GetUser(id);
    if (res.code === '404') {
      return notification.error({
        message: res.data.msg,
        placement: "bottomRight",
      })
    }
    if (res.code === '100') {
      localStorage.removeItem('user');
      return router.replace('/customer-login')
    }

    if (res.code === '300') {
      return notification.error({
        message: 'Email Not Success',
        placement: "bottomRight",
      })
    }

    setLoggedUser(true);
    setAvatar(GetImage(res.data.avatar));
    setName(res.data.name);
    setEmail(res.data.email);
  }
  return (
    <Layout {...pageProps} loggedUser={loggedUser} userName={name} userAvatar={avatar} userEmail={email}>
      <Component {...pageProps} loggedUser={loggedUser} userName={name} userAvatar={avatar} userEmail={email} />
    </Layout>
  )
}

// This default export is required in a new `pages/_app.js` file.
export default App
