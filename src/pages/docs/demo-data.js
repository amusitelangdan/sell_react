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
      title: "Docs - Demo Data",
    },
  }
}

const DemoData = () => {
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
                name: "Demo Data",
                active: true,
              },
            ]}
            className="justify-content-center"
          />

          <div className="hero-content pb-5 text-center">
            <h1 className="hero-heading">Demo Data</h1>
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
              <p className="text-muted">
                We use demo data in JSON files in this app to simulate API calls
                and input from your CMS. All of them are located in the{" "}
                <code>src/data</code> folder.
              </p>
              <p className="text-muted">
                A few of them are used to set default values in the Shopping
                Cart or Wishlist. As this theme, doesn't contain a fully-working
                shopping cart, you or your developers will need to add this
                feature into your project.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}

export default DemoData
