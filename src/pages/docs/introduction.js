import React from "react"

import { Container, Row, Col } from "react-bootstrap"

import DocsNav from "../../components/Docs/DocsNav"
import Breadcrumbs from "../../components/Breadcrumbs"

export async function getStaticProps() {
  return {
    props: {
      nav: {
        light: true,
      },
      title: "Docs - Introduction",
    },
  }
}

const Introduction = () => {
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
                name: "Introduction",
                active: true,
              },
            ]}
            className="justify-content-center"
          />
          <div className="hero-content pb-5 text-center">
            <h1 className="hero-heading">Docs - Introduction</h1>
          </div>
        </Container>
      </section>
      <Container fluid>
        <Row className="px-xl-5">
          <Col lg="2">
            <DocsNav />
          </Col>
          <Col lg="10" xl="8" className="docs-content">
            <div className="text-lg">
              <p>
                Hey, welcome to the
                <strong>Meta Yearning official documentation</strong>.
              </p>
              <p>
                If you own a theme’s license already, thank you very much for
                purchasing! If not yet, you can{" "}
                <a href="https://themes.getbootstrap.com/product/sell-next-js-e-commerce-theme-react/">
                  buy the theme’s license here
                </a>
                .
              </p>
              <p>
                This documentation is to help you with template’s customization.
                At least basic JavaScript, React and React hooks knowledge is
                required to customize this template.{" "}
              </p>
              <hr className="my-5" />
            </div>
            <h5 className="text-uppercase mb-5">Theme info</h5>
            <p>
              <span className="text-uppercase text-muted">Item Name:</span> Sell
            </p>
            <p>
              <span className="text-uppercase text-muted">Author:</span>{" "}
              Bootstrapious
            </p>
            <p>
              <span className="text-uppercase text-muted">
                Contact email for support &amp; pre-sale questions:{" "}
              </span>
              <a href="mailto:hello@bootstrapious.com" className="text-dark">
                hello@bootstrapious.com
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}

export default Introduction
