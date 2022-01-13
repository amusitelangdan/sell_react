import React from "react"
import { Nav } from "react-bootstrap"
import Link from "next/link"

import steps from "../../data/tab.json"

const MyTab = ({ activeStep = 1, onClick = () => {} }) => {
  return (
    <Nav variant="pills" className="custom-nav mb-5">
      {steps.map((step) => {
        const active = step.id === activeStep
        if (step.nav === true)
          return (
            <Nav.Item
              key={step.id}
              className="w-25"
              onClick={() => onClick(step.id)}
              style={{ cursor: "pointer" }}
            >
              <Nav.Link
                className={`text-sm ${step.id > activeStep ? "disabled " : ""}`}
                active={active}
              >
                {step.name}
              </Nav.Link>
            </Nav.Item>
          )
      })}
    </Nav>
  )
}

export default MyTab
