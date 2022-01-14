import { Container, Row, Col, Form, Button } from "react-bootstrap"

import Link from "next/link"

import Hero from "../components/Hero"
import Icon from "../components/Icon"

import data from "../data/customer-login.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons"
import { faUser } from "@fortawesome/free-regular-svg-icons"
import { useState } from "react"
import { PostLogin, PostRegister } from "../api/api"
import { useRouter } from "next/router"
import { notification } from "antd"

export async function getStaticProps() {
  return {
    props: {
      nav: {
        light: true,
      },
      title: "Customer - Login",
    },
  }
}

export default function CustomerLogin() {
  const [_email, setEmail] = useState("")
  const [_password, setPassword] = useState("")
  const [_imageSrc, setImageSrc] = useState("")
  const router = useRouter()
  const onLogin = (email, psd) => {
    postLogin(email, psd)
  }

  const postLogin = async (email, psd) => {
    if (email === '') {
      return notification.error({
        message: 'Email not Empty',
        placement: 'bottomRight',
      })
    }

    if (psd === '') {
      return notification.error({
        message: 'Password Not Empty',
        placement: 'bottomRight',
      })
    }
    const json = await PostLogin(email, psd)
    if (json.msg) {
      notification.error({
        message: json.msg,
        placement: 'bottomRight',
      })
    } else {
      router.push(`/collection?uid=${json.userid}`)
    }
  }

  const postRegister = async (src, name, email, password, address) => {
    const json = await PostRegister(src, name, email, password, address)
    console.log(json)
    router.push(`/collection?uid=${json.userid}`)
  }


  const [_name, setName] = useState('');
  const [_eml, setEml] = useState('');
  const [_psd, setPsd] = useState('');
  const [_address, setAddress] = useState('');

  const onRegister = (src, name, email, password, address) => {
    if (src === '') {
      return notification.error({
        message: 'Avatar Is Not Empty',
        placement: 'bottomRight',
      })
    }

    if (name === '') {
      return notification.error({
        message: 'Name Not Empty',
        placement: 'bottomRight',
      })
    }

    if (email === '') {
      return notification.error({
        message: 'Email Not Empty',
        placement: 'bottomRight',
      })
    }

    if (password === '') {
      return notification.error({
        message: 'Password Not Empty',
        placement: 'bottomRight',
      })
    }

    if (address === '') {
      return notification.error({
        message: 'Opensea Address Not Empty',
        placement: 'bottomRight',
      })
    }

    postRegister(src, name, email, password, address)
  }

  const onGetImage = (e) => {
    const reader = new FileReader()
    // 传入一个参数对象即可得到基于该参数对象的文本内容
    reader.readAsDataURL(e.target.files[0])
    reader.onload = function (e) {
      // target.result 该属性表示目标对象的DataURL
      setImageSrc(e.target.result)
    }
  }

  return (
    <>
      <Hero
        title={data.subtitle}
        breadcrumbs={data.breadcrumbs}
        content={data.content}
      />

      <Container>
        <Row className="justify-content-center">
          <Col lg="5">
            <div className="block">
              <div className="block-header">
                <h6 className="text-uppercase mb-0">Login</h6>
              </div>
              <div className="block-body">
                <h6 className="text-uppercase mb-0">Already have account</h6>
                <hr />
                <Form>
                  <div className="mb-4">
                    <Form.Label htmlFor="email_1">Email</Form.Label>
                    <Form.Control
                      id="email_1"
                      type="text"
                      value={_email}
                      onChange={(e) => {
                        setEmail(e.target.value)
                      }}
                    />
                  </div>
                  <div className="mb-4">
                    <Form.Label htmlFor="password">Password</Form.Label>
                    <Form.Control
                      id="password"
                      type="password"
                      value={_password}
                      onChange={(e) => {
                        setPassword(e.target.value)
                      }}
                    />
                  </div>
                  <div className="mb-4">
                    <Button
                      variant="outline-dark"
                      onClick={() => onLogin(_email, _password)}
                    >
                      <FontAwesomeIcon icon={faSignInAlt} className="me-2" />{" "}
                      Log in
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </Col>
          <Col lg="5">
            <div className="block">
              <div className="block-header">
                <h6 className="text-uppercase mb-0">New account</h6>
              </div>
              <div className="block-body">
                <h6 className="text-uppercase mb-0">REGISTER YOUR ACCOUNT</h6>
                <hr />
                <Form>
                  <div className="mb-4">
                    <Form.Label htmlFor="name">UPLOAD AVATAR</Form.Label>
                    {/* <Form.Fil */}
                    {_imageSrc ? (
                      <div
                        className="form-control upload-box"
                        style={{ border: "none" }}
                      >
                        <div
                          className="close-icon-box"
                          onClick={() => {
                            setImageSrc("")
                          }}
                        >
                          <Icon icon="close-1" className="close-icon" />
                        </div>

                        <img src={_imageSrc} className="upload-avatar-img" />
                      </div>
                    ) : (
                      <Form.Control
                        type="file"
                        id="file"
                        placeholder="PLEASE UPLOAD AVATAR"
                        onChange={(e) => onGetImage(e)}
                      />
                    )}
                    {/* <Form.Control id="name" type="text" /> */}
                  </div>
                  <div className="mb-4">
                    <Form.Label htmlFor="name">Name</Form.Label>
                    <Form.Control id="name" type="text" value={_name} onChange={(e) => {
                        setName(e.target.value)
                      }}/>
                  </div>
                  <div className="mb-4">
                    <Form.Label htmlFor="email">Email</Form.Label>
                    <Form.Control id="email" type="text" value={_eml} onChange={(e) => setEml(e.target.value) }/>
                  </div>
                  <div className="mb-4">
                    <Form.Label htmlFor="passwordRegister">Password</Form.Label>
                    <Form.Control id="passwordRegister" type="password" value={_psd} onChange={(e) => setPsd(e.target.value) } />
                  </div>
                  <div className="mb-4">
                    <Form.Label htmlFor="email">OPENSEA ADDRESS</Form.Label>
                    <Form.Control id="address" type="text" value={_address} onChange={(e) => setAddress(e.target.value)} />
                  </div>
                  <div className="mb-4">
                    <Button
                      variant="outline-dark"
                      onClick={() =>
                        onRegister(_imageSrc, _name, _eml, _psd, _address)
                      }
                    >
                      <FontAwesomeIcon icon={faUser} className="me-2" />
                      Register
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}
