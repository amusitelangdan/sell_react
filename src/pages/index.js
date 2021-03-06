import { Container, Row, Col } from "react-bootstrap"
import ShopPagination from "../components/ShopPagination"
import { getBanner, getNfts, getAddStar, GetLocal } from "./../api/api"
import CardLookbook from "../components/CardLookbook"
import CardComponent from "./../components/Card"
import Swiper from "../components/Swiper"
// import { fetch } from 'fetch'
import data from "../data/index.json"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { notification } from "antd"

export async function getServerSideProps(context) {
  const json = await getBanner()
  const options = {}
  if (context.query.page) {
    options.page = Number(context.query.page)
  } else {
    options.page = 1
  }
  // const json2 = await getNfts(options.page)
  // console.log(json2);
  return {
    props: {
      nav: {
        dark: true,
        classes:
          "bg-hover-white bg-fixed-white navbar-hover-light navbar-fixed-light",
        color: "transparent",
      },
      headerAbsolute: true,
      title: "Homepage",
      imageList: json,
      // nefts: json2.list,
      // page: json2.page,
      // size: json2.size,
      // total: json2.total,
      // loggedUser: true,
    },
  }
}

export default function Home(props) {
  const [_swiper, setSwiper] = useState([])
  const [_total, setTotal] = useState(0)
  const [_page, setPage] = useState(1)
  const [_size, setSize] = useState(20)
  const [_nefts, setNefts] = useState([])
  const router = useRouter()

  useEffect(() => {
    console.log(props, "props")
    if (props.imageList.image_list.length > 0) {
      const image_list = JSON.parse(JSON.stringify(props.imageList.image_list))
      const _image_list = []
      image_list.forEach((_item) => {
        const item = {}
        item.img = `http://45.63.15.204:8001${_item.imgSrc}`
        item.name = "Discover，collect，and sell extraordinary NFTS"
        item.text = "OpenSea is the world’s first and largest NFT marketplace."
        item.button = "LEARN MORE ABOUT META YEARING"
        item.subtitleclass =
          "text-uppercase text-white fw-light mb-4 letter-spacing-5"
        item.titleclass = "mb-5 display-2 fw-bold text-serif"
        item.rowclass = "align-items-center h-100 text-white text-center"
        item.itemclass = "home-full-item"
        item.contentclass = "mx-auto"
        item.link = "/collection"
        _image_list.push(item)
      })
      setSwiper(_image_list)
    }

    // setTotal(props.total)
    // setPage(props.page)
    // setSize(props.size)
    // setNefts(props.nefts)
    getNefts(1)
  }, [props])

  const getNefts = async (v) => {
    const json = await getNfts(v, GetLocal('user'))
    console.log(json, "res")
    if (json.list) {
      setNefts(json.list)
    }

    if (json.page) {
      setPage(json.page)
    }

    if (json.size) {
      setSize(json.size)
    }

    if (json.total) {
      setTotal(json.total)
    }
  }

  const onPage = (v) => {
    getNefts(v)
  }
  const onPrev = (v) => {
    if (v > 0) {
      getNefts(v)
    }
  }
  const onNext = (v) => {
    if (v < Math.ceil(_total / _size)) {
      getNefts(v)
      // router.push({ path: "/", query: { page: v } })
    }
  }

  return (
    <>
      {_swiper.length ? (
        <Swiper
          data={_swiper}
          autoplay={{
            delay: 5000,
          }}
          loop
          slidesPerView={1}
          spaceBetween={0}
          centeredSlides
          speed={1500}
          parallax
          navigation
          pagination
          className="home-full-slider h-100 "
          containerclass="container-fluid py-5"
          sectionClass="mb-2 home-full-slider-wrapper home-swiper"
          eager
        />
      ) : (
        <></>
      )}

      <section>
        <Container>
          <Row>
            <Col xs="12" className="products-grid sidebar-none">
              <Row>
                {_nefts.map((item, index) => (
                  <Col sm="6" xl="3" md="6" lg="4" key={index}>
                    <CardComponent
                      onClick={(v) => {
                        router.push(`/detail?id=${v.id}`)
                      }}
                      onStar={async (d) => {
                        if (GetLocal('user')) {
                          const res = await getAddStar(d.id, GetLocal('user'))
                          console.log(res);
                          if (res.code === '100') {
                            notification.error({
                              message: 'Please Login',
                              placement: 'bottomRight',
                            })
                            return router.replace(`/customer-login`)
                          }

                          if (res.code === "404") {
                            return notification.error({
                              message: res.data && res.data.msg ? res.data.msg : 'ERROR',
                              placement: "bottomRight",
                            })
                          }

                          if (res.code === '200') {
                            const __nfts = JSON.parse(JSON.stringify(_nefts));
                            __nfts.forEach((item) => {
                              if (item.id === d.id) {
                                item.is_star = !item.is_star;
                                item.star = d.is_star ? item.star - 1 : item.star + 1;
                              }
                            })
                            setNefts(__nfts);
                          }
                        } else {
                          router.push(`/customer-login`)
                        }
                      }}
                      data={{
                        image: `http://45.63.15.204:8001/${item.imgSrc}`,
                        title: item.meta_title,
                        link: "/",
                        price: item.price,
                        name: item.meta_title,
                        star: item.star,
                        last_price: item.last_price,
                        author_src: `http://45.63.15.204:8001/${item.author_src}`,
                        author: item.author,
                        id: item.id,
                        is_star: item.is_star
                      }}
                    />
                  </Col>
                ))}
                <ShopPagination
                  page={_page}
                  size={_size}
                  total={_total}
                  onPage={(v) => onPage(v)}
                  onPrev={(v) => onPrev(v)}
                  onNext={(v) => onNext(v)}
                />
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      {/* <section>
        <Container
          fluid
          className="g-2"
          style={{ maxWidth: 1280, margin: "0 auto" }}
        >
          <Row className="g-2">
            {data.lookbook.map((card, index) => {
              const columns = index < 2 ? { md: 6 } : { lg: 4 }
              const type = index < 2 ? "big" : "small"
              return (
                <Col {...columns} key={index}>
                  <CardLookbook data={card} cardType={type} />
                </Col>
              )
            })}
          </Row>
        </Container>
      </section> */}
    </>
  )
}
