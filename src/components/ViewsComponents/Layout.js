/*
 * @Author: your name
 * @Date: 2022-01-10 09:58:47
 * @LastEditTime: 2022-01-10 10:10:10
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /sell-react-2-0(1)/src/components/ViewsComponents/Layout.js
 */
import Head from "next/head"
import SSRProvider from "react-bootstrap/SSRProvider"

const ViewsLayout = (pageProps) => {
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
    headerClasses: pageProps.headerClasses,
    headerAbsolute: pageProps.headerAbsolute,
    hideTopbar: pageProps.hideTopbar,
    setPaddingTop: (event) => setPaddingTop(event),
  }

  return (
    <SSRProvider>
      <div className={pageProps.className}>
        
      </div>
    </SSRProvider>
  )
}
