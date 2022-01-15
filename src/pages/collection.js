import { Container, Row, Col } from "react-bootstrap"
import fetch from "isomorphic-unfetch"
import Hero from "../components/Hero"
import Product from "../components/Product"
import CollectionBar from "../components/ViewsComponents/CollectionBar"
import CardComponent from "./../components/Card"
import Icon from "../components/Icon"
import MyTab from "./../components/ViewsComponents/Tab"

import products from "../data/products.json"
import data from "../data/collection.json"
import ShopPagination from "../components/ShopPagination"
import { useEffect, useState } from "react"
import { getCollection, GetImage, GetUserInfo, GetLocal } from "../api/api"
import { useRouter } from "next/router"
import { notification } from "antd"

export default function Collection(props) {
  const [_nefts, setNefts] = useState([])
  const [_total, setTotal] = useState(0)
  const [_page, setPage] = useState(1)
  const [_size, setSize] = useState(20)
  const [_type, setType] = useState("favorite")
  const [_userid, setUserid] = useState("")
  const [_userInfo, setUserInfo] = useState({})
  const router = useRouter()

  useEffect(() => {
    if (GetLocal("user")) {
      const userid = GetLocal("user")
      getMyUser(userid)
    } else {
      router.replace('/customer-login')
    }
  }, [])

  const getMyUser = async (id) => {
    const res = await GetUserInfo(id)
    if (res.code === "100") {
      localStorage.removeItem("user")
      return router.replace("/customer-login")
    }

    if (res.code === "404") {
      return notification.error({
        message: res.data.msg,
        placement: "bottomRight",
      })
    }
    setUserInfo(res.data)
    setUserid(id)
    getNefts(_page, _type)
  }

  const getNefts = async (v, tp) => {
    const json = await getCollection(tp, v, _size, _userid)
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

  const onPage = (v, tp) => {
    getNefts(v, tp)
  }
  const onPrev = (v, tp) => {
    if (v > 0) {
      getNefts(v, tp)
    }
  }
  const onNext = (v, tp) => {
    if (v < Math.ceil(_total / _size)) {
      getNefts(v, tp)
    }
  }

  const onSelectTab = (v) => {
    switch (v) {
      case 0:
        setType("collection")
        setPage(1)
        getNefts(1, "collection")
        break
      case 1:
        setType("created")
        setPage(1)
        getNefts(1, "created")
        break
      case 2:
        setType("favorited")
        setPage(1)
        getNefts(1, "favorited")
        break
      default:
        break
    }
  }

  return (
    <>
      <Hero
        title={data.subtitle}
        breadcrumbs={data.breadcrumbs}
        content={data.content}
      />
      <Container>
        <Row>
          <Col xl="9" lg="8" className="products-grid">
            <MyTab
              activeStep={
                _type === "collection" ? 0 : _type === "created" ? 1 : 2
              }
              onClick={(v) => onSelectTab(v)}
            />
            <Row>
              {_nefts.length > 0 ? (
                _nefts.map((item, index) => (
                  <Col key={index} sm="6" xl="4">
                    <CardComponent
                      onClick={(v) => {
                        router.push(`/detail?id=${v.id}`)
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
                      }}
                    />
                  </Col>
                ))
              ) : (
                <></>
              )}
            </Row>

            <ShopPagination
              page={_page}
              size={_size}
              total={_total}
              onPage={(v) => onPage(v, _type)}
              onPrev={(v) => onPrev(v, _type)}
              onNext={(v) => onNext(v, _type)}
            />
          </Col>
          {JSON.stringify(_userInfo) !== "{}" ? (
            <CollectionBar
              name={_userInfo.name}
              email={_userInfo.email}
              avatar={GetImage(_userInfo.avatar)}
              userid={_userid}
            />
          ) : (
            <></>
          )}
        </Row>
      </Container>
    </>
  )
}
