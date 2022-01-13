import { Container, Row, Col } from "react-bootstrap"
import Link from "next/link"
import Image from "../components/CustomImage"

import HomeOurPicks from "../components/HomeOurPicks"
import Swiper from "../components/Swiper"
import SwiperProducts from "../components/SwiperProducts"
import SwiperBrands from "../components/SwiperBrands"
import Post from "../components/Post"

import data from "../data/index-3.json"
import products from "../data/products.json"

export async function getStaticProps() {
  return {
    props: {
      nav: {
        light: true,
      },
      title: "Homepage",
    },
  }
}

export default function Home3() {
  return (
    <>
      <Swiper
        data={data.swiper}
        autoplay={{ delay: 5000 }}
        loop
        slidesPerView={1}
        spaceBetween={0}
        centeredSlides
        speed={1500}
        parallax
        navigation
        pagination
        className="home-classic-slider"
        containerclass="container-fluid h-100 py-5"
        paginationClass="swiper-pagination-white"
        style={{ minHeight: "600px" }}
      />

      <HomeOurPicks />

      <section className="py-6 bg-gray-100">
        <Container>
          <Row>
            <Col xl="8" className="mx-auto text-center mb-5">
              <h2 className="text-uppercase">Your favourites</h2>
              <p className="lead text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Col>
          </Row>

          <SwiperProducts products={products} pagination />
        </Container>
      </section>

      <section className="py-6">
        <Container>
          <Row>
            <Col xl="8" className="mx-auto text-center mb-5">
              <h3 className="text-uppercase">From our journal</h3>
              <p className="lead text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Col>
          </Row>

          <Row>
            {data.posts.map((post, index) => {
              // the first post is featured
              if (index >= 1) {
                return (
                  <Col xs="6" lg="4" key={index}>
                    <Post data={post} />
                  </Col>
                )
              }
            })}
          </Row>
        </Container>
      </section>

      {/* Divider Section*/}
      <section className="py-6 position-relative light-overlay">
        <Image
          className="bg-image"
          src="/img/photo/benjamin-voros-260869-unsplash.jpg"
          alt=""
          layout="fill"
        />
        <Container>
          <div className="overlay-content text-center text-dark">
            <p className="text-uppercase fw-bold mb-1 letter-spacing-5">
              Old Collection{" "}
            </p>
            <h3 className="display-1 fw-bold text-serif mb-4">Summer Sales</h3>
            <Link href="/category">
              <a className="btn btn-dark">Shop Now</a>
            </Link>
          </div>
        </Container>
      </section>

      {data.brands && (
        <section className="py-6 brands">
          <div className="container">
            <h4 className="text-uppercase text-center mb-5">Our brands</h4>

            <SwiperBrands brands={data.brands} pagination />
          </div>
        </section>
      )}
    </>
  )
}
