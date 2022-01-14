/*
 * @Author: your name
 * @Date: 2021-11-08 10:14:40
 * @LastEditTime: 2022-01-14 19:32:40
 * @LastEditors: Please set LastEditors
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
import {useRouter} from "next/router"
export default function Icons({
  loggedUser,
  loggedUser_avatar,
  searchToggle,
  setSearchToggle,
  data,
}) {
  const router = useRouter();

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

      {/* <Dropdown as="div" className="navbar-icon-link mt-n1 py-0">
        <Dropdown.Toggle
          as="a"
          className="dropdown-toggle--no-chevron"
          style={item.type === "avatar" && { padding: 0 }}
        >
          {item.type === "avatar" ? (
            <img
              src={data.img}
              alt={data.title}
              className="avatar avatar-sm avatar-border-white"
            />
          ) : (
            data.title
          )}
        </Dropdown.Toggle>
        <Dropdown.Menu align="end">
          <ActiveLink
            activeClassName="active"
          >
            <Dropdown.Item onClick={() => onLinkClick(item.title)}>
              Sign Out
            </Dropdown.Item>
          </ActiveLink>
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
      </Dropdown> */}

      {loggedUser ? (
        <Dropdown as="div" className="navbar-icon-link mt-n1 py-0">
          <Dropdown.Toggle as="a" className="dropdown-toggle--no-chevron">
            <img
              src={loggedUser_avatar ? loggedUser_avatar : '/img/slider/circle-slider-2.jpg'}
              // src={"/img/slider/circle-slider-2.jpg"}
              // alt={data.title}
              className="avatar avatar-sm avatar-border-white"
            />
          </Dropdown.Toggle>
          <Dropdown.Menu align="end">
            <Dropdown.Item onClick={() => router.replace('/customer-login')}>Sign Out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
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
