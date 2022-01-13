import { Container, Row, Col } from "react-bootstrap"

import Breadcrumbs from "../components/Breadcrumbs"
import DetailSimilar from "../components/DetailSimilar"
import DetailTabs from "../components/DetailTabs"
import DetailMain from "../components/DetailMain"
import { Pagination } from "swiper"
import productData from "../data/dummyproduct.json"
import { Swiper, SwiperSlide } from "swiper/react"
import Image from "../components/CustomImage"
import { GetShopDetail } from "../api/api"
import DetailInfo from "./../components/ViewsComponents/DetailInfo"
import DetailTabs1 from "./../components/ViewsComponents/DetailTabs1"
import DetailTabs2 from "./../components/ViewsComponents/DetailTabs2"
import DetailTabs3 from "./../components/ViewsComponents/DetailTabs3"
import { useState } from "react"
export async function getServerSideProps(context) {
  console.log(context.query)
  let info = {}
  if (context.query.id) {
    const res = await GetShopDetail(context.query.id)
    console.log(res, 'ressss')
    info.author = res.author
    info.author_src = res.author_src
    info.image_src = res.image_src
    info.make_an_offer = res.make_an_offer
    info.nfts_price = res.nfts_price
    info.shop_title = res.shop_title
    info.nfts_price = res.nfts_price
    info.price = res.price
    info.views = res.views
    info.star = res.star
    if (res.roblox.roblox_data) {
      info.roblox_data = JSON.parse(JSON.stringify(res.roblox.roblox_data))
      console.log(info.roblox_data)
    }
    if (res.nft_data) {
      info.nft_data = res.nft_data;
    }
    if (res.roblox.description) {
      info.description = res.roblox.description;
    }
    if (res.roblox.comments) {
      info.comments = res.roblox.comments;
    }
    if (res.trading_info.price_history) {
      info.price_history = JSON.parse(
        JSON.stringify(res.trading_info.price_history)
      )
    }
    if (res.trading_info.list_history) {
      info.list_history = JSON.parse(
        JSON.stringify(res.trading_info.list_history)
      )
    }

    if (res.trading_info.offer_history) {
      info.offer_history = JSON.parse(
        JSON.stringify(res.trading_info.offer_history)
      )
    }
    if (res.trading_info.item_activity) {
      info.item_activity = JSON.parse(
        JSON.stringify(res.trading_info.item_activity)
      )
    }
    return {
      props: {
        nav: {
          light: true,
        },
        title: "Product Detail",
        info: info,
      },
    }
  }
  return {
    props: {
      nav: {
        light: true,
      },
      title: "Product Detail",
      info: info,
    },
  }
}

export default function MyDetail(props) {
  console.log(props)
  const [_author, setAuthor] = useState(props.info?.author)
  const [_authorSrc, setAuthorSrc] = useState(props.info?.author_src)
  return (
    <>
      <section className="product-details">
        <Container>
          <Row>
            <Col xs="12" className="products-grid sidebar-none">
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
                  className="d-flex"
                  style={{ marginTop: 18 }}
                >
                  <div>
                    {/* <Breadcrumbs
                      links={productData.breadcrumbs}
                      className="justify-content-start"
                    /> */}
                    <div className="detail_author_info">
                      <img className="author_avator" src={_authorSrc} />
                      <h5 className="text-uppercase">{_author}</h5>
                    </div>
                    <DetailInfo
                      data={{
                        nfts_price: props.info?.nfts_price,
                        price: props.info?.price,
                        shop_title: props.info?.shop_title,
                        star: props.info?.star,
                        views: props.info?.views,
                      }}
                    />
                    {/* <DetailMain product={productData} /> */}
                  </div>
                </Col>
              </Row>
              <Row>
                <Col
                  xs={{ span: 12, order: 2 }}
                  lg={{ span: 6, order: 1 }}
                  className="py-3"
                >
                  <DetailTabs1 product={productData} roblox_data={props.info.roblox_data} description={props.info.description} comments={props.info.comments} />
                </Col>
                <Col
                  xs={{ span: 12, order: 2 }}
                  lg={{ span: 6, order: 1 }}
                  className="py-3"
                >
                  <DetailTabs2 product={productData} nft_data={props.info.nft_data} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <DetailTabs3
        product={productData}
        price_history={props.info.price_history}
        list_history={props.info.list_history}
        offer_history={props.info.offer_history}
        item_activity={props.info.item_activity}
      />
    </>
  )
}