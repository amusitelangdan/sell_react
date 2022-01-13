import { Container, Row, Col } from "react-bootstrap"

import ShopSidebar from "../components/ShopSidebar"
import ShopHeader from "../components/ShopHeader"
import ShopPagination from "../components/ShopPagination"
import Product from "../components/Product"
import Hero from "../components/Hero"

import products from "../data/products.json"
import data from "../data/category.json"

export async function getStaticProps() {
  return {
    props: {
      nav: {
        light: true,
      },
      title: "Category - full width",
    },
  }
}

export default function CategoryFull() {
  return (
    <>
      <Hero
        title={data.subtitle}
        breadcrumbs={data.breadcrumbs}
        content={data.content}
      />

      <Container fluid>
        <div className="px-xl-5">
          <Row>
            <Col xl="9" lg="8" className="products-grid order-lg-2">
              <ShopHeader />

              <Row>
                {products.map((value, index) => (
                  <Col sm="6" lg="4" xl="3" key={index}>
                    <Product data={value} showQuickView />
                  </Col>
                ))}
              </Row>

              <ShopPagination />
            </Col>
            <ShopSidebar />
          </Row>
        </div>
      </Container>
    </>
  )
}
