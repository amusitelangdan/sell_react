import { faSave } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import {
  UpdatePsd,
  UpdateUser,
  GetImage,
  GetLocal,
  GetUserInfo,
} from "../api/api"

// import CustomerSidebar from "../components/CustomerSidebar"
import CollectionBar from "./../components/ViewsComponents/CollectionBar"
import Hero from "../components/Hero"

import data from "../data/profile.json"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { set } from "nprogress"
import { notification } from "antd"

export async function getStaticProps() {
  return {
    props: {
      nav: {
        light: true,
      },
      title: "My Profile",
      loggedUser: true,
    },
  }
}

// export async function getServerSideProps(context) {
//   if (context.query.uid) {
//     const json = await GetUser(context.query.uid)
//     console.log(json)
//     return {
//       props: {
//         avatar: json.avatar,
//         email: json.email,
//         msg: json.msg,
//         name: json.name,
//         userid: context.query.uid,
//         loggedUser: true,
//         loggedUser_avatar: GetImage(json.avatar)
//       },
//     }
//   } else {
//     return {
//       props: {
//         avatar: "",
//         email: "",
//         msg: "login",
//         name: "",
//         userid: "",
//       },
//     }
//   }
// }

export default function Profile(props) {
  const router = useRouter()
  const [_email, setEmail] = useState(props.userEmail)
  const [_name, setname] = useState(props.userName)
  const [_avatar, setavatar] = useState(props.userAvatar)

  const [oldPsd, setOldPsd] = useState("")
  const [newPsd, setNewPsd] = useState("")
  const [enterPsd, setEnterPsd] = useState("")
  const [emailI, setEmailI] = useState("")
  const [nameI, setNameI] = useState("")
  const [_userid, setUserid] = useState("")
  const [_userInfo, setUserInfo] = useState({})

  const onChangePsd = async (userrid , _oldPsd, _newPsd, _enterPsd) => {
    if (_oldPsd === "" || _newPsd === "" || _enterPsd === "") {
      return notification.error({
        message: " Not Empty",
        placement: "bottomRight",
      })
    }
    if (_oldPsd === _newPsd) {
      return notification.error({
        message: " Password Not Success",
        placement: "bottomRight",
      })
    }

    if (_enterPsd !== _newPsd) {
      return notification.error({
        message: "Enter PassWord Success",
        placement: "bottomRight",
      })
    }
    const res = await UpdatePsd(userrid, _oldPsd, _newPsd)
    console.log(res);
    if (res.code === '404') {
      return notification.error({
        message: res.data.msg,
        placement: "bottomRight",
      })
    }
    if (res.code === '200') {
      notification.success({
        message: res.data.msg,
        placement: "bottomRight",
      })
      localStorage.removeItem('user');
      router.replace('/customer-login')
    }
    // alert(res.msg)
    // router.replace(`/profile?uid=${props.userid}`)
    setOldPsd("")
    setNewPsd("")
    setEnterPsd("")
  }

  const onChangeUser = async (names, emails) => {
    if (names === "" && emails === "") {
      return notification.error({
        message: "No Empty",
        placement: "bottomRight",
      })
    }
    const res = await UpdateUser(props.userid, emails, names)
    // router.replace(`/profile?uid=${props.userid}`)
    setNameI("")
    setEmailI("")
  }

  useEffect(() => {
    if (GetLocal("user")) {
      getMyUser(GetLocal("user"))
    }
  }, [])

  const getMyUser = async (id) => {
    const res = await GetUserInfo(id)
    if (res.code === "100") {
      localStorage.removeItem("user")
      return router.replace("/customer-login")
    }

    if (res.code === "404") {
      return notification.error({
        message: res.data.msg,
        placement: "bottomRight",
      })
    }
    setUserInfo(res.data)
    setUserid(id)
  }

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
                          <Form.Control
                            id="password_old"
                            type="password"
                            value={oldPsd}
                            onChange={(e) => setOldPsd(e.target.value)}
                          />
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
                          <Form.Control
                            id="password_1"
                            type="password"
                            value={newPsd}
                            onChange={(e) => setNewPsd(e.target.value)}
                          />
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
                          <Form.Control
                            id="password_2"
                            type="password"
                            value={enterPsd}
                            onChange={(e) => setEnterPsd(e.target.value)}
                          />
                        </div>
                      </Col>
                    </Row>
                    <div className="mt-4 text-center">
                      <Button
                        variant="dark"
                        onClick={() => onChangePsd(_userid, oldPsd, newPsd, enterPsd)}
                      >
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
                          <Form.Label className="form-label" htmlFor="email">
                            Email
                          </Form.Label>
                          <Form.Control
                            id="email"
                            type="text"
                            value={emailI}
                            onChange={(e) => setEmailI(e.target.value)}
                          />
                        </div>
                      </Col>
                    </Row>

                    <Row>
                      <Col sm="6">
                        <div className="mb-4">
                          <Form.Label className="form-label" htmlFor="name">
                            name
                          </Form.Label>
                          <Form.Control
                            id="name"
                            type="text"
                            value={nameI}
                            onChange={(e) => setNameI(e.target.value)}
                          />
                        </div>
                      </Col>
                    </Row>
                    <div className="text-center mt-4">
                      <Button
                        variant="outline-dark"
                        onClick={() => onChangeUser(emailI, nameI)}
                      >
                        <FontAwesomeIcon icon={faSave} className="me-2" />
                        Save changes
                      </Button>
                    </div>
                  </Form>
                </div>
              </div>
            </Col>

            {JSON.stringify(_userInfo) !== "{}" ? (
              <CollectionBar
                name={_userInfo.name}
                email={_userInfo.email}
                avatar={GetImage(_userInfo.avatar)}
                userid={_userid}
              />
            ) : (
              <></>
            )}
          </Row>
        </Container>
      </section>
    </>
  )
}
