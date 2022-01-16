import React, { memo, useEffect, useState } from "react"
import { Container, Nav, Tab, Row, Col, Table } from "react-bootstrap"
import * as echarts from "echarts"

const DetailTabs1 = memo(
  ({
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
    const [axa, setAxa] = useState(1)

    const groupedAdditionalInfo = groupByN(4, product.additionalinfo)

    useEffect(() => {
      setTimeout(() => {
        onSelct(1)
        console.log(1)
      }, 500)
    }, [])

    const onSelct = (type = 1) => {
      setAxa(type)
      const data1 = roblox_data.outfit_data
      const data2 = roblox_data.purchase_data
      const data3 = roblox_data.try_on_data
      switch (type) {
        case 1:
          initEcharts(data1)
          break
        case 2:
          initEcharts(data2)
          break
        case 3:
          initEcharts(data3)
          break
        default:
          break
      }
    }

    const initEcharts = (data) => {
      var chartDom = document.getElementById("outfit_data")
      let myChart = echarts.init(chartDom)
      const option = {
        xAxis: {
          type: "category",
          data: [],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: data,
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
      <section
        className="mt-5 classsssxxx"
        style={{ marginBottom: "0 !important", marginTop: "0px !important" }}
      >
        <Container>
          <Tab.Container defaultActiveKey="second">
            <Nav variant="tabs" className="flex-column flex-sm-row">
              <Nav.Item>
                <Nav.Link
                  eventKey="second"
                  className="detail-nav-link text-capitalize"
                  href="#"
                  onClick={(e) => e.preventDefault()}
                >
                  roblox data
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="first"
                  className="detail-nav-link text-capitalize"
                  href="#"
                  onClick={(e) => e.preventDefault()}
                >
                  Description
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="third"
                  className="detail-nav-link text-capitalize"
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
                              className={`text-capitalize fw-normal ${
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
                      className={`on-default-xs ${
                        axa === 1 ? "on-default-xs-selected" : ""
                      }`}
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
                      className={`on-default-xs ${
                        axa === 2 ? "on-default-xs-selected" : ""
                      }`}
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
                      className={`on-default-xs ${
                        axa === 3 ? "on-default-xs-selected" : ""
                      }`}
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
                    {comments.map((item, index) => (
                      <div key={index}>{item}</div>
                    ))}
                  </Col>
                </Row>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Container>
      </section>
    )
  }
)

export default DetailTabs1
