import { faSave } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Container, Row, Col, Form, Button } from "react-bootstrap"

import CustomerSidebar from "../components/CustomerSidebar"
import Hero from "../components/Hero"

import data from "../data/customer-account.json"

export async function getStaticProps() {
  return {
    props: {
      nav: {
        light: true,
      },
      title: "Customer - Account",
      loggedUser: true,
    },
  }
}

export default function CustomerAccount() {
  return (
    <>
      <Hero
        title={data.subtitle}
        breadcrumbs={data.breadcrumbs}
        content={data.content}
      />

      <section>
        <Container>
          <Row>
            <Col lg="8" xl="9">
              <div className="block mb-5">
                <div className="block-header">
                  <strong className="text-uppercase">
                    Change your password
                  </strong>
                </div>
                <div className="block-body">
                  <Form>
                    <Row>
                      <Col sm="6">
                        <div className="mb-4">
                          <Form.Label
                            className="form-label"
                            htmlFor="password_old"
                          >
                            Old password
                          </Form.Label>
                          <Form.Control id="password_old" type="password" />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm="6">
                        <div className="mb-4">
                          <Form.Label
                            className="form-label"
                            htmlFor="password_1"
                          >
                            New password
                          </Form.Label>
                          <Form.Control id="password_1" type="password" />
                        </div>
                      </Col>
                      <Col sm="6">
                        <div className="mb-4">
                          <Form.Label
                            className="form-label"
                            htmlFor="password_2"
                          >
                            Retype new password
                          </Form.Label>
                          <Form.Control id="password_2" type="password" />
                        </div>
                      </Col>
                    </Row>
                    <div className="mt-4 text-center">
                      <Button variant="dark" type="submit">
                        <FontAwesomeIcon icon={faSave} className="me-2" />
                        Change password
                      </Button>
                    </div>
                  </Form>
                </div>
              </div>
              <div className="block mb-5">
                <div className="block-header">
                  <strong className="text-uppercase">Personal details</strong>
                </div>
                <div className="block-body">
                  <Form>
                    <Row>
                      <Col sm="6">
                        <div className="mb-4">
                          <Form.Label
                            className="form-label"
                            htmlFor="firstname"
                          >
                            Firstname
                          </Form.Label>
                          <Form.Control id="firstname" type="text" />
                        </div>
                      </Col>
                      <Col sm="6">
                        <div className="mb-4">
                          <Form.Label className="form-label" htmlFor="lastname">
                            Lastname
                          </Form.Label>
                          <Form.Control id="lastname" type="text" />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm="6">
                        <div className="mb-4">
                          <Form.Label className="form-label" htmlFor="company">
                            Company
                          </Form.Label>
                          <Form.Control id="company" type="text" />
                        </div>
                      </Col>
                      <Col sm="6">
                        <div className="mb-4">
                          <Form.Label className="form-label" htmlFor="street">
                            Street
                          </Form.Label>
                          <Form.Control id="street" type="text" />
                        </div>
                      </Col>
                    </Row>

                    <Row>
                      <Col sm="6" md="3">
                        <div className="mb-4">
                          <Form.Label className="form-label" htmlFor="city">
                            Company
                          </Form.Label>
                          <Form.Control id="city" type="text" />
                        </div>
                      </Col>
                      <Col sm="6" md="3">
                        <div className="mb-4">
                          <Form.Label className="form-label" htmlFor="zip">
                            ZIP
                          </Form.Label>
                          <Form.Control id="zip" type="text" />
                        </div>
                      </Col>
                      <Col sm="6" md="3">
                        <div className="mb-4">
                          <Form.Label className="form-label" htmlFor="state">
                            State
                          </Form.Label>
                          <select className="form-control" id="state" />
                        </div>
                      </Col>
                      <Col sm="6" md="3">
                        <div className="mb-4">
                          <Form.Label className="form-label" htmlFor="country">
                            Country
                          </Form.Label>
                          <select className="form-control" id="country" />
                        </div>
                      </Col>
                      <Col sm="6">
                        <div className="mb-4">
                          <Form.Label className="form-label" htmlFor="phone">
                            Telephone
                          </Form.Label>
                          <Form.Control id="phone" type="text" />
                        </div>
                      </Col>
                      <Col sm="6">
                        <div className="mb-4">
                          <Form.Label className="form-label" htmlFor="email">
                            Email
                          </Form.Label>
                          <Form.Control id="email" type="text" />
                        </div>
                      </Col>
                    </Row>
                    <div className="text-center mt-4">
                      <Button variant="outline-dark" type="submit">
                        <FontAwesomeIcon icon={faSave} className="me-2" />
                        Save changes
                      </Button>
                    </div>
                  </Form>
                </div>
              </div>
            </Col>

            <CustomerSidebar />
          </Row>
        </Container>
      </section>
    </>
  )
}
