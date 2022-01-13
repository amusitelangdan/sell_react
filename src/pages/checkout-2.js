import { Container, Row, Col } from "react-bootstrap"

import Hero from "../components/Hero"
import OrderSummary from "../components/OrderSummary"

import CheckoutNav from "../components/CheckoutNav"
import FormCheckout from "../components/FormCheckout"

export async function getStaticProps() {
  return {
    props: {
      nav: {
        light: true,
      },
      title: "Checkout - Step 2",
    },
  }
}

export default function Checkout2() {
  return (
    <>
      <Hero
        title="Checkout"
        breadcrumbs={[
          {
            name: "Home",
            link: "/",
          },
          {
            name: "Checkout",
            active: true,
          },
        ]}
        content='<p class="lead text-muted">Choose your delivery method.</p>'
      />

      {/* Checkout*/}
      <Container>
        <Row>
          <Col lg="8">
            <CheckoutNav activeStep={2} />

            <FormCheckout
              step={2}
              prev={["Back to the addresses", "/checkout-1"]}
              next={["Choose payment method", "/checkout-3"]}
            />
          </Col>
          <Col lg="4">
            <OrderSummary />
          </Col>
        </Row>
      </Container>
    </>
  )
}
