import React, { useState, useEffect, useRef } from "react"

import Link from "next/link"
import Router from "next/router"

import {
  Navbar,
  Nav,
  NavLink,
  Dropdown,
  Container,
  Badge,
  Button,
} from "react-bootstrap"

import UseWindowSize from "../../hooks/UseWindowSize"
import useScrollPosition from "@react-hook/window-scroll"
import useSize from "@react-hook/size"

import ActiveLink from "../ActiveLink"

import menu from "../../data/menu.json"

import FullScreenSearch from "./FullScreenSearch"

import Icons from "./Icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import MegaMenu from "./MegaMenu"


const Header = (props) => {
  const [collapsed, setCollapsed] = useState(false)
  const [searchToggle, setSearchToggle] = useState(false)
  const [parentName, setParentName] = useState(false)
  const [additionalNavClasses, setAdditionalNavClasses] = useState("")

  const size = UseWindowSize()
  const scrollY = useScrollPosition()

  const navbarRef = useRef(null)
  const topbarRef = useRef(null)
  const [topbarWidth, topbarHeight] = useSize(topbarRef)
  const [navbarWidth, navbarHeight] = useSize(navbarRef)

  const onLinkClick = (parent) => {
    size.width < 991 && setCollapsed(!collapsed)
    setParentName(parent)
  }

  const makeNavbarSticky = () => {
    if (props.nav.sticky !== false) {
      if (scrollY > topbarHeight) {
        setAdditionalNavClasses("fixed-top")
        navbarHeight > 0 &&
          props.headerAbsolute !== true &&
          props.setPaddingTop(navbarHeight)
      } else {
        setAdditionalNavClasses("")
        props.setPaddingTop(0)
      }
    } else {
      setAdditionalNavClasses("")
      props.setPaddingTop(0)
    }
  }

  useEffect(() => {
    makeNavbarSticky()
  }, [scrollY, topbarHeight])

  // highlight not only active dropdown item, but also its parent, i.e. dropdown toggle
  const highlightDropdownParent = () => {
    menu.map((item) => {
      item.dropdown &&
        item.dropdown.map((dropdownLink) => {
          dropdownLink.link &&
            dropdownLink.link === Router.route &&
            setParentName(item.title)
          dropdownLink.links &&
            dropdownLink.links.map(
              (link) => link.link === Router.route && setParentName(item.title)
            )
        })
      item.megamenu &&
        item.megamenu.map((megamenuColumn) =>
          megamenuColumn.map((megamenuBlock) =>
            megamenuBlock.links.map((dropdownLink) => {
              if (dropdownLink.link === Router.route) {
                dropdownLink.parent
                  ? setParentName(dropdownLink.parent)
                  : setParentName(item.title)
              }
            })
          )
        )
      item.link === Router.route && setParentName(item.title)
    })
  }

  useEffect(highlightDropdownParent, [])

  return (
    <header
      className={`header ${props.headerClasses ? props.headerClasses : ""} ${
        props.headerAbsolute ? "header-absolute" : ""
      }`}
    >
      {/* Top Bar*/}
      {/* <TopBar innerRef={topbarRef} hideTopbar={props.hideTopbar} /> */}
      {/* Top Bar End*/}

      {/* Navbar*/}
      <div ref={navbarRef}>
        <Navbar
          fixed={props.nav.fixed ? props.nav.fixed : ""}
          expand="lg"
          expanded={collapsed}
          bg={collapsed || props.nav.color === "white" ? "white" : false}
          className={` ${
            props.nav.classes
              ? props.nav.classes
              : "navbar-sticky bg-fixed-white"
          } ${additionalNavClasses ? additionalNavClasses : ""} navbar-airy`}
          variant={props.nav.dark ? "dark" : "light"}
        >
          <Container>
            <Navbar.Toggle
              onClick={() => setCollapsed(!collapsed)}
              className="navbar-toggler-right"
            >
              <FontAwesomeIcon icon={faBars} />
            </Navbar.Toggle>

            {/* Navbar Collapse */}
            <Navbar.Collapse>
              <>
                <Nav className="mx-auto nav-box">
                  {menu &&
                    menu.map((item) =>
                      item.dropdown || item.megamenu ? (
                        // show entire menu to unlogged user or hide items that have hideToLoggedUser set to true
                        !props.loggedUser ||
                        (props.loggedUser && !item.hideToLoggedUser) ? (
                          <Dropdown
                            key={item.title}
                            className={
                              item.position ? `position-${item.position}` : ``
                            }
                          >
                            <Dropdown.Toggle
                              as={NavLink}
                              className={
                                parentName === item.title ? "active" : ""
                              }
                            >
                              {item.title}
                            </Dropdown.Toggle>
                            <Dropdown.Menu
                              className={`dropdown-menu-animated ${
                                item.megamenu ? "megamenu py-lg-0" : ""
                              }`}
                            >
                              {item.dropdown &&
                                item.dropdown.map((dropdownItem) =>
                                  dropdownItem.links ? (
                                    <React.Fragment key={dropdownItem.title}>
                                      {dropdownItem.divider && (
                                        <Dropdown.Divider />
                                      )}
                                      <h6 className="dropdown-header fw-normal">
                                        {dropdownItem.title}
                                      </h6>
                                      {dropdownItem.links.map((link) => (
                                        <ActiveLink
                                          key={link.title}
                                          activeClassName="active"
                                          href={link.link}
                                          passHref
                                        >
                                          <Dropdown.Item
                                            onClick={() =>
                                              onLinkClick(item.title)
                                            }
                                          >
                                            {link.title}
                                            {link.new && (
                                              <Badge
                                                variant="warning"
                                                className="ms-1 mt-n1"
                                              >
                                                New
                                              </Badge>
                                            )}
                                          </Dropdown.Item>
                                        </ActiveLink>
                                      ))}
                                    </React.Fragment>
                                  ) : (
                                    <ActiveLink
                                      key={dropdownItem.title}
                                      activeClassName="active"
                                      href={dropdownItem.link}
                                      passHref
                                    >
                                      <Dropdown.Item
                                        onClick={() => onLinkClick(item.title)}
                                      >
                                        {dropdownItem.title}
                                        {dropdownItem.new && (
                                          <Badge
                                            bg="info-light"
                                            text="info"
                                            className="ms-1 mt-n1"
                                          >
                                            New
                                          </Badge>
                                        )}
                                      </Dropdown.Item>
                                    </ActiveLink>
                                  )
                                )}
                              {/* MEGA MENU */}
                              {item.megamenu && (
                                <MegaMenu
                                  onLinkClick={onLinkClick}
                                  item={item}
                                />
                              )}
                              {/* /MEGA MENU */}
                            </Dropdown.Menu>
                          </Dropdown>
                        ) : (
                          ""
                        )
                      ) : (props.loggedUser && !item.hideToLoggedUser) ||
                        !props.loggedUser ? (
                        <Nav.Item
                          key={item.title}
                          className={
                            item.button
                              ? "mt-3 mt-lg-0 ms-lg-3 d-lg-none d-xl-inline-block"
                              : ""
                          }
                        >
                          {item.button ? (
                            item.showToLoggedUser !== false && (
                              <ActiveLink
                                activeClassName="active"
                                href={item.link}
                              >
                                <Button
                                  variant="primary"
                                  onClick={() => onLinkClick(item.title)}
                                >
                                  {item.title}
                                </Button>
                              </ActiveLink>
                            )
                          ) : (
                            <ActiveLink
                              activeClassName="active"
                              href={item.link}
                              passHref
                            >
                              <Nav.Link onClick={() => onLinkClick(item.title)}>
                                {item.title}
                              </Nav.Link>
                            </ActiveLink>
                          )}
                        </Nav.Item>
                      ) : (
                        ""
                      )
                    )}
                </Nav>

                {/* Menu Icons */}
                <Icons
                  loggedUser={props.loggedUser}
                  // searchToggle={searchToggle}
                  // setSearchToggle={setSearchToggle}
                />
                {/* /Menu Icons */}
              </>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      {/* /Navbar */}

      {/* Fullscreen search area*/}
      {searchToggle && (
        <FullScreenSearch
          searchToggle={searchToggle}
          setSearchToggle={setSearchToggle}
        />
      )}
      {/* /Fullscreen search area*/}
    </header>
  )
}

export default Header
