import { faDollarSign } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { Container, Row, Col, Dropdown } from "react-bootstrap"
import Icon from "../Icon"
export default function TopBar({ innerRef, hideTopbar }) {
  return (
    <div ref={innerRef}>
      {!hideTopbar && (
        <div className="top-bar">
          <Container fluid={true}>
            <Row className="d-flex align-items-center">
              <Col sm="7" className="d-none d-sm-block">
                <ul className="list-inline mb-0 topbar-text">
                  <li className="list-inline-item pe-3 me-0">
                    <Icon icon="calls-1" className="me-2" />
                    020-800-456-747
                  </li>
                  <li className="list-inline-item px-3 border-start d-none d-lg-inline-block">
                    Free shipping on orders over $300
                  </li>
                </ul>
              </Col>
              <Col sm="5" className="d-flex justify-content-end">
                {/* Language Dropdown*/}
                <Dropdown className="border-end px-3">
                  <Dropdown.Toggle
                    as="a"
                    href="#"
                    className="topbar-link"
                    id="langsDropdown"
                  >
                    <img
                      className="topbar-flag"
                      src="/svg/united-kingdom.svg"
                      alt="english"
                    />
                    English
                  </Dropdown.Toggle>
                  <Dropdown.Menu
                    align="end"
                    aria-labelledby="langsDropdown"
                    className="dropdown-menu-animated"
                  >
                    <Dropdown.Item className="text-sm">
                      <img
                        className="topbar-flag"
                        src="/svg/germany.svg"
                        alt="german"
                      />
                      German
                    </Dropdown.Item>
                    <Dropdown.Item className="text-sm">
                      <img
                        className="topbar-flag"
                        src="/svg/france.svg"
                        alt="french"
                      />
                      French
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                {/* Currency Dropdown*/}
                <Dropdown className="ps-3 ms-0">
                  <Dropdown.Toggle
                    as="a"
                    href="#"
                    className="topbar-link"
                    id="currencyDropdown"
                  >
                    <FontAwesomeIcon
                      icon={faDollarSign}
                      className="text-xs align-middle mt-n1 me-2"
                    />
                    USD
                  </Dropdown.Toggle>
                  <Dropdown.Menu
                    align="end"
                    aria-labelledby="currencyDropdown"
                    className="dropdown-menu-animated"
                  >
                    <Dropdown.Item className="text-sm">EUR</Dropdown.Item>
                    <Dropdown.Item className="text-sm">GBP</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </div>
  )
}
