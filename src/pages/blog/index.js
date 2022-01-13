import { Container, Row, Col, Pagination } from "react-bootstrap"

import Link from "next/link"
import Image from "../../components/CustomImage"

import Post from "../../components/Post"
import data from "../../data/blog.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronLeft,
  faChevronRight,
  faLongArrowAltRight,
} from "@fortawesome/free-solid-svg-icons"

export async function getStaticProps() {
  return {
    props: {
      nav: {
        light: true,
      },
      title: "Blog",
    },
  }
}

const Index = (props) => {
  const featuredPost = data.posts[0]

  return (
    <>
      {featuredPost && (
        <section className="position-relative py-6 mb-4">
          {featuredPost.img && (
            <Image
              src={featuredPost.img}
              className="bg-image"
              alt={featuredPost.title}
              layout="fill"
            />
          )}
          <Container className="position-relative">
            <Row>
              <Col lg="6">
                <div className="bg-white p-5">
                  <strong className="text-uppercase text-muted d-inline-block mb-2 text-sm">
                    {featuredPost.subtitle}
                  </strong>
                  <h2 className="mb-3">{featuredPost.title}</h2>
                  <p className="text-muted">{featuredPost.content}</p>
                  <Link href="/blog/[slug]" as={`/blog/${featuredPost.slug}`}>
                    <a className="btn btn-link text-dark p-0">
                      Continue reading{" "}
                      <FontAwesomeIcon icon={faLongArrowAltRight} />
                    </a>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      )}

      <section>
        <Container>
          <Row>
            {data.posts &&
              data.posts.map((post, index) => {
                // the first post is featured
                if (index >= 1) {
                  return (
                    <Col xs="6" lg="4" key={index}>
                      <Post data={post} />
                    </Col>
                  )
                }
              })}
          </Row>

          <Pagination
            aria-label="Blog pagination"
            className="d-flex justify-content-between mb-5"
          >
            <Pagination.Item>
              <FontAwesomeIcon icon={faChevronLeft} className="me-2" />
              Older posts
            </Pagination.Item>
            <Pagination.Item className="disabled" href="#">
              Newer posts
              <FontAwesomeIcon icon={faChevronRight} className="ms-2" />
            </Pagination.Item>
          </Pagination>
        </Container>
      </section>
    </>
  )
}

export default Index
