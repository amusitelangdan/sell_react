import { Container, Row, Col } from "react-bootstrap"

import Breadcrumbs from "../components/Breadcrumbs"
import DetailSimilar from "../components/DetailSimilar"
import DetailTabs from "../components/DetailTabs"
import DetailMain from "../components/DetailMain"
import { Pagination } from "swiper"
import productData from "../data/dummyproduct.json"
import { Swiper, SwiperSlide } from "swiper/react"
import Image from "../components/CustomImage"
export async function getStaticProps() {
  return {
    props: {
      nav: {
        light: true,
      },
      title: "Product Detail",
    },
  }
}

export default function Detail() {
  return (
    <>
      <section className="product-details">
        <Container fluid>
          <Row>
            <Col
              xs={{ span: 12, order: 2 }}
              lg={{ span: 6, order: 1 }}
              className="py-3"
            >
              <Swiper
                className="detail-full"
                slidesPerView={1}
                modules={[Pagination]}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
              >
                {productData.img.detail.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="detail-full-item bg-cover">
                      <Image
                        src={image.img}
                        alt="..."
                        layout="fill"
                        className="bg-image"
                        priority
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Col>
            <Col
              xs={{ span: 12, order: 1 }}
              lg={{ span: 6, order: 2 }}
              xl="5"
              className="d-flex align-items-center ps-lg-5 mb-5"
            >
              <div>
                <Breadcrumbs
                  links={productData.breadcrumbs}
                  className="justify-content-start"
                />

                <DetailMain product={productData} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <DetailTabs product={productData} />

      <DetailSimilar />
    </>
  )
}
