import { Container, Row, Col } from "react-bootstrap"

import Breadcrumbs from "../components/Breadcrumbs"
import DetailSimilar from "../components/DetailSimilar"
import DetailTabs from "../components/DetailTabs"
import DetailMain from "../components/DetailMain"
import SwiperGallery from "../components/SwiperGallery"

import productData from "../data/dummyproduct.json"

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

export default function Detail2() {
  return (
    <>
      <section className="product-details">
        <Container>
          <Row>
            <Col
              xs={{ span: 12, order: 2 }}
              lg={{ span: 7, order: 1 }}
              className="pt-4"
            >
              <SwiperGallery data={productData.img.detail} vertical />
            </Col>
            <Col
              xs={{ span: 12, order: 1 }}
              lg={{ span: 5, order: 2 }}
              className="ps-lg-4"
            >
              <Breadcrumbs
                links={productData.breadcrumbs}
                className="justify-content-start"
              />

              <DetailMain product={productData} />
            </Col>
          </Row>
        </Container>
      </section>

      <DetailTabs product={productData} />

      <DetailSimilar />
    </>
  )
}
