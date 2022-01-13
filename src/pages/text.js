import { Container, Row, Col } from "react-bootstrap"

import Hero from "../components/Hero"

import data from "../data/text.json"

export async function getStaticProps() {
  return {
    props: {
      nav: {
        light: true,
        classes: "navbar-sticky bg-fixed-white",
        color: "white",
      },
      title: "Text page",
    },
  }
}

export default function Text() {
  return (
    <>
      <Hero title={data.title} breadcrumbs={data.breadcrumbs} />

      <section className="pb-5">
        <Container>
          <Row>
            <Col xl="8" lg="10" className="mx-auto">
              <p
                className="lead mb-5"
                dangerouslySetInnerHTML={{ __html: data.excerpt }}
              />

              {data.content && (
                <div
                  className="text-content text-lg"
                  dangerouslySetInnerHTML={{ __html: data.content }}
                />
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
