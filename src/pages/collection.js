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
  const [_type, setType] = useState("favorited")
  const [_userid, setUserid] = useState("")
  const [_userInfo, setUserInfo] = useState({})
  const [_fa, setFa] = useState(0)
  const [_cr, setCr] = useState(0)
  const [_co, setCo] = useState(0)
  const router = useRouter()

  useEffect(() => {
    if (GetLocal("user")) {
      const userid = GetLocal("user")
      getMyUser(userid)
    } else {
      router.replace("/customer-login")
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
    getNefts(_page, _type, id)
  }

  const getNefts = async (v, tp, u) => {
    const json = await getCollection(tp, v, _size, u)
    console.log(json, "res")
    let favList = []
    let createdList = []
    let collectionList = []
    let favTotal = []
    let createdTotal = []
    let collectionTotal = []
    let favPage = []
    let createdPage = []
    let collectionPage = []
    if (json.data) {
      favList = json.data.favorited.list
      favTotal = json.data.favorited.total
      favPage = json.data.favorited.page ? json.data.favorited.page : 1

      createdList = json.data.created.list
      createdTotal = json.data.created.total
      createdPage = json.data.created.page ? json.data.created.page : 1

      collectionList = json.data.collection.list
      collectionTotal = json.data.collection.total
      collectionPage = json.data.collection.page ? json.data.collection.page : 1
      setFa(favTotal)
      setCr(createdTotal)
      setCo(collectionTotal)
      if (tp === "favorited") {
        setNefts(favList)
        setPage(favPage)
        setTotal(favTotal)
      }

      if (tp === "created") {
        setNefts(createdList)
        setTotal(createdTotal)
        setPage(createdPage)
      }

      if (tp === "collection") {
        setNefts(collectionList)
        setTotal(collectionTotal)
        setPage(collectionPage)
      }
    }
  }

  const onPage = (v, tp, u) => {
    getNefts(v, tp, u)
  }
  const onPrev = (v, tp, u) => {
    if (v > 0) {
      getNefts(v, tp, u)
    }
  }
  const onNext = (v, tp, u) => {
    if (v < Math.ceil(_total / _size)) {
      getNefts(v, tp, u)
    }
  }

  const onSelectTab = (v, u) => {
    switch (v) {
      case 0:
        setType("collection")
        setPage(1)
        getNefts(1, "collection", u)
        break
      case 2:
        setType("created")
        setPage(1)
        getNefts(1, "created", u)
        break
      case 1:
        setType("favorited")
        setPage(1)
        getNefts(1, "favorited", u)
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
                _type === "collection" ? 0 : _type === "created" ? 2 : 1
              }
              cr={_cr}
              co={_co}
              fa={_fa}
              onClick={(v) => onSelectTab(v, _userid)}
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

            {_total ? (
              <ShopPagination
                page={_page}
                size={_size}
                total={_total}
                onPage={(v) => onPage(v, _type, _userid)}
                onPrev={(v) => onPrev(v, _type, _userid)}
                onNext={(v) => onNext(v, _type, _userid)}
              />
            ) : (
              <></>
            )}
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
