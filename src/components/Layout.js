/*
 * @Author: your name
 * @Date: 2021-11-08 10:14:40
 * @LastEditTime: 2022-01-16 18:13:25
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /sell-react-2-0(1)/src/components/Layout.js
 */
import Head from "next/head"
import NextNProgress from "../components/NextNProgress"

import Header from "./Header"
import Footer from "./Footer"

import { FormProvider } from "./FormContext"
import { useState } from "react"
import SvgIcons from "./SvgIcons"
import SSRProvider from "react-bootstrap/SSRProvider"
const Layout = (pageProps) => {
  const [paddingTop, setPaddingTop] = useState(0)
  const headerProps = {
    nav: {
      classes: pageProps.nav && pageProps.nav.classes,
      fixed: pageProps.nav && pageProps.nav.fixed,
      color: pageProps.nav && pageProps.nav.color,
      light: pageProps.nav && pageProps.nav.light,
      dark: pageProps.nav && pageProps.nav.dark,
      sticky: pageProps.nav && pageProps.nav.sticky,
    },
    loggedUser: pageProps.loggedUser,
    loggedUser_avatar: pageProps.userAvatar,
    headerClasses: pageProps.headerClasses,
    headerAbsolute: pageProps.headerAbsolute,
    hideTopbar: pageProps.hideTopbar,
    setPaddingTop: (event) => setPaddingTop(event),
  }

  return (
    <SSRProvider>
      <div
        style={{ paddingTop: pageProps.noPaddingTop ? "0" : paddingTop }}
        className={pageProps.className}
      >
        <Head>
          <title>{pageProps.title} - Meta Yearning</title>
        </Head>

        <NextNProgress color="#3494E6" options={{ showSpinner: false }} />

        {!pageProps.hideHeader && <Header {...headerProps} />}

        <FormProvider>
          <main>{pageProps.children}</main>
        </FormProvider>

        {!pageProps.hideFooter && <Footer />}
        <SvgIcons />
      </div>
    </SSRProvider>
  )
}

export default Layout
