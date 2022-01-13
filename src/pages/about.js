import { Container, Row, Col } from "react-bootstrap"
import Image from "../components/CustomImage"

export async function getStaticProps() {
  return {
    props: {
      nav: {
        dark: true,
        classes:
          "navbar-sticky bg-hover-white bg-fixed-white navbar-hover-light navbar-fixed-light",
        color: "transparent",
      },
      headerAbsolute: true,
      hideTopbar: true,
      title: "About Us",
    },
  }
}

export default function About() {
  return (
    <>
      {/* Hero Section*/}
      <section className="mh-full-screen dark-overlay py-7 d-flex align-items-center justify-content-center">
        <Image
          className="bg-image"
          src="/img/photo/photo-1534126511673-b6899657816a.jpg"
          alt=""
          layout="fill"
        />
        <div className="overlay-content w-100">
          <Container>
            <Row>
              <Col xl="6" className="text-white">
                <h6 className="text-uppercase text-white letter-spacing-5 mb-3">
                  About us
                </h6>
                <h1 className="display-3 fw-bold text-shadow mb-5">
                  We are Sell
                </h1>
                <p className="text-lg">
                  One morning, when Gregor Samsa woke from troubled dreams, he
                  found himself transformed in his bed into a horrible vermin.
                  He lay on his armour-like back, and if he lifted his head a
                  little he could see his brown belly, slightly domed and
                  divided by arches into stiff sections
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <section>
        <Container fluid>
          <Row>
            <Col lg="6" className="about-text-column bg-gray-100">
              <div className="about-text">
                <h6 className="text-uppercase text-muted letter-spacing-5 mb-1">
                  Humble beginnings
                </h6>
                <h2 className="mb-4">We started as little</h2>
                <p className="text-lg text-muted">
                  The bedding was hardly able to cover it and seemed ready to
                  slide off any moment. His many legs, pitifully thin compared
                  with the size of the rest of him, waved about helplessly as he
                  looked. "What's happened to me?" he thought. It wasn't a
                  dream.
                </p>
              </div>
            </Col>
            <Col lg="6" className="p-lg-0 about-image-column">
              <Image
                className="bg-image"
                src="/img/photo/ian-dooley-347942-unsplash.jpg"
                alt=""
                layout="fill"
              />
            </Col>
          </Row>
          <Row>
            <Col lg="6" className="p-lg-0 about-text-column order-lg-2">
              <div className="about-text">
                <h6 className="text-uppercase text-muted letter-spacing-5 mb-1">
                  Sell today
                </h6>
                <h2 className="mb-4">And then we grew a bit</h2>
                <p className="text-lg text-muted">
                  The bedding was hardly able to cover it and seemed ready to
                  slide off any moment. His many legs, pitifully thin compared
                  with the size of the rest of him, waved about helplessly as he
                  looked. "What's happened to me?" he thought. It wasn't a
                  dream.
                </p>
              </div>
            </Col>
            <Col lg="6" className="p-lg-0 about-image-column order-lg-1">
              <Image
                className="bg-image"
                src="/img/photo/ian-dooley-347962-unsplash.jpg"
                alt=""
                layout="fill"
              />
            </Col>
          </Row>
          <Row>
            <Col lg="6" className="about-text-column bg-gray-100">
              <div className="p-5">
                <blockquote className="mb-5">
                  <p className="text-xl text-serif mb-4">
                    Samsa was a travelling salesman - and above it there hung a
                    picture that he had recently cut out of an illustrated
                    magazine and housed in a nice, gilded frame.
                  </p>
                  <h6 className="text-lg text-uppercase text-primary">
                    — Franz Kafka, Founder
                  </h6>
                </blockquote>
                <p className="text-lg text-muted">
                  He must have tried it a hundred times, shut his eyes so that
                  he wouldn't have to look at the floundering legs, and only
                  stopped when he began to feel a mild, dull pain there that he
                  had never felt before.
                </p>
              </div>
            </Col>
            <Col lg="6" className="p-lg-0 about-image-column">
              <Image
                className="bg-image"
                src="/img/photo/marco-xu-496929-unsplash.jpg"
                alt=""
                layout="fill"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="py-6">
        <Container>
          <Row>
            <Col lg="5">
              <h6 className="text-uppercase text-muted letter-spacing-5 mb-1">
                Our history
              </h6>
              <h2 className="mb-4">Sell Milestones</h2>
              <p className="text-lg text-muted">
                One morning, when Gregor Samsa woke from troubled dreams, he
                found himself transformed in his bed into a horrible vermin. He
                lay on his armour-like back, and if he lifted his head a little
                he could see his brown belly, slightly domed and divided by
                arches into stiff sections
              </p>
            </Col>
            <Col lg="6" className="ms-lg-auto">
              <Row>
                <Col sm="6" className="mb-4">
                  <h4>1995</h4>
                  <p className="text-muted">
                    One morning, when Gregor Samsa woke from troubled dreams, he
                    found himself transformed in his bed into a horrible vermin
                  </p>
                </Col>
                <Col sm="6" className="mb-4">
                  <h4>2000</h4>
                  <p className="text-muted">
                    The bedding was hardly able to cover it and seemed ready to
                    slide off any moment. His many legs, pitifully thin compared
                  </p>
                </Col>
                <Col sm="6" className="mb-4">
                  <h4>2010</h4>
                  <p className="text-muted">
                    His room, a proper human room although a little too small,
                    lay peacefully between its four familiar walls. A collection
                  </p>
                </Col>
                <Col sm="6" className="mb-4">
                  <h4>2018</h4>
                  <p className="text-muted">
                    Samsa was a travelling salesman - and above it there hung a
                    picture that he had recently cut out of an illustrated magaz
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row className="justify-content-center">
            <Col lg="6" className="d-flex align-items-center">
              <div className="w-100">
                <Image
                  src="/img/photo/christopher-campbell-28571-unsplash.jpg"
                  alt=""
                  width={690}
                  height={460}
                  sizes="(max-width:992px) 100vw, 690px"
                />
              </div>
            </Col>
            <Col lg="5" className="d-none d-lg-block">
              <Image
                src="/img/photo/noah-buscher-400915-unsplash.jpg"
                alt=""
                width={445}
                height={556}
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="py-6">
        <Container>
          <Row>
            <Col lg="8" className="mx-auto">
              <h2 className="mb-6">
                At Sell, we want the right choice to be as easy as putting on a
                great T-shirt
              </h2>
            </Col>
            <Col lg="6">
              <p className="text-lg text-muted">
                One morning, when Gregor Samsa woke from troubled dreams, he
                found himself transformed in his bed into a horrible vermin. He
                lay on his armour-like back, and if he lifted his head a little
                he could see his brown belly, slightly domed and divided by
                arches into stiff sections
              </p>
            </Col>
            <Col lg="6">
              <p className="text-lg text-muted">
                The bedding was hardly able to cover it and seemed ready to
                slide off any moment. His many legs, pitifully thin compared
                with the size of the rest of him, waved about helplessly as he
                looked. "What's happened to me?" he thought. It wasn't a dream.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
