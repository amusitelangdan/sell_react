import React from "react"
import { Dropdown, Nav } from "react-bootstrap"

export default function LoginDrop({ data: {} }) {
  return (
    <div className="d-flex align-items-center justify-content-between justify-content-lg-end mt-1 mb-2 my-lg-0">
      <Dropdown as="div" className="navbar-icon-link mt-n1 py-0">
        <Dropdown.Toggle as="a" className="dropdown-toggle--no-chevron">
          <img
            // src={data.img}
            src={"/img/slider/circle-slider-2.jpg"}
            // alt={data.title}
            className="avatar avatar-sm avatar-border-white"
          />
        </Dropdown.Toggle>
        <Dropdown.Menu align="end">
          <Dropdown.Item>
            Sign Out
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}
