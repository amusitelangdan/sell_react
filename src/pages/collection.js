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
import { getCollection } from '../api/api'
import { useRouter } from 'next/router';

export async function getServerSideProps(context) {
  const options = {
    page: 1,
    size: 20,
    type: "collection",
  }
  if (context.query.uid) {
    options.userid = context.query.uid
    const json = await getCollection(options.type, options.page, options.size, options.userid)
    return {
      props: {
        list: json.list,
        page: json.page,
        size: json.size,
        total: json.total,
        type: "collection",
        userid: options.userid,
      },
    }
  } else {
    return {
      props: {
        list: [],
        page: 1,
        size: 20,
        total: 20,
        type: "collection",
        userid: '',
      },
    }
  }
}

export default function Collection(props) {
  const [_nefts, setNefts] = useState(props.list)
  const [_total, setTotal] = useState(props.total)
  const [_page, setPage] = useState(props.page)
  const [_size, setSize] = useState(props.size)
  const [_type, setType] = useState(props.type)
  const [_userid, setUserid] = useState(props.userid)
  const router = useRouter();
  useEffect(() => {
    if (props.list) {
      setNefts(props.list)
    }
    setTotal(props.total)
    setPage(props.page)
    setSize(props.size)
    setType(props.type)
    setUserid(props.userid)
  }, [props])

  const getNefts = async (v, tp) => {
    const json = await getCollection(tp, v, _size, _userid);
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
      // setPage(v)
      // router.push({ path: "/", query: { page: v } })
    }
  }
  const onNext = (v, tp) => {
    if (v < Math.ceil(_total / _size)) {
      getNefts(v, tp)
      // setPage(v)
      // router.push({ path: "/", query: { page: v } })
    }
  }

  const onSelectTab = (v) => {
    switch (v) {
      case 0:
        setType("collection")
        setPage(1);
        getNefts(1, v)
        break
      case 1:
        setType("created")
        setPage(1);
        getNefts(1, v)
        break
      case 2:
        setType("favorited")
        setPage(1);
        getNefts(1, v)
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
            {/* <ShopHeader /> */}
            <MyTab activeStep={_type === 'collection' ? 0 : _type === 'created' ? 1 : 2} onClick={(v) => onSelectTab(v)} />
            <Row>
              {_nefts.map((item, index) => (
                <Col key={index} sm="6" xl="4">
                  <CardComponent
                  onClick={(v) => {router.push('/detail?id=123')}}
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
                    }}
                  />
                </Col>
              ))}
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
          <CollectionBar />
        </Row>
      </Container>
    </>
  )
}
