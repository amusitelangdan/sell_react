import React from "react"

import { Container, Row, Col, Card } from "react-bootstrap"

import DocsNav from "../../components/Docs/DocsNav"
import Breadcrumbs from "../../components/Breadcrumbs"

export async function getStaticProps() {
  return {
    props: {
      nav: {
        light: true,
      },
      title: "Docs - Changelog",
    },
  }
}

const Changelog = () => {
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
                name: "Changelog",
                active: true,
              },
            ]}
            className="justify-content-center"
          />

          <div className="hero-content pb-5 text-center">
            <h1 className="hero-heading">Changelog</h1>
          </div>
        </Container>
      </section>

      <Container fluid>
        <Row className="px-xl-5">
          <Col lg="2">
            <DocsNav />
          </Col>
          <Col lg="10" xl="8" className="docs-content">
            <div id="version1.0.0" className="docs-item">
              <h5 className="text-uppercase mb-4">Version 2.0.0</h5>
              <div className="docs-desc">
                <p className="text-muted">November 11, 2021</p>
              </div>
              <div className="mt-5">
                <Card className="bg-gray-100 border-0">
                  <Card.Body className="py-4">
                    <pre className="card-text">
                      {"-"} <strong>update:</strong> Updated to Bootstrap 5
                      {"\n"}
                      {"-"} <strong>new:</strong> Converted from ReactStrap to
                      React Bootstrap package (see docs{" "}
                      <a href="https://react-bootstrap.github.io/components/alerts">
                        here
                      </a>
                      ){"\n"}
                      {"-"} <strong>new:</strong> Font Awesome React component
                      (see usage{" "}
                      <a href="https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react">
                        here
                      </a>
                      ){"\n"}
                      {"-"} <strong>new:</strong> Header component is split to
                      multiple components for better readiblity (
                      <code>src/components/Header</code>){"\n"}
                      {"-"} <strong>updated packages:</strong> NPM update,
                      Next.js (12.0.0), Swiper (7.0.6), Sass 1.38.1
                      {"\n"}- <strong>improved:</strong> Removed Swiper react
                      wrapper (ReactIdSwiper). Using Swiper.js's react component
                    </pre>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div id="version1.0.0" className="docs-item">
              <h5 className="text-uppercase mb-4">Version 1.0.0</h5>
              <div className="docs-desc">
                <p className="text-muted">February 9, 2021</p>
              </div>
              <div className="mt-5">
                <Card className="bg-gray-100 border-0">
                  <Card.Body className="py-4"> Initial Release</Card.Body>
                </Card>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}

export default Changelog
