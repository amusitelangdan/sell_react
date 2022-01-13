import { Row, Col, Form, Button } from "react-bootstrap"

import Link from "next/link"

import SelectBox from "./SelectBox"
import Stars from "./Stars"
import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-regular-svg-icons"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"

export default function DetailMain({ product }) {
  const [productType, setProductType] = useState(false)
  return (
    <>
      <h1 className="mb-4">{product.name}</h1>
      <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-sm-between mb-4">
        <ul className="list-inline mb-2 mb-sm-0">
          <li className="list-inline-item h4 fw-light mb-0">
            ${product.price.toFixed(2)}
          </li>

          <li className="list-inline-item text-muted fw-light">
            <del>${product.priceBefore.toFixed(2)}</del>
          </li>
        </ul>
        <div className="d-flex align-items-center">
          <Stars
            stars={4}
            secondColor="gray-300"
            starClass="me-1"
            className="me-2"
          />

          <span className="text-muted text-uppercase text-sm mt-1">
            {product.reviewscount} reviews
          </span>
        </div>
      </div>
      <p className="mb-4 text-muted">{product.description.short}</p>

      <Form>
        <Row>
          <Col sm="6" lg="12" xl="6" className="detail-option mb-4">
            <h6 className="detail-option-heading">
              Size <span>(required)</span>
            </h6>
            <SelectBox options={product.sizes} id={"detailSelect"} />
          </Col>
          <Col sm="6" lg="12" xl="6" className="detail-option mb-4">
            <h6 className="detail-option-heading">
              Type <span>(required)</span>
            </h6>
            {product.types.map((type) => (
              <Button
                key={type.value}
                as="label"
                variant="outline-secondary"
                size="sm"
                className={`detail-option-btn-label me-2 ${
                  productType === type.id ? "active" : ""
                }`}
                htmlFor={type.id}
                onClick={() => {
                  setProductType(type.id)
                }}
              >
                {type.label}
                <Form.Control
                  className="input-invisible"
                  type="radio"
                  name="material"
                  id={type.id}
                  required
                />
              </Button>
            ))}
          </Col>
          <Col xs="12" lg="6" className="detail-option mb-5">
            <label className="detail-option-heading fw-bold">
              Items <span>(required)</span>
            </label>
            <Form.Control
              className="detail-quantity"
              name="items"
              type="number"
              defaultValue={1}
            />
          </Col>
        </Row>

        <ul className="list-inline mb-5">
          <li className="list-inline-item">
            <Button variant="dark" size="lg" className="mb-1" type="submit">
              <FontAwesomeIcon icon={faShoppingCart} className="me-2" />
              Add to Cart
            </Button>
          </li>
          <li className="list-inline-item">
            <Button variant="outline-secondary" className="mb-1" href="#">
              <FontAwesomeIcon icon={faHeart} className="me-2" />
              Add to wishlist
            </Button>
          </li>
        </ul>

        <ul className="list-unstyled">
          <li>
            <strong>Category:&nbsp;</strong>
            <a className="text-muted" href="#">
              {product.category}
            </a>
          </li>
          <li>
            <strong>Tags:&nbsp;</strong>
            {product.tags.map((tag, index) => (
              <React.Fragment key={tag.name}>
                <Link href={tag.link}>
                  <a className="text-muted">{tag.name}</a>
                </Link>
                {index < product.tags.length - 1 ? ",\u00A0" : ""}
              </React.Fragment>
            ))}
          </li>
        </ul>
      </Form>
    </>
  )
}
