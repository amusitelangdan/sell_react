import React, { useState } from "react"
import { Container, Nav, Tab, Row, Col, Table } from "react-bootstrap"

const DetailTabs2 = ({ product, nft_data }) => {
  const groupByN = (n, data) => {
    let result = []
    for (let i = 0; i < data.length; i += n) result.push(data.slice(i, i + n))
    return result
  }

  const groupedAdditionalInfo = groupByN(4, product.additionalinfo)

  return (
    <section className="mt-5">
      <Container>
        <Tab.Container defaultActiveKey="properties">
          <Nav variant="tabs" className="flex-column flex-sm-row">
            <Nav.Item>
              <Nav.Link
                eventKey="properties"
                className="detail-nav-link text-uppercase"
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                properties
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="about"
                className="detail-nav-link text-uppercase"
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                about creator
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="details"
                className="detail-nav-link text-uppercase"
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                details
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content className="py-4">
            <Tab.Pane eventKey="details" className="px-3">
              <Row>
              <Col md="12">
                    <Table className="text-sm">
                      <tbody>
                        <tr>
                          <td>{nft_data.details}</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="properties">
              {/* icon_robux_@2x */}
              <Row>
                <div className="properties0">
                  <div className="properties1">
                    <div className="text-uppercase properties2">creator</div>
                    <div className="text-uppercase properties3">
                     {nft_data.properties}
                    </div>
                    <div className="text-uppercase properties4">
                      0.01% have this trait
                    </div>
                  </div>
                </div>
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="about">
              <Row className="mb-5">
                <Col lg="10" xl="9">
                  {/* {product.reviews.map((review) => (
                    <div
                      key={review.author}
                      className="review d-flex"
                      style={{ padding: "10px" }}
                    >
                      <div className="flex-shrink-0 text-center me-4 me-xl-5">
                        <img
                          className="review-image"
                          style={{ width: 86, height: 86, marginBottom: 0 }}
                          src={review.avatar}
                          alt={review.author}
                        />
                      </div>
                      <div>
                        <h5 className="mt-2 mb-1">{review.author}</h5>
                      </div>
                    </div>
                  ))} */}
                  <div
                      className="review d-flex"
                      style={{ padding: "10px" }}
                    >
                      {/* <div className="flex-shrink-0 text-center me-4 me-xl-5">
                        <img
                          className="review-image"
                          style={{ width: 86, height: 86, marginBottom: 0 }}
                          src={review.avatar}
                          alt={review.author}
                        />
                      </div> */}
                      <div>
                        <h5 className="mt-2 mb-1">{nft_data.author}</h5>
                      </div>
                    </div>
                </Col>
              </Row>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </section>
  )
}

export default DetailTabs2