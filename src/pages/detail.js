import { Container, Row, Col } from "react-bootstrap"

import Breadcrumbs from "../components/Breadcrumbs"
import DetailSimilar from "../components/DetailSimilar"
import DetailTabs from "../components/DetailTabs"
import DetailMain from "../components/DetailMain"
import { Pagination } from "swiper"
import productData from "../data/dummyproduct.json"
import { Swiper, SwiperSlide } from "swiper/react"
import Image from "../components/CustomImage"
import { GetShopDetail, GetImage } from "../api/api"
import DetailInfo from "./../components/ViewsComponents/DetailInfo"
import DetailTabs1 from "./../components/ViewsComponents/DetailTabs1"
import DetailTabs2 from "./../components/ViewsComponents/DetailTabs2"
import DetailTabs3 from "./../components/ViewsComponents/DetailTabs3"
import { useEffect, useState } from "react"
export async function getServerSideProps(context) {
  let info = {}
  if (context.query.id) {
    const res = await GetShopDetail(context.query.id)
    console.log(res, "ressss")
    info.author = res.author
    info.author_src = GetImage(res.author_src)
    info.image_src = GetImage(res.image_src)
    info.make_an_offer = res.make_an_offer
    info.nfts_price = res.nfts_price
    info.shop_title = res.shop_title
    info.nfts_price = res.nfts_price
    info.price = res.price
    info.views = res.views
    info.star = res.star
    if (res.roblox.roblox_data) {
      info.roblox_data = JSON.parse(JSON.stringify(res.roblox.roblox_data))
    }
    if (res.nft_data) {
      info.nft_data = res.nft_data
    }
    if (res.roblox.description) {
      info.description = res.roblox.description
    }
    if (res.roblox.comments) {
      info.comments = JSON.parse(JSON.stringify(res.roblox.comments))
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
        title: "Detail",
        info: info,
      },
    }
  }
  return {
    props: {
      nav: {
        light: true,
      },
      title: "Detail",
      info: info,
    },
  }
}

export default function MyDetail(props) {
  // console.log(props)
  const [_author, setAuthor] = useState(props.info?.author)
  const [_authorSrc, setAuthorSrc] = useState(props.info?.author_src)
  useEffect(() => {
    console.log(props)
  }, [])
  return (
    <>
      <section className="product-details">
        <Container>
          <Row>
            <Col xs="12" className="products-grid sidebar-none">
              <Row className="aaaaxxxxxxx">
                <Col
                  xs={{ span: 12, order: 2 }}
                  lg={{ span: 5, order: 1 }}
                  className="py-3"
                >
                  {/* <Swiper
                    className="detail-full"
                    slidesPerView={1}
                    modules={[Pagination]}
                    pagination={{
                      clickable: true,
                      dynamicBullets: true,
                    }}
                    style={{width: '60%', margin: '0 auto'}}
                  >
                    <SwiperSlide>
                        <div className="detail-full-item bg-cover">
                          <img
                            src={props.info.image_src}
                            alt="..."
                            layout="fill"
                            className="bg-image"
                            priority
                          />
                        </div>
                      </SwiperSlide>
                  </Swiper> */}
                  <div className="detail-swiper-ll-xx">
                    <img
                      src={props.info.image_src}
                      alt="..."
                      layout="fill"
                      className="bg-image-1"
                      priority
                    />
                  </div>
                </Col>
                <Col
                  xs={{ span: 12, order: 1 }}
                  lg={{ span: 7, order: 2 }}
                  className="d-flex"
                  style={{ marginTop: 18 }}
                >
                  <div style={{width: '100%', boxSizing: 'border-box', padding: '0 45px'}}>
                    <div className="detail_author_info">
                      <img className="author_avator" src={_authorSrc} />
                      <h5 className="text-capitalize qwerzxc">{_author}</h5>
                    </div>
                    <DetailInfo
                      data={{
                        nfts_price: props.info?.nfts_price,
                        price: props.info?.price,
                        shop_title: props.info?.shop_title,
                        star: props.info?.star,
                        views: props.info?.views,
                        make_an_offer: props.info?.make_an_offer,
                        author: _author,
                      }}
                    />
                    <DetailTabs2
                      product={productData}
                      nft_data={props.info.nft_data}
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col
                  xs={{ span: 12, order: 2 }}
                  lg={{ span: 5, order: 1 }}
                  className="py-3"
                >
                  <DetailTabs1
                    product={productData}
                    roblox_data={props.info.roblox_data}
                    description={props.info.description}
                    comments={props.info.comments}
                  />
                </Col>
                <Col
                  xs={{ span: 12, order: 2 }}
                  lg={{ span: 7, order: 1 }}
                  className="py-3"
                >
                  <DetailTabs3
                    product={productData}
                    price_history={props.info.price_history}
                    list_history={props.info.list_history}
                    offer_history={props.info.offer_history}
                    item_activity={props.info.item_activity}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      {/* <DetailTabs3
        product={productData}
        price_history={props.info.price_history}
        list_history={props.info.list_history}
        offer_history={props.info.offer_history}
        item_activity={props.info.item_activity}
      /> */}
    </>
  )
}
