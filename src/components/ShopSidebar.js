import PriceSlider from "./PriceSlider"

import { Col, Collapse, Nav, Form } from "react-bootstrap"
import React, { useState } from "react"
const ShopSidebar = (props) => {
  // FILTERS OBJECT IS ON THE BOTTOM OF THE PAGE

  const [filterInputs, setFilterInputs] = useState({
    // Remove or customize on PRODUCTION - Some brands are preselected
    "clothes-brand": ["brand0", "brand1"],
    // Remove or customize on PRODUCTION - Some sizes are preselected
    size: ["size1"],
  })

  // Collapse state
  const [collapse, setCollapse] = useState({
    Jackets: true,
  })
  const toggleCollapse = (name) => {
    setCollapse({ ...collapse, [name]: !collapse[name] })
  }

  // On input change func
  const onInputChange = (e) => {
    const value = e.target.id // Input value
    const name = e.target.name // Input name
    filterInputs[name] // If input group exists
      ? filterInputs[name].some((item) => item === value) // If item exists in array > remove
        ? setFilterInputs({
            ...filterInputs,
            [name]: filterInputs[name].filter((x) => x !== value),
          })
        : setFilterInputs({
            ...filterInputs,
            [name]: [...filterInputs[name], value],
          }) // If item doesn't exists in array > add it to input group
      : setFilterInputs({ ...filterInputs, [name]: [value] }) // If input group doesn't exists > create input group and add value
  }

  // On input radio change func
  const onRadioChange = (e) => {
    const value = e.target.id // Input value
    const name = e.target.name // Input name

    // Set active radio input
    setFilterInputs({ ...filterInputs, [name]: value })
  }

  return (
    <Col lg={{ size: 4, order: 1 }} xl="3" className="sidebar">
      {/* Loop throug filters object */}
      {filters.map((filter, index) => (
        <div className="sidebar-block px-3 px-lg-0 me-lg-4" key={index}>
          {/* COLLAPSE TOGGLE */}
          <a
            className="d-lg-none block-toggler"
            aria-expanded={collapse[filter.name]}
            onClick={() => toggleCollapse(filter.name)}
            data-bs-toggle="collapse"
          >
            {filter.name}
          </a>
          {/* END COLLAPSE TOGGLE */}

          {/* COLLAPSE */}
          <Collapse in={collapse[filter.name]} className="expand-lg">
            <div>
              {/* LOOP THROUGH FILTER WITH MENU ITEMS */}
              {filter.items && (
                <Nav variant="pills" className="flex-column mt-4 mt-lg-0">
                  {filter.items.map((item) => (
                    <React.Fragment key={item.name}>
                      <div
                        className="sidebar-menu-item mb-2"
                        aria-expanded={collapse[item.name]}
                        data-bs-toggle="collapse"
                      >
                        <Nav.Link
                          className={` ${item.active ? "active" : ""}`}
                          onClick={() => toggleCollapse(item.name)}
                        >
                          <span>{item.name}</span>
                          <span className="sidebar-badge ms-2">
                            {item.count}
                          </span>
                        </Nav.Link>
                      </div>

                      <Collapse in={collapse[item.name]}>
                        <div>
                          <Nav variant="pills" className="flex-column ms-3">
                            {item.items.map((subitem, index) => (
                              <Nav.Link
                                className="mb-2"
                                href={subitem.link}
                                key={index}
                              >
                                {subitem.name}
                              </Nav.Link>
                            ))}
                          </Nav>
                        </div>
                      </Collapse>
                    </React.Fragment>
                  ))}
                </Nav>
              )}
              {/* END LOOP THROUGH FILTER WITH MENU ITEMS */}

              {/* FILTER USING COMPONENT */}
              {filter.component && (
                <React.Fragment>
                  <h6 className="sidebar-heading d-none d-lg-block">
                    {filter.subtitle}
                  </h6>
                  <PriceSlider />
                </React.Fragment>
              )}
              {/* END FILTER USING COMPONENT */}

              {/* IF CHECKBOX || RADIO || COLOUR */}
              {(filter.checkboxes || filter.radios || filter.colours) && (
                <React.Fragment>
                  <h6 className="sidebar-heading d-none d-lg-block">
                    {filter.subtitle}
                  </h6>

                  {/* INPUT FORM */}
                  <Form className="mt-4 mt-lg-0" action="#">
                    {filter.checkboxes && // IF CHECKBOXES
                      filter.checkboxes.map(
                        (
                          checkbox // LOOP THROUGH INPUTS
                        ) => (
                          <div className="mb-1" key={checkbox.id}>
                            <Form.Check
                              type="checkbox"
                              id={checkbox.id}
                              name={checkbox.name}
                              label={
                                <React.Fragment>
                                  {checkbox.label}{" "}
                                  <small>({checkbox.count})</small>
                                </React.Fragment>
                              }
                              // CHECKED - CONTROLLED INPUT
                              checked={
                                filterInputs[checkbox.name]
                                  ? filterInputs[checkbox.name].includes(
                                      checkbox.id
                                    )
                                  : ""
                              }
                              onChange={(e) => onInputChange(e)}
                            />
                          </div>
                        )
                      )}
                    {filter.radios && // IF RADIOS
                      filter.radios.map(
                        (
                          radio // LOOP THROUGH INPUTS
                        ) => (
                          <div className="mb-1" key={radio.id}>
                            <Form.Check
                              type="radio"
                              id={radio.id}
                              name={radio.name}
                              label={radio.label}
                              // CHECKED - CONTROLLED INPUT
                              checked={
                                filterInputs[radio.name]
                                  ? filterInputs[radio.name].includes(radio.id)
                                  : ""
                              }
                              onChange={(e) => onRadioChange(e)}
                            />
                          </div>
                        )
                      )}
                    {filter.colours && ( // IF COLOURS
                      <ul className="list-inline mb-0 colours-wrapper">
                        {filter.colours.map(
                          (
                            colour // LOOP THROUGH INPUTS
                          ) => (
                            <li className="list-inline-item" key={colour.id}>
                              <Form.Label
                                className={`btn-colour ${
                                  filterInputs[colour.name] &&
                                  filterInputs[colour.name].some(
                                    (item) => item === colour.id
                                  )
                                    ? "active"
                                    : ""
                                }`}
                                htmlFor={colour.id}
                                style={{ backgroundColor: colour.hex }}
                              />
                              <Form.Control
                                className="input-invisible"
                                type="checkbox"
                                name={colour.name}
                                id={colour.id}
                                // CHECKED - CONTROLLED INPUT
                                checked={
                                  filterInputs[colour.name]
                                    ? filterInputs[colour.name].includes(
                                        colour.id
                                      )
                                    : ""
                                }
                                onChange={(e) => onInputChange(e)}
                              />
                            </li>
                          )
                        )}
                      </ul>
                    )}
                  </Form>
                </React.Fragment>
              )}
              {/* END IF CHECKBOX || RADIO || COLOUR */}
            </div>
          </Collapse>
          {/* END COLLAPSE */}
        </div>
      ))}
    </Col>
  )
}

export default ShopSidebar

const filters = [
  {
    name: "Product Categories",
    items: [
      {
        name: "Jackets",
        count: "120",
        active: true,
        items: [
          {
            name: "Lorem ipsum",
            link: "#",
          },
          {
            name: "Dolor",
            link: "#",
          },
          {
            name: "Sit amet",
            link: "#",
          },
          {
            name: "Donec vitae",
            link: "#",
          },
        ],
      },
      {
        name: "Jeans & chinos",
        count: "55",

        items: [
          {
            name: "Lorem ipsum",
            link: "#",
          },
          {
            name: "Dolor",
            link: "#",
          },
          {
            name: "Sit amet",
            link: "#",
          },
          {
            name: "Donec vitae",
            link: "#",
          },
        ],
      },
      {
        name: "Accessories",
        count: "80",
        items: [
          {
            name: "Sit amet",
            link: "#",
          },
          {
            name: "Donec vitae",
            link: "#",
          },
          {
            name: "Lorem ipsum",
            link: "#",
          },
          {
            name: "Dolor",
            link: "#",
          },
        ],
      },
    ],
  },
  {
    name: "Filter by price",
    subtitle: "Price",
    component: <PriceSlider />,
  },
  {
    name: "Filter by brand",
    subtitle: "Brands",
    checkboxes: [
      {
        name: "clothes-brand",
        id: "brand0",
        count: "18",
        label: "Calvin Klein",
      },
      {
        name: "clothes-brand",
        id: "brand1",
        count: "30",
        label: "Levi Strauss",
      },
      {
        name: "clothes-brand",
        id: "brand2",
        count: "120",
        label: "Hugo Boss",
      },
      {
        name: "clothes-brand",
        id: "brand3",
        count: "70",
        label: "Tomi Hilfiger",
      },
      {
        name: "clothes-brand",
        id: "brand4",
        count: "110",
        label: "Tom Ford",
      },
    ],
  },
  {
    name: "Filter by size",
    subtitle: "Size",
    radios: [
      {
        name: "size",
        id: "size0",
        label: "Small",
      },
      {
        name: "size",
        id: "size1",
        label: "Medium",
      },
      {
        name: "size",
        id: "size2",
        label: "Large",
      },
      {
        name: "size",
        id: "size3",
        label: "X-large",
      },
    ],
  },
  {
    name: "Filter by colour",
    subtitle: "Colour",
    colours: [
      {
        name: "colour",
        id: "colour_sidebar_Blue",
        hex: "#668cb9",
      },
      {
        name: "colour",
        id: "colour_sidebar_White",
        hex: "#fff",
      },
      {
        name: "colour",
        id: "colour_sidebar_Violet",
        hex: "#8b6ea4",
      },
      {
        name: "colour",
        id: "colour_sidebar_Red",
        hex: "#dd6265",
      },
    ],
  },
]
