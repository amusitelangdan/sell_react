import React, { useState } from "react"

import { Button, Dropdown } from "react-bootstrap"

import Link from "next/link"

import CartOverviewItem from "./CartOverviewItem"

import items from "../data/products-cart.json"
import Icon from "./Icon"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

export default function CartDropdown() {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }

  return (
    <>
      <div className="nav-item">
        <Link href="/cart">
          <a className="navbar-icon-link d-lg-none">
            <Icon icon="cart-1" />

            <span className="text-sm ms-2 ms-lg-0 text-uppercase text-sm fw-bold d-none d-sm-inline d-lg-none">
              View cart
            </span>
          </a>
        </Link>
        <div className="d-none d-lg-block">
          {/* Cart Dropdown*/}
          <Dropdown onToggle={toggleDropdown} show={dropdownOpen}>
            <Dropdown.Toggle
              as="a"
              href="#"
              className="navbar-icon-link dropdown-toggle--no-chevron"
            >
              <Icon icon="cart-1" />
              <div className="navbar-icon-link-badge">3 </div>
            </Dropdown.Toggle>
            <Dropdown.Menu align="end" className="p-4 dropdown-menu-animated">
              <div className="navbar-cart-product-wrapper">
                {items.map((item, index) => (
                  <CartOverviewItem
                    item={item}
                    key={index}
                    toggleDropdown={toggleDropdown}
                  />
                ))}
              </div>
              {/* total price*/}
              <div className="navbar-cart-total">
                <span className="text-uppercase text-muted">Total</span>
                <strong className="text-uppercase">$240.00</strong>
              </div>
              {/* buttons*/}
              <div className="d-flex justify-content-between">
                <Link href="/cart" passHref>
                  <Button
                    variant="link"
                    className="text-dark me-3"
                    onClick={() => toggleDropdown()}
                  >
                    View Cart <FontAwesomeIcon icon={faArrowRight} />
                  </Button>
                </Link>
                <Link href="/checkout-1" passHref>
                  <Button
                    variant="outline-dark"
                    onClick={() => toggleDropdown()}
                  >
                    Checkout
                  </Button>
                </Link>
              </div>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </>
  )
}
