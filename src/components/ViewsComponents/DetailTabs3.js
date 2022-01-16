import React, { useState } from "react"
import { Container, Nav, Tab, Row, Col, Table } from "react-bootstrap"

import Stars from "../Stars"
import ReviewForm from "../ReviewForm"

const DetailTabs3 = ({
  product,
  price_history = [],
  list_history = [],
  offer_history = [],
  item_activity = [],
}) => {
  const groupByN = (n, data) => {
    let result = []
    for (let i = 0; i < data.length; i += n) result.push(data.slice(i, i + n))
    return result
  }

  const groupedAdditionalInfo = groupByN(4, product.additionalinfo)

  return (
    <section className="mt-0" style={{marginBottom: 0, marginTop: '0px !important'}}>
      <Container>
        <Tab.Container defaultActiveKey="first">
          <Nav variant="tabs" className="flex-column flex-sm-row">
            <Nav.Item>
              <Nav.Link
                eventKey="first"
                className="detail-nav-link text-capitalize"
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                Price History
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="second"
                className="detail-nav-link text-capitalize"
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                Listings
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="third"
                className="detail-nav-link text-capitalize"
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                Offers
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="activity"
                className="detail-nav-link text-capitalize"
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                Item Activity
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content className="py-4">
            <Tab.Pane eventKey="first" className="px-3">
              <Row>
                <Col md="12"  style={{overflow: 'auto', maxHeight: '290px'}}>
                  <Table hover>
                    <thead>
                      <tr>
                        <th>Price</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {price_history.map((item, index) => (
                        <tr key={index}>
                          <td>{item.price}</td>
                          <td>{item.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <Row>
                <Col md="12"  style={{overflow: 'auto', maxHeight: '290px'}}>
                  <Table hover>
                    <thead>
                      <tr>
                        <th>Unit Price</th>
                        <th>USD Unit Price</th>
                        <th>Quantity</th>
                        <th>From</th>
                        <th>Expiration</th>
                      </tr>
                    </thead>
                    <tbody>
                      {list_history.map((item, index) => (
                        <tr key={index}>
                          <td>{item.unit_price}</td>
                          <td>{item.usd_unit_price}</td>
                          <td>{item.quantity}</td>
                          <td>{item.from}</td>
                          <td>{item.expiration}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <Row className="mb-5">
                <Col md="12"  style={{overflow: 'auto', maxHeight: '290px'}}>
                  <Table hover>
                    <thead>
                      <tr>
                        <th>Unit Price</th>
                        <th>USD Unit Price</th>
                        <th>Quantity</th>
                        <th>From</th>
                        <th>Floor Difference</th>
                        <th>Expiration</th>
                      </tr>
                    </thead>
                    <tbody>
                      {offer_history.map((item, index) => (
                        <tr key={index}>
                          <td>{item.unit_price}</td>
                          <td>{item.usd_unit_price}</td>
                          <td>{item.quantity}</td>
                          <td>{item.from}</td>
                          <td>{item.floor_difference}</td>
                          <td>{item.expiration}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="activity">
              <Row className="mb-5">
                <Col md="12"  style={{overflow: 'auto', maxHeight: '290px'}}>
                  <Table hover>
                    <thead>
                      <tr>
                        <th>Event</th>
                        <th>Unit Price</th>
                        <th>Quantity</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {item_activity.map((item, index) => (
                        <tr key={index}>
                          <td>{item.event}</td>
                          <td>{item.unit_price}</td>
                          <td>{item.quantity}</td>
                          <td>{item.from}</td>
                          <td>{item.to}</td>
                          <td>{item.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </section>
  )
}

export default DetailTabs3
