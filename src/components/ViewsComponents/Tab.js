/*
 * @Author: your name
 * @Date: 2022-01-10 16:07:26
 * @LastEditTime: 2022-01-15 21:25:04
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /sell-react-2-0(1)/src/components/ViewsComponents/Tab.js
 */
import React from "react"
import { Nav } from "react-bootstrap"
import Link from "next/link"

import steps from "../../data/tab.json"

const MyTab = ({ activeStep = 1, onClick = () => {}, cr = 0, co = 0, fa = 0 }) => {
  return (
    <Nav variant="pills" className="custom-nav mb-5">
      {steps.map((step) => {
        const active = step.id === activeStep
        if (step.nav === true)
          return (
            <Nav.Item
              key={step.id}
              className="w-25 accatrrr"
              onClick={() => onClick(step.id)}
              style={{ cursor: "pointer", position: 'relative' }}
            >
              <Nav.Link
                className={`text-sm ${step.id > activeStep ? "disabled " : ""}`}
                active={active}
              >
                {step.name}
                <div className="accaaaaa">
                  {
                    step.id === 1 ? fa : step.id === 2 ? cr : step.id === 0 ? co : 0
                  }
                </div>
              </Nav.Link>
            </Nav.Item>
          )
      })}
    </Nav>
  )
}

export default MyTab
