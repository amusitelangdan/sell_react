import React from "react"

import { Container, Row, Col } from "react-bootstrap"
import Breadcrumbs from "../../components/Breadcrumbs"

import DocsNav from "../../components/Docs/DocsNav"

export async function getStaticProps() {
  return {
    props: {
      nav: {
        light: true,
      },
      title: "Docs - Credits",
    },
  }
}

const Credits = () => {
  return (
    <React.Fragment>
      <section className="hero">
        <Container>
          <Breadcrumbs
            links={[
              {
                name: "Home",
                link: "/",
              },
              {
                name: "Documentation",
                link: "/docs/introduction",
              },
              {
                name: "Credits",
                active: true,
              },
            ]}
            className="justify-content-center"
          />

          <div className="hero-content pb-5 text-center">
            <h1 className="hero-heading">Credits</h1>
          </div>
        </Container>
      </section>
      <Container fluid>
        <Row className="px-xl-5">
          <Col lg="2">
            <DocsNav />
          </Col>
          <Col lg="10" xl="8" className="docs-content text-lg">
            <ul className="mb-5">
              <li className="mb-3">
                <strong>Bootstrap</strong> -{" "}
                <a href="https://getbootstrap.com/">
                  https://getbootstrap.com/
                </a>
              </li>
              <li className="mb-3">
                <strong>React Bootstrap</strong> -{" "}
                <a href="https://react-bootstrap.github.io/">
                  https://react-bootstrap.github.io/
                </a>
              </li>
              <li className="mb-3">
                <strong>React.js</strong> -{" "}
                <a href="https://reactjs.org/">https://reactjs.org/</a>
              </li>
              <li className="mb-3">
                <strong>Next.js</strong> -{" "}
                <a href="https://nextjs.org/">https://nextjs.org/</a>
              </li>
              <li className="mb-3">
                <strong>Google Fonts - Playfair Display</strong> -{" "}
                <a href="https://fonts.google.com/specimen/Playfair+Display">
                  https://fonts.google.com/specimen/Playfair+Display
                </a>
              </li>
              <li className="mb-3">
                <strong>HK Grotesk </strong>-{" "}
                <a href="https://www.behance.net/gallery/28749913/HK-Grotesk-Open-Source-Typefaceths">
                  https://www.behance.net/gallery/28749913/HK-Grotesk-Open-Source-Typefaceths
                </a>
              </li>
              <li className="mb-3">
                <strong>Google Fonts - Poppins</strong> -{" "}
                <a href="https://fonts.google.com/specimen/Poppins">
                  https://fonts.google.com/specimen/Poppins
                </a>
              </li>
              <li className="mb-3">
                <strong>Orion Icons </strong> -{" "}
                <a href="https://orioniconlibrary.com">
                  https://orioniconlibrary.com
                </a>
              </li>
              <li className="mb-3">
                <strong>Font Awesome </strong> -{" "}
                <a href="http://fontawesome.io/get-started/">
                  http://fontawesome.io/get-started/
                </a>
              </li>
              <li className="mb-3">
                <strong>LeafletJS</strong> -{" "}
                <a href="https://leafletjs.com/">https://leafletjs.com/</a>
              </li>
              <li className="mb-3">
                <strong>React Leaflet</strong> -{" "}
                <a href="https://react-leaflet.js.org/">
                  https://react-leaflet.js.org/
                </a>
              </li>
              <li className="mb-3">
                <strong>Swiper </strong> -{" "}
                <a href="http://idangero.us/swiper/">
                  http://idangero.us/swiper/
                </a>
              </li>
              <li className="mb-3">
                <strong>NoUI Slider </strong> -{" "}
                <a href="https://refreshless.com/nouislider/">
                  https://refreshless.com/nouislider/
                </a>
              </li>
              <li className="mb-3">
                <strong>React NoUI Slider </strong> -{" "}
                <a href="https://github.com/mmarkelov/react-nouislider">
                  https://github.com/mmarkelov/react-nouislider
                </a>
              </li>
              <li className="mb-3">
                <strong>React Select</strong> -{" "}
                <a href="https://react-select.com/">
                  https://react-select.com/
                </a>
              </li>
              <li className="mb-3">
                <strong>React Image Lightbox</strong> -{" "}
                <a href="https://frontend-collective.github.io/react-image-lightbox/">
                  https://frontend-collective.github.io/react-image-lightbox/
                </a>
              </li>
              <li className="mb-3">
                <strong>React Parallax</strong> -{" "}
                <a href="https://github.com/rrutsche/react-parallax">
                  https://github.com/rrutsche/react-parallax
                </a>
              </li>
              <li className="mb-3">
                <strong>React Magnifier</strong> -{" "}
                <a href="https://github.com/samuelmeuli/react-magnifier">
                  https://github.com/samuelmeuli/react-magnifier
                </a>
              </li>
              <li className="mb-3">
                <strong>React Responsive Masonry</strong> -{" "}
                <a href="https://github.com/cedricdelpoux/react-responsive-masonry">
                  https://github.com/cedricdelpoux/react-responsive-masonry
                </a>
              </li>
              <li className="mb-3">
                <strong>Next.js Progressbar</strong> -{" "}
                <a href="https://github.com/apal21/nextjs-progressbar">
                  https://github.com/apal21/nextjs-progressbar
                </a>
              </li>
              <li>
                <strong>
                  Demo images from Unsplash. See them in a collection.{" "}
                </strong>
                -{" "}
                <a href="https://unsplash.com/collections/2002006/fashion">
                  https://unsplash.com/collections/2002006/fashion
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}

export default Credits
