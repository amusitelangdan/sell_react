import { Row, Col, Form, Button } from "react-bootstrap"

const ContactForm = (props) => {
  return (
    <Form {...props}>
      <div className="controls">
        <div className="mb-4">
          <Form.Label htmlFor="name">Your name *</Form.Label>
          <Form.Control
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-4">
          <Form.Label htmlFor="email">Your email *</Form.Label>
          <Form.Control
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <Form.Label htmlFor="message">Your message for us *</Form.Label>
          <Form.Control
            type="textarea"
            rows="4"
            name="message"
            id="message"
            placeholder="Enter your message"
            required
          />
        </div>
        <Button type="submit" variant="outline-dark">
          Send message
        </Button>
      </div>
    </Form>
  )
}

export default ContactForm
