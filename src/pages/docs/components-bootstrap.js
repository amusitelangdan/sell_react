import React from "react"
import * as Scroll from "react-scroll"

import { Container, Row, Col, Nav } from "react-bootstrap"

import DocsNav from "../../components/Docs/DocsNav"

import Alerts from "../../components/Docs/Bootstrap/Alerts"
import Badges from "../../components/Docs/Bootstrap/Badges"
import Breadcrumbs from "../../components/Docs/Bootstrap/Breadcrumbs"
import Buttons from "../../components/Docs/Bootstrap/Buttons"
import Card from "../../components/Docs/Bootstrap/Card"
import Dropdowns from "../../components/Docs/Bootstrap/Dropdowns"
import Forms from "../../components/Docs/Bootstrap/Forms"
import ListGroup from "../../components/Docs/Bootstrap/ListGroup"
import Modal from "../../components/Docs/Bootstrap/Modal"
import Navbar from "../../components/Docs/Bootstrap/Navbar"
import Navs from "../../components/Docs/Bootstrap/Navs"
import Pagination from "../../components/Docs/Bootstrap/Pagination"
import Progress from "../../components/Docs/Bootstrap/Progress"
import Tooltips from "../../components/Docs/Bootstrap/Tooltips"

import BreadcrumbsComponent from "../../components/Breadcrumbs"

export async function getStaticProps() {
  return {
    props: {
      nav: {
        light: true,
      },
      title: "Bootstrap Components",
    },
  }
}

const ComponentsBootstrap = () => {
  const ScrollLink = Scroll.Link

  const scrollLinkProps = {
    offset: -100,
    spy: true,
    smooth: true,
    activeClass: "active",
    className: "nav-link",
    href: "#",
  }
  return (
    <React.Fragment>
      <section className="hero">
        <Container>
          <BreadcrumbsComponent
            links={[
              {
                name: "Home",
                link: "/",
              },
              {
                name: "Bootstrap Components",
                active: true,
              },
            ]}
            className="justify-content-center"
          />

          <div className="hero-content pb-5 text-center">
            <h1 className="hero-heading">Bootstrap Components</h1>
            <Row>
              <Col xl={{ size: 8, offset: 2 }}>
                <p className="lead text-muted">
                  This is a quick showcase of some of the main Bootstrap
                  components that come with this theme. Theme uses React
                  Bootstrap plugin which extends Bootstrap framework and makes
                  using Bootstrap in React easy.{" "}
                </p>
                <p className="lead text-muted">
                  This theme uses React Bootstrap plugin which extends Bootstrap
                  framework and makes using Bootstrap in React easy. Read more
                  about React Bootstrap{" "}
                  <a href="https://react-bootstrap.github.io/">here</a>.
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      <Container fluid>
        <Row className="px-xl-5">
          <Col lg="2">
            <DocsNav />
          </Col>
          <Col lg="10" xl="8" className="docs-content position-relative">
            <Alerts />
            <Badges />
            <Breadcrumbs />
            <Buttons />
            <Card />
            <Dropdowns />
            <Forms />
            <ListGroup />
            <Modal />
            <Navbar />
            <Navs />
            <Pagination />
            <Progress />
            <Tooltips />
          </Col>
          <Col xl="2">
            <Nav
              tag="nav"
              variant="pills"
              className="flex-column sticky-top ms-1 p-3 mb-5 border-start  d-none d-xl-block"
              style={{ zIndex: "1" }}
            >
              <h6 className="sidebar-heading">Main components</h6>
              {sidebarMenu.map((item) => (
                <ScrollLink key={item.label} to={item.to} {...scrollLinkProps}>
                  {item.label}
                </ScrollLink>
              ))}
            </Nav>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}

export default ComponentsBootstrap

const sidebarMenu = [
  {
    label: "Alert",
    to: "alerts",
  },
  {
    label: "Badges",
    to: "badges",
  },
  {
    label: "Breadcrumb",
    to: "breadcrumb",
  },
  {
    label: "Buttons",
    to: "buttons",
  },
  {
    label: "Card",
    to: "card",
  },
  {
    label: "Dropdowns",
    to: "dropdowns",
  },
  {
    label: "Forms",
    to: "forms",
  },
  {
    label: "List Group",
    to: "listgroup",
  },
  {
    label: "Modal",
    to: "modal",
  },
  {
    label: "Navbar",
    to: "navbar",
  },
  {
    label: "Navs",
    to: "navs",
  },
  {
    label: "Pagination",
    to: "pagination",
  },
  {
    label: "Progress",
    to: "progress",
  },
  {
    label: "Tooltips",
    to: "tooltips",
  },
]
