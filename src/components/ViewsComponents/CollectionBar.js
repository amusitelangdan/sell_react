/*
 * @Author: your name
 * @Date: 2022-01-10 14:24:37
 * @LastEditTime: 2022-01-13 21:51:59
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /sell-react-2-0(1)/src/components/ViewsComponents/CollectionBar.js
 */
import React from "react"
import { Col, Collapse, Nav, Form } from "react-bootstrap"
import Icon from "../Icon"
import ActiveLink from "../ActiveLink"

const CollectionBar = (props) => {
  return (
    <Col
      xl={props.xl ? props.xl : "3"}
      lg={props.lg ? props.lg : "4"}
      className="mb-5"
    >
      <div className="customer-sidebar card border-0">
        <div className="customer-profile">
          <a className="d-inline-block" href="#">
            <img
              className="img-fluid rounded-circle customer-image"
              src={props.avatar ? props.avatar : '/img/photo/kyle-loftus-589739-unsplash-avatar.jpg'}
              alt="Customer Profile Image"
            />
          </a>
          <h5>{props.name ? props.name: 'Julie Lescaut'}</h5>
          <p className="text-muted text-sm mb-0">{props.email ? props.email: '2553023383@qq.com'}</p>
        </div>
        <nav className="list-group customer-nav">
          <ActiveLink activeClassName="active" href={`/profile?uid=${props.userid ? props.userid: '123'}`}>
            <a className="list-group-item d-flex justify-content-between align-items-center">
              <span>
                <Icon icon="male-user-1" className=" svg-icon-heavy me-2" />
                Profile
              </span>
            </a>
          </ActiveLink>
          <ActiveLink activeClassName="active" href={`/collection?uid=${props.userid ? props.userid: '123'}`}>
            <a className="list-group-item d-flex justify-content-between align-items-center">
              <span>
                <Icon
                  icon="navigation-map-1"
                  className=" svg-icon-heavy me-2"
                />
                Collection
              </span>
            </a>
          </ActiveLink>
          <ActiveLink activeClassName="active" href="/customer-login">
            <a className="list-group-item d-flex justify-content-between align-items-center">
              <span>
                <Icon icon="exit-1" className=" svg-icon-heavy me-2" />
                Log out
              </span>
            </a>
          </ActiveLink>
        </nav>
      </div>
    </Col>
  )
  //   return (
  //     <Col lg={{ size: 4, order: 1 }} xl="3" className="sidebar collectionBar">
  //       <div className="my-info">
  //         <img className="my-avator" />
  //         <h6 className="text-capitalize">julie lescaut</h6>
  //         <p className="desc">2553023383@qq.com</p>
  //       </div>
  //       <div className="my-btn">
  //         <div className="my-btn-item">
  //           <Icon icon="male-user-1" className="my-user-icon" />
  //           <div className="my-user-text">My Zone</div>
  //         </div>
  //         <div className="my-btn-item">
  //           <Icon icon="male-user-1" className="my-user-icon" />
  //           <div className="my-user-text">My Collection</div>
  //         </div>
  //         <div className="my-btn-item">
  //           <Icon icon="exit-1" className="my-user-icon" />
  //           <div className="my-user-text">Log Out</div>
  //         </div>
  //       </div>
  //     </Col>
  //   )
}

export default CollectionBar
