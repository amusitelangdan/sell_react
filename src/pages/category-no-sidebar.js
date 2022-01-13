import { Container, Row, Col } from "react-bootstrap"

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
      title: "Category - No Sidebar",
    },
  }
}

export default function CategoryNoSidebar() {
  return (
    <>
      <Hero
        title={data.subtitle}
        breadcrumbs={data.breadcrumbs}
        content={data.content}
      />
      <Container>
        <Row>
          <Col xs="12" className="products-grid sidebar-none">
            <ShopHeader />

            <Row>
              {products.map((value, index) => (
                <Col key={index} sm="6" lg="4" xl="3">
                  <Product data={value} showQuickView />
                </Col>
              ))}
            </Row>

            <ShopPagination />
          </Col>
        </Row>
      </Container>
    </>
  )
}
