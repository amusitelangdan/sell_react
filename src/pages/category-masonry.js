import { Container, Row, Col } from "react-bootstrap"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

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
      title: "Category - Masonry Layout",
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

              <ResponsiveMasonry
                style={{ marginTop: "50px" }}
                columnsCountBreakPoints={{ 300: 2, 900: 3, 1100: 4 }}
              >
                <Masonry gutter="30px">
                  {products.slice(0, -1).map((value, index) => (
                    <div key={index} style={{ marginTop: "-30px" }}>
                      <Product key={index} data={value} masonry />
                    </div>
                  ))}
                </Masonry>
              </ResponsiveMasonry>

              <ShopPagination />
            </Col>
            <ShopSidebar />
          </Row>
        </div>
      </Container>
    </>
  )
}
