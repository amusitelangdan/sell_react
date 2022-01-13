import { Container, Row, Col, Button, Card } from "react-bootstrap"

import Image from "../components/CustomImage"
import Link from "next/link"

import Product from "../components/Product"
import SwiperProducts from "../components/SwiperProducts"

import products from "../data/products.json"

export async function getStaticProps() {
  return {
    props: {
      nav: {
        dark: true,
        classes:
          "bg-hover-white bg-fixed-white navbar-hover-light navbar-fixed-light",
        color: "transparent",
      },
      headerAbsolute: true,
      title: "Homepage - v.2",
    },
  }
}

export default function Home2() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col
            lg="6"
            className="dark-overlay split-screen-column align-items-center align-items-lg-end"
            style={{
              backgroundColor: "#d2cecb",
            }}
          >
            <Image
              src="/img/photo/ian-dooley-347942-unsplash.jpg"
              layout="fill"
              alt="Gentlemen"
              className="bg-image"
              priority
            />
            <div className="overlay-content py-6 mt-6 px-lg-5 mt-lg-0 mb-lg-5">
              <h1 className="display-3 mb-4 text-white fw-bold split-screen-heading letter-spacing-1">
                Gentlemen
              </h1>
              <p className="lead mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                <Link href="/category-full" passHref>
                  <Button variant="light" className="mx-1 mb-1">
                    View collection
                  </Button>
                </Link>
                <Link href="/category-full" passHref>
                  <Button variant="outline-light" className=" mx-1 mb-1">
                    See more
                  </Button>
                </Link>
              </p>
            </div>
          </Col>
          <Col
            lg="6"
            className="position-relative split-screen-column align-items-center align-items-lg-end"
            style={{
              backgroundColor: "#e5b6b4",
            }}
          >
            <Image
              src="/img/photo/ian-dooley-347962-unsplash.jpg"
              layout="fill"
              alt="Ladies"
              className="bg-image"
              priority
            />
            <div className="py-6 px-lg-5 mb-lg-5 position-relative">
              <h1 className="display-3 mb-4 text-white fw-bold split-screen-heading letter-spacing-1">
                Ladies
              </h1>
              <p className="lead mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                <Link href="/category-full" passHref>
                  <Button variant="light" className="mx-1 mb-1">
                    View collection
                  </Button>
                </Link>
                <Link href="/category-full" passHref>
                  <Button variant="outline-light" className=" mx-1 mb-1">
                    See more
                  </Button>
                </Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <section className="pt-6 pb-5">
        <Container>
          <Row>
            <Col xl="8" className="mx-auto text-center mb-5">
              <h2 className="text-uppercase">Latest arrivals</h2>
              <p className="lead text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Col>
          </Row>
          <Row>
            {products.slice(0, 4).map((value, index) => (
              <Col key={index} xl="3" lg="3" md="4" xs="6">
                <Product data={value} showQuickView />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="py-6 bg-gray-100">
        <Container>
          <Row>
            <Col xl="8" className="mx-auto text-center mb-5">
              <h2>Spring 2020 Collection</h2>
              <p className="lead text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Col>
          </Row>
          <Row>
            <Col md="6" className="d-flex align-items-md-stretch mb-4 mb-md-0">
              <div className="d-flex align-items-center text-white dark-overlay w-100 text-center py-6 py-md-0">
                <Image
                  src="/img/photo/nordwood-themes-481980-unsplash-square.jpg"
                  layout="fill"
                  alt="Men"
                  className="bg-image"
                />
                <Link href="/category">
                  <a className="tile-link" />
                </Link>
                <div className="card-img-overlay w-100 overlay-content">
                  <h2 className="display-2 fw-bold text-uppercase mb-0">Men</h2>
                </div>
              </div>
            </Col>
            <Col md="6">
              <Card className="border-0 text-white text-center mb-4 dark-overlay">
                <Image
                  className="card-img"
                  src="/img/photo/malvestida-magazine-458585-unsplash.jpg"
                  alt="Ladies"
                  width={600}
                  height={400}
                />
                <Link href="/category">
                  <a className="tile-link" />
                </Link>
                <div className="card-img-overlay d-flex align-items-center">
                  <div className="text-center w-100 overlay-content">
                    <h2 className="display-4 fw-bold text-uppercase text-center mb-0">
                      Ladies
                    </h2>
                  </div>
                </div>
              </Card>
              <Card className="border-0 text-white text-center  dark-overlay">
                <Image
                  className="card-img"
                  src="/img/photo/heather-schwartz-528936-unsplash.jpg"
                  alt="Accessories"
                  width={600}
                  height={413}
                />
                <Link href="/category">
                  <a className="tile-link" />
                </Link>
                <div className="card-img-overlay d-flex align-items-center">
                  <div className="text-center w-100 overlay-content">
                    <h2 className="display-4 fw-bold text-uppercase text-center mb-0">
                      Accessories
                    </h2>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-6 pb-5">
        <Container>
          <Row>
            <Col xl="8" className="mx-auto text-center mb-5">
              <h2 className="text-uppercase">Your favourites</h2>
              <p className="lead text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Col>

            <SwiperProducts products={products} />
          </Row>
        </Container>
      </section>
    </>
  )
}
