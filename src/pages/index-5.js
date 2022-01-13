import { Container, Row, Col, Button } from "react-bootstrap"

import Link from "next/link"

import Swiper from "../components/Swiper"
import SwiperProducts from "../components/SwiperProducts"

import data from "../data/index-5.json"
import products from "../data/products.json"
import Image from "../components/CustomImage"

export async function getStaticProps() {
  return {
    props: {
      nav: {
        light: true,
        color: "transparent",
        sticky: false,
      },
      headerAbsolute: true,
      title: "Homepage",
    },
  }
}

export default function Home5() {
  return (
    <>
      <Swiper
        data={data.swiper}
        loop
        slidesPerView={1}
        spaceBetween={0}
        centeredSlides
        speed={1500}
        navigation
        pagination
        className="circle-slider"
        containerclass="circle-slider-bg px-lg-5"
        columns
      />
      {data.featuredproducts && (
        <section className="py-6">
          <Container>
            <Row>
              <Col xl="8" className="mb-5">
                <p className="text-uppercase text-muted fw-bold mb-1">
                  Top choices
                </p>
                <h3>Popular this week</h3>
                <p className="lead text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Col>
            </Row>
            <Row>
              {data.featuredproducts.map((product, index) => {
                let md
                let productClass
                let contentClass
                switch (index) {
                  case 0:
                    md = 4
                    productClass = "mb-4 mb-lg-5"
                    contentClass = "px-4 position-relative z-index-2 mt-3"
                    break
                  case 1:
                    md = 7
                    productClass = "ms-auto mb-4 mb-lg-5"
                    contentClass = "position-absolute z-index-5 py-6"
                    break
                  case 2:
                    md = 4
                    productClass = "ms-auto pt-lg-6 mb-4 mb-lg-5 order-md-2"
                    contentClass = "px-4 position-relative z-index-2 mt-3"
                    break
                  case 3:
                    md = 7
                    productClass = "mb-4 mb-lg-5 order-md-1"
                    contentClass = "position-absolute z-index-5 py-6"
                    break
                  case 4:
                    md = 3
                    productClass = "pt-md-3 mb-4 mb-lg-5 order-md-3"
                    contentClass = "px-4 position-relative z-index-2 mt-3"
                    break
                  default:
                    md = 8
                    productClass = "ms-auto order-md-3"
                    contentClass = "position-absolute z-index-5 py-6"
                }

                return (
                  <Col
                    key={product.name}
                    md={md}
                    className={productClass ? productClass : ""}
                  >
                    {index % 2 === 1 ? (
                      <>
                        <div className={contentClass ? contentClass : ""}>
                          <Link href={product.link}>
                            <a className="text-dark text-decoration-none">
                              <h3
                                className="position-relative z-index-10"
                                style={{ wordSpacing: "100vw" }}
                              >
                                {product.name}
                              </h3>
                              <p className="text-muted">{product.price}</p>
                            </a>
                          </Link>
                          <p>
                            <Link href={product.link} passHref>
                              <Button
                                variant="link"
                                className="text-dark text-decoration-none px-0"
                              >
                                Shop now
                              </Button>
                            </Link>
                          </p>
                        </div>
                        <div className="ms-6">
                          <Link href={product.link}>
                            <a>
                              <Image
                                src={product.img}
                                alt={product.name}
                                fill="responsive"
                                width={600}
                                height={600}
                              />
                            </a>
                          </Link>
                        </div>
                      </>
                    ) : (
                      <>
                        <Link href={product.link}>
                          <a>
                            <Image
                              src={product.img}
                              alt={product.name}
                              fill="responsive"
                              width={600}
                              height={600}
                            />
                          </a>
                        </Link>
                        <div className={contentClass ? contentClass : ""}>
                          <Link href={product.link}>
                            <a className="text-dark text-decoration-none">
                              <h3
                                className="position-relative z-index-10"
                                style={{ wordSpacing: "100vw" }}
                              >
                                {product.name}
                              </h3>
                              <p className="text-muted">{product.price}</p>
                            </a>
                          </Link>
                          <p>
                            <Button
                              variant="link"
                              className="text-dark text-decoration-none px-0"
                              href={product.link}
                            >
                              Shop now
                            </Button>
                          </p>
                        </div>
                      </>
                    )}
                  </Col>
                )
              })}
            </Row>
          </Container>
        </section>
      )}

      <section className="bg-danger">
        <Container>
          <Row>
            <Col lg="6" className="text-white text-center py-7">
              <h2 className="display-4 text-uppercase mb-4">Final sales</h2>
              <p className="mb-0">Up to</p>
              <h2 className="display-1 fw-bold mb-3">70%</h2>
              <p className="mb-5">* Free shipping on orders over $70.</p>
              <p>
                <Button variant="outline-light" href="#">
                  Shop now
                </Button>
              </p>
            </Col>
            <Col lg="6" className="d-none d-lg-flex align-items-end">
              <div className="text-end">
                <Image
                  src="/img/photo/sale-circle.jpg"
                  layout="intrinsic"
                  className="bg-image"
                  width={523}
                  className="ms-auto"
                  height={600}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-6">
        <Container>
          <Row>
            <Col xl="8" className="mx-auto text-center mb-5">
              <h2 className="text-uppercase">Last Viewed Products</h2>
              <p className="lead text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Col>
          </Row>

          <SwiperProducts products={products} pagination />
        </Container>
      </section>
    </>
  )
}
