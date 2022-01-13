import React from "react"
import { Row, Col } from "react-bootstrap"
import {
  faAddressBook,
  faAddressCard,
  faAdjust,
  faAlignCenter,
  faAlignJustify,
  faAlignLeft,
  faAlignRight,
  faAllergies,
  faAmbulance,
  faAmericanSignLanguageInterpreting,
  faAnchor,
  faAngleDoubleDown,
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faAngleDoubleUp,
  faAngleDown,
  faAngleLeft,
  faAngleRight,
  faAngleUp,
  faArchive,
  faArrowAltCircleDown,
} from "@fortawesome/free-solid-svg-icons"
import {
  faAddressBook as farAddressBook,
  faAddressCard as farAddressCard,
  faArrowAltCircleDown as farArrowAltCircleDown,
} from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const Icons = () => {
  const icons = [
    faAddressBook,
    farAddressBook,
    faAddressCard,
    farAddressCard,
    faAdjust,
    faAlignCenter,
    faAlignJustify,
    faAlignLeft,
    faAlignRight,
    faAllergies,
    faAmbulance,
    faAmericanSignLanguageInterpreting,
    faAnchor,
    faAngleDoubleDown,
    faAngleDoubleLeft,
    faAngleDoubleRight,
    faAngleDoubleUp,
    faAngleDown,
    faAngleLeft,
    faAngleRight,
    faAngleUp,
    faArchive,
    faArrowAltCircleDown,
    farArrowAltCircleDown,
  ]
  return (
    <div id="icons" className="docs-item element">
      <h5 className="text-uppercase mb-4">Icons</h5>
      <div className="docs-desc">
        <p className="lead">
          This theme comes with two icon packs and includes icon component for
          simple icon management.
        </p>
      </div>

      <div className="docs-desc mt-5">
        <p className="lead">
          <strong>70+ Premium E-commerce SVG icons</strong>
        </p>
        <p className="text-muted text-large">
          For a complete icon reference, see{" "}
          <a href="https://demo.bootstrapious.com/varkala/1-2/icons/demo.html">
            here
          </a>
          .
        </p>
      </div>
      <div className="mt-5">
        <Row>
          {iconsEcommerce.map((iconItem) => (
            <Col
              key={iconItem}
              xs="3"
              md="2"
              className="d-flex justify-content-center"
            >
              <svg className="svg-icon w-3rem h-3rem mb-5 svg-icon-light text-dark">
                <use xlinkHref={`/icons/orion-svg-sprite.svg#${iconItem}`} />
              </svg>
            </Col>
          ))}
        </Row>
      </div>
      <div className="docs-desc mt-5">
        <p className="lead">
          <strong>
            Vector icons and social logos on your website with Font Awesome, the
            web’s most popular icon set and toolkit.
          </strong>
        </p>
        <p className="text-muted text-large">
          These icons are mostly used in buttons or for social network links.
          For a complete icon reference, see{" "}
          <a href="https://fontawesome.com/icons?d=gallery">here</a>.
        </p>
      </div>
      <div className="mt-5">
        <ul className="list-unstyled">
          {icons.map((icon, index) => (
            <li key={index} className="list-inline-item h5 me-3">
              <FontAwesomeIcon icon={icon} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Icons

const iconsEcommerce = [
  "checkout-cart-1",
  "basket-1",
  "paper-bag-1",
  "map-marker-1",
  "smartphone-1",
  "dollar-sign-1",
  "open-box-1",
  "on-sale-sticker-1",
  "pay-1",
  "giftbox-1",
  "store-1",
  "pay-by-card-1",
]
