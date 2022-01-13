import React from "react"
import * as Scroll from "react-scroll"

import { Container, Row, Col, Nav } from "react-bootstrap"

import DocsNav from "../../components/Docs/DocsNav"

import Accordion from "../../components/Docs/Theme/Accordion"
import ReactSelect from "../../components/Docs/Theme/ReactSelect"
import Swiper from "../../components/Docs/Theme/Swiper"
import ResponsiveBorders from "../../components/Docs/Theme/ResponsiveBorders"
import BackgroundImage from "../../components/Docs/Theme/BackgroundImage"
import ImageOverlay from "../../components/Docs/Theme/ImageOverlay"

import BlockUtilities from "../../components/Docs/Theme/BlockUtilities"
import TextUtilities from "../../components/Docs/Theme/TextUtilities"
import CartDocs from "../../components/Docs/Theme/CartDocs"
import ReactMagnifier from "../../components/Docs/Theme/ReactMagnifier"
import CategoryTopBarDocs from "../../components/Docs/Theme/CategoryTopBarDocs"
import ProductModal from "../../components/Docs/Theme/ProductModal"
import ServicesBlockDocs from "../../components/Docs/Theme/ServicesBlockDocs"
import ResponsiveCollapse from "../../components/Docs/Theme/ResponsiveCollapse"
import Icons from "../../components/Docs/Theme/Icons"
import Image from "../../components/Docs/Theme/Images"
import TopBar from "../../components/Docs/Theme/TopBar"
import Block from "../../components/Docs/Theme/Block"
import BreadcrumbsComponent from "../../components/Breadcrumbs"
import CustomerSidebarDocs from "../../components/Docs/Theme/CustomerSidebarDocs"
import ProductDocs from "../../components/Docs/Theme/ProductDocs"
import RibbonDocs from "../../components/Docs/Theme/RibbonDocs"
import BreadcrumbsDocs from "../../components/Docs/Theme/BreadcrumbsDocs"

export async function getStaticProps() {
  return {
    props: {
      nav: {
        light: true,
      },
      title: "Theme Components",
    },
  }
}

const ComponentsTheme = () => {
  const ScrollLink = Scroll.Link

  const scrollLinkProps = {
    offset: -100,
    spy: true,
    //smooth: true,
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
                name: "Theme Components",
                active: true,
              },
            ]}
            className="justify-content-center"
          />

          <div className="hero-content pb-5 text-center">
            <h1 className="hero-heading">Theme Components</h1>
            <Row>
              <Col xl={{ size: 8, offset: 2 }}>
                <p className="lead text-muted">
                  This is a quick showcase of some of the main custom components
                  that come with this theme..
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
          <Col lg="8" className="position-relative">
            <Accordion />
            <Block />
            <BreadcrumbsDocs />
            <CartDocs />
            <CategoryTopBarDocs />
            <CustomerSidebarDocs />
            <Icons />
            <Image />
            <ProductDocs />
            <ProductModal />
            <ResponsiveCollapse />
            <Swiper />
            <ReactMagnifier />
            <ReactSelect />
            <RibbonDocs />
            <ServicesBlockDocs />
            <TopBar />

            <BackgroundImage />
            <ImageOverlay />
            <ResponsiveBorders />
            <BlockUtilities />
            <TextUtilities />
          </Col>
          <Col xl="2">
            <Nav
              tag="nav"
              variant="pills"
              className="flex-column sticky-top ms-1 p-3 mb-5 border-start"
            >
              <h6 className="sidebar-heading">React components</h6>
              {sidebarMenu.map((item) =>
                item.divider ? (
                  <h6 key={item.label} className="sidebar-heading mt-3">
                    {item.label}
                  </h6>
                ) : (
                  <ScrollLink
                    key={item.label}
                    to={item.to}
                    {...scrollLinkProps}
                  >
                    {item.label}
                  </ScrollLink>
                )
              )}
            </Nav>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}

export default ComponentsTheme

const sidebarMenu = [
  {
    label: "Accordion",
    to: "accordion",
  },
  {
    label: "Block",
    to: "block",
  },
  {
    label: "Breadcrumbs",
    to: "breadcrumbs",
  },
  {
    label: "Cart",
    to: "cart",
  },
  {
    label: "Category Top Bar",
    to: "categorytopbar",
  },
  {
    label: "Customer Sidebar",
    to: "customersidebar",
  },
  {
    label: "Icons",
    to: "icons",
  },
  {
    label: "Image",
    to: "images",
  },
  {
    label: "Product",
    to: "product",
  },
  {
    label: "Product Modal",
    to: "productmodal",
  },
  {
    label: "Responsive Collapse",
    to: "responsivecollapse",
  },
  {
    label: "React ID Swiper",
    to: "swiper",
  },
  {
    label: "React Magnifier",
    to: "reactmagnifier",
  },
  {
    label: "React Select",
    to: "react-select",
  },
  {
    label: "Ribbon",
    to: "ribbon",
  },
  {
    label: "Services Block",
    to: "servicesblock",
  },
  {
    label: "Top bar",
    to: "topbar",
  },
  {
    label: "Utilities",
    divider: true,
  },
  {
    label: "Background image",
    to: "backgroundimage",
  },
  {
    label: "Image overlay",
    to: "imageoverlay",
  },
  {
    label: "Responsive borders",
    to: "responsiveborders",
  },
  {
    label: "Block utilities",
    to: "blockutilities",
  },
  {
    label: "Text utilities",
    to: "textutilities",
  },
]
