import React, { useEffect, useState } from "react"
import { Container, Nav, Tab, Row, Col, Table } from "react-bootstrap"
import * as echarts from "echarts"

const DetailTabs1 = ({
  product,
  outfit_data = [],
  purchase_data = [],
  try_on_data = [],
  roblox_data,
  description = "",
  comments = [],
}) => {
  const groupByN = (n, data) => {
    let result = []
    for (let i = 0; i < data.length; i += n) result.push(data.slice(i, i + n))
    return result
  }

  const groupedAdditionalInfo = groupByN(4, product.additionalinfo)

  useEffect(() => {
    setTimeout(() => {
      onSelct(1)
    }, 500)
  })

  const onSelct = (type = 1) => {
    var chartDom = document.getElementById("outfit_data")
    var myChart = echarts.init(chartDom)
    const data1 = roblox_data.outfit_data
    const data2 = roblox_data.purchase_data
    const data3 = roblox_data.try_on_data
    var option
    option = {
      xAxis: {
        type: "category",
        data: [],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: type === 1 ? data1 : type === 2 ? data2 : data3,
          type: "line",
        },
      ],
    }
    option && myChart.setOption(option)
    window.onresize = function () {
      myChart.resize()
    }
  }

  return (
    <section className="mt-5">
      <Container>
        <Tab.Container defaultActiveKey="second">
          <Nav variant="tabs" className="flex-column flex-sm-row">
            <Nav.Item>
              <Nav.Link
                eventKey="second"
                className="detail-nav-link text-uppercase"
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                roblox data
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="first"
                className="detail-nav-link text-uppercase"
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                Description
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="third"
                className="detail-nav-link text-uppercase"
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                comments
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content className="py-4">
            <Tab.Pane eventKey="first" className="px-3">
              <Row>
                <Col>{description}</Col>
                {/* {groupedAdditionalInfo.map((infoBlock, index) => (
                  <Col key={index} md="12">
                    <Table className="text-sm">
                      <tbody>
                        {infoBlock.map((info, index) => (
                          <tr key={index}>
                            <th
                              className={`text-uppercase fw-normal ${
                                index == 0 ? "border-0" : ""
                              }`}
                            >
                              {info.name}
                            </th>
                            <td
                              className={`text-muted ${
                                index == 0 ? "border-0" : ""
                              }`}
                            >
                              {info.text}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </Col>
                ))} */}
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <Col md="12" style={{ overflowX: "auto" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div
                    style={{
                      marginRight: 10,
                      cursor: "pointer",
                      padding: "10px 15px",
                      border: "1px solid rgba(52, 148, 230, 0.1)",
                    }}
                    onClick={() => onSelct(1)}
                  >
                    outfit data
                  </div>
                  <div
                    style={{
                      marginRight: 10,
                      cursor: "pointer",
                      padding: "10px 15px",
                      border: "1px solid rgba(52, 148, 230, 0.1)",
                    }}
                    onClick={() => onSelct(2)}
                  >
                    purchase data
                  </div>
                  <div
                    style={{
                      cursor: "pointer",
                      padding: "10px 15px",
                      border: "1px solid rgba(52, 148, 230, 0.1)",
                    }}
                    onClick={() => onSelct(3)}
                  >
                    try on data
                  </div>
                </div>
                <div
                  id="outfit_data"
                  style={{ width: "100%", maxWidth: 375, height: "300px" }}
                ></div>
              </Col>
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <Row className="mb-5">
                <Col lg="10" xl="9">
                  {comments}
                  {
                    // comments.map((item, index) => <div key={index}>{item}</div>)
                  }
                </Col>
              </Row>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </section>
  )
}

export default DetailTabs1
