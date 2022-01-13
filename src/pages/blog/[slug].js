import React, { useState } from "react"

import { Container, Row, Col, Button, Collapse, Form } from "react-bootstrap"
import Link from "next/link"
import Image from "../../components/CustomImage"

import Hero from "../../components/Hero"

import blog from "../../data/blog.json"
import postDummyData from "../../data/post.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReply } from "@fortawesome/free-solid-svg-icons"
import { faClock, faComment } from "@fortawesome/free-regular-svg-icons"

export function getAllPostIds() {
  return blog.posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }))
}

export function getPostData(slug) {
  for (var i = 0; i < blog.posts.length; i++) {
    if (blog.posts[i].slug == slug) {
      return blog.posts[i]
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: getAllPostIds(),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const postData = getPostData(params.slug)
  return {
    props: {
      nav: {
        light: true,
      },
      title: postData.title,
      postData,
    },
  }
}
export default function BlogPost({ postData }) {
  const [formCollapse, setFormCollapse] = useState(false)

  const breadcrumbs = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Blog",
      link: "/blog",
    },
    {
      name: postData.title,
      active: true,
    },
  ]

  return (
    <>
      <Hero title={postData.title} breadcrumbs={breadcrumbs}>
        <Row>
          <Col lg="10" xl="8" className="mx-auto">
            <div className="py-3 mb-5 text-muted text-center fw-light d-flex align-items-center justify-content-center">
              {postDummyData.authorLink && (
                <Link href={postDummyData.authorLink}>
                  <a className="me-2">
                    <Image
                      src={postDummyData.authorAvatar}
                      alt=""
                      className="w-2rem rounded-circle"
                      width={64}
                      height={64}
                    />
                  </a>
                </Link>
              )}
              <div>
                Written by&nbsp;
                {postDummyData.authorLink && (
                  <Link href={postDummyData.authorLink}>
                    <a className="text-muted fw-bold">{postDummyData.author}</a>
                  </Link>
                )}
                <span className="mx-1">|</span>{" "}
                {postDummyData.date && postDummyData.date} in&nbsp;
                {postDummyData.categoryLink && (
                  <Link href={postDummyData.categoryLink}>
                    <a className="fw-bold">{postDummyData.category}</a>
                  </Link>
                )}
                <span className="mx-1">|</span>
                <a href="#" className="text-muted">
                  {postDummyData.comments && postDummyData.comments.length}{" "}
                  comments{" "}
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xl="10" className="mx-auto">
            <Image
              src="/img/photo/kyle-loftus-589740-unsplash.jpg"
              alt=""
              className="img-fluid mb-5"
              width={1000}
              height={667}
              sizes="100vw"
            />
          </Col>
        </Row>
        <Row>
          <Col lg="10" xl="8" className="mx-auto">
            <p
              className="lead mb-5 text-start"
              dangerouslySetInnerHTML={{ __html: postDummyData.excerpt }}
            />
          </Col>
        </Row>
      </Hero>

      <section>
        <Container>
          <Row>
            <Col xl="8" lg="10" className="mx-auto">
              <div className="text-content text-lg">
                <div
                  dangerouslySetInnerHTML={{ __html: postDummyData.content }}
                />
                <hr />
              </div>
              {postDummyData.comments && (
                <div className="mt-5">
                  <h6 className="text-uppercase text-muted mb-4">
                    {postDummyData.comments.length} comments
                  </h6>
                  {postDummyData.comments.map((comment, index) => (
                    <div key={index} className="mb-4 d-flex">
                      <div className="me-4 flex-shrink-0">
                        <Image
                          src={comment.avatar}
                          alt={comment.title}
                          className="img-fluid rounded-circle"
                          style={{ maxWidth: "100px" }}
                          width={100}
                          height={100}
                        />
                      </div>
                      <div>
                        <h5>{comment.title}</h5>
                        <p className="text-uppercase text-sm text-muted">
                          <FontAwesomeIcon icon={faClock} /> {comment.date}
                        </p>
                        <p className="text-muted">{comment.content}</p>
                        <p>
                          <Button
                            variant="link"
                            href="#"
                            className="text-primary"
                          >
                            <FontAwesomeIcon icon={faReply} /> Reply
                          </Button>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <div className="mb-5">
                <Button
                  type="button"
                  aria-expanded={formCollapse}
                  aria-controls="leaveComment"
                  variant="outline-dark"
                  onClick={() => setFormCollapse(!formCollapse)}
                >
                  Leave a comment
                </Button>
                <Collapse id="leaveComment" in={formCollapse} className="mt-5">
                  <div>
                    <h5 className="text-uppercase mb-5">Leave a comment</h5>
                    <Form method="post">
                      <Row>
                        <Col md="6">
                          <div className="mb-4">
                            <Form.Label htmlFor="name">
                              Name <span className="required">*</span>
                            </Form.Label>
                            <Form.Control
                              id="name"
                              type="text"
                              className="form-control-underlined"
                            />
                          </div>
                        </Col>
                        <Col md="6">
                          <div className="mb-4">
                            <Form.Label htmlFor="email">
                              Email <span className="required">*</span>
                            </Form.Label>
                            <Form.Control
                              id="email"
                              type="text"
                              className="form-control-underlined"
                            />
                          </div>
                        </Col>
                      </Row>
                      <div className="mb-4">
                        <Form.Label htmlFor="comment">
                          Comment <span className="required">*</span>
                        </Form.Label>
                        <Form.Control
                          id="comment"
                          type="textarea"
                          className="form-control-underlined"
                          rows="4"
                        />
                      </div>
                      <Button type="submit" variant="outline-dark">
                        <FontAwesomeIcon icon={faComment} /> Comment
                      </Button>
                    </Form>
                  </div>
                </Collapse>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
