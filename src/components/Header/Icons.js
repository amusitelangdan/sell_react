/*
 * @Author: your name
 * @Date: 2021-11-08 10:14:40
 * @LastEditTime: 2022-01-10 10:25:25
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /sell-react-2-0(1)/src/components/Header/Icons.js
 */
import React from "react"
import { Dropdown, Nav } from "react-bootstrap"
import ActiveLink from "../ActiveLink"
import Link from "next/link"
import CartOverviewDropdown from "../CartOverviewDropdown"
import Icon from "../Icon"
import userMenu from "../../data/user-menu.json"
export default function Icons({ loggedUser, searchToggle, setSearchToggle }) {
  return (
    <div className="d-flex align-items-center justify-content-between justify-content-lg-end mt-1 mb-2 my-lg-0">
      {/* Search Button*/}
      {/* <div
        className="nav-item navbar-icon-link"
        data-toggle="search"
        onClick={() => setSearchToggle(!searchToggle)}
      >
        <Icon icon="search-1" />
      </div> */}

      {loggedUser ? (
        userMenu.map((item) => (
          <Dropdown
            key={item.title}
            as="div"
            className={
              item.type === "avatar" ? "navbar-icon-link mt-n1 py-0" : ""
            }
          >
            {/* Logged User - Show User Menu */}
            <Dropdown.Toggle
              as="a"
              className="dropdown-toggle--no-chevron"
              style={item.type === "avatar" && { padding: 0 }}
            >
              {item.type === "avatar" ? (
                <img
                  src={item.img}
                  alt={item.title}
                  className="avatar avatar-sm avatar-border-white"
                />
              ) : (
                item.title
              )}
            </Dropdown.Toggle>
            <Dropdown.Menu align="end">
              {item.dropdown &&
                item.dropdown.map((dropdownItem, dropdownIndex) =>
                  dropdownItem.divider ? (
                    <Dropdown.Item key={dropdownIndex} divider />
                  ) : (
                    <ActiveLink
                      key={dropdownIndex}
                      activeClassName="active"
                      href={dropdownItem.link}
                      passHref
                    >
                      <Dropdown.Item onClick={() => onLinkClick(item.title)}>
                        {dropdownItem.title}
                      </Dropdown.Item>
                    </ActiveLink>
                  )
                )}
            </Dropdown.Menu>
          </Dropdown>
        ))
      ) : (
        <Nav.Item className="nav-item">
          {/* User Not Logged - link to login page*/}
          <Link href="/customer-login">
            <a className="navbar-icon-link">
              <Icon icon="male-user-1" />

              <span className="text-sm ms-2 ms-lg-0 text-uppercase text-sm fw-bold d-none d-sm-inline d-lg-none">
                Log in
              </span>
            </a>
          </Link>
        </Nav.Item>
      )}

      {/* Cart Overview Dropdown*/}

      {/* <CartOverviewDropdown /> */}

      {/* End Cart Overview Dropdown*/}
    </div>
  )
}
