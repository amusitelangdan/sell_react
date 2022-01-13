import React, { useState, useEffect } from "react"
import dynamic from "next/dynamic"

import { Container, Row, Col } from "react-bootstrap"

import Breadcrumbs from "../components/Breadcrumbs"
import ContactForm from "../components/ContactForm"

import UseWindowSize from "../hooks/UseWindowSize"
import Icon from "../components/Icon"

export async function getStaticProps() {
  return {
    props: {
      nav: {
        light: true,
        classes: "navbar-sticky bg-fixed-white",
        color: "white",
      },
      title: "Contact v.2",
    },
  }
}

let Map

const breadcrumbLinks = [
  { name: "Home", link: "/" },
  { name: "Contact v.2", active: true },
]

export default function Contact2() {
  const [mapLoaded, setMapLoaded] = useState(false)
  const [dragging, setDragging] = useState(false)
  const [tap, setTap] = useState(false)

  const size = UseWindowSize()

  useEffect(() => {
    Map = dynamic(() => import("../components/Map"), { ssr: false })
    setMapLoaded(true)

    setTap(size.width > 700 ? true : false)
    setDragging(size.width > 700 ? true : false)
  }, [])

  return (
    <section>
      <Container fluid>
        <Row>
          <Col lg="6" xl="5" className="mx-auto">
            {/* Breadcrumbs */}
            <Breadcrumbs
              links={breadcrumbLinks}
              className="justify-content-start no-border mb-0"
            />

            <h4 className="mb-4 text-uppercase">Contact us</h4>
            <p className="lead mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
            </p>
            <Row className="mb-5">
              <Col md="4" className="text-center text-md-start">
                <Icon
                  className="svg-icon-light text-primary w-3rem h-3rem mb-3"
                  icon="navigation-map-1"
                />
                <h4 className="ff-base">Address</h4>
                <p className="text-muted">
                  13/25 New Avenue
                  <br />
                  New Heaven, 45Y 73J
                  <br />
                  England, <strong>Great Britain</strong>
                </p>
              </Col>
              <Col md="4" className="text-center text-md-start">
                <Icon
                  className="svg-icon-light text-primary w-3rem h-3rem mb-3"
                  icon="audio-call-1"
                />
                <h4 className="ff-base">Call center</h4>
                <p className="text-muted">
                  Sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </p>
                <p className="text-muted">
                  <strong>+33 555 444 333</strong>
                </p>
              </Col>
              <Col md="4" className="text-center text-md-start">
                <Icon
                  className="svg-icon-light text-primary w-3rem h-3rem mb-3"
                  icon="mail-1"
                />
                <h4 className="ff-base">Electronic support</h4>
                <p className="text-muted">
                  Please feel free to write an email to us or to use our
                  electronic ticketing system.
                </p>
                <ul className="list-unstyled text-muted">
                  <li>info@sell.com</li>
                  <li>support@sell.com</li>
                </ul>
              </Col>
            </Row>
            <hr className="mb-5" />
            <ContactForm className="mb-5" />
          </Col>
          <Col lg="5" xl="6">
            {mapLoaded && (
              <Map
                className="full-screen my-3"
                center={[53.14, 8.22]}
                markerPosition={[53.14, 8.22]}
                zoom={12}
                dragging={dragging}
                tap={tap}
              />
            )}
          </Col>
        </Row>
      </Container>
    </section>
  )
}
