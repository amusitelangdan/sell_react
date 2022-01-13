import { Container, Button } from "react-bootstrap"
import Link from "next/link"
import { Parallax, Background } from "react-parallax"
import Image from "../components/CustomImage"

export async function getStaticProps() {
  return {
    props: {
      nav: {
        dark: true,
        classes: "bg-hover-white navbar-hover-light",
        color: "transparent",
        sticky: false,
      },
      headerAbsolute: true,
      hideTopbar: true,
      title: "Homepage",
    },
  }
}

export default function Home4() {
  return (
    <>
      <Parallax strength={500}>
        <Background className="vw-100 vh-100">
          <Image
            src="/img/photo/dmitriy-ilkevich-437760-unsplash-parallax-react.jpg"
            alt="Autumn vibes"
            layout="fill"
            className="bg-image"
            loading="eager"
          />
        </Background>
        <div className="vh-100 light-overlay light-overlay-lg-0 d-flex align-items-center text-dark text-center">
          <Container>
            <div className="py-5 overflow-hidden overlay-content mx-auto">
              <h5 className="text-uppercase text-gray-900 mb-4 letter-spacing-5">
                Just arrived
              </h5>
              <h1 className="mb-5 display-2 fw-bold text-uppercase text-gray-900">
                Autumn vibes
              </h1>
              <p>
                <Link href="/category" passHref>
                  <Button variant="outline-dark">See look book</Button>
                </Link>
              </p>
            </div>
          </Container>
        </div>
      </Parallax>
      <Parallax strength={500}>
        <Background className="vw-100 vh-100">
          <Image
            src="/img/photo/serrah-galos-494279-unsplash-parallax-react.jpg"
            alt="Ethnic sweaters"
            layout="fill"
            className="bg-image"
          />
        </Background>
        <div className="vh-100 light-overlay light-overlay-lg-0 d-flex align-items-center text-dark text-left">
          <Container>
            <div className="py-5 overflow-hidden overlay-content mx-auto">
              <h1 className="mb-3 display-1 fw-bold text-uppercase">
                Ethnic
                <br className="display-lg" />
                sweaters
              </h1>
              <p className="h3 fw-normal mb-5">Trendy. Comfy. Beautiful. </p>
              <p>
                <Link href="/category" passHref>
                  <Button variant="dark">See look book</Button>
                </Link>
              </p>
            </div>
          </Container>
        </div>
      </Parallax>
      <Parallax strength={500}>
        <Background className="vw-100 vh-100">
          <Image
            src="/img/photo/kyle-loftus-592041-unsplash-parallax.jpg"
            alt="Our favourites"
            layout="fill"
            className="bg-image"
          />
        </Background>
        <div className="vh-100 light-overlay light-overlay-lg-0 d-flex align-items-center text-dark text-start text-md-end">
          <Container>
            <div className="py-5 overflow-hidden overlay-content mx-auto">
              <h5 className="text-uppercase text-dark fw-normal mb-4 letter-spacing-5">
                Our favourites
              </h5>
              <h1 className="mb-3 display-3 fw-bold text-uppercase">Shirts</h1>
              <p className="h3 fw-normal mb-5">
                Vestibulum tortor quam.
                <br />
                Feugiat vitae, ultricies eget.
              </p>
              <p>
                <Link href="/category" passHref>
                  <Button variant="outline-dark">See look book</Button>
                </Link>
              </p>
            </div>
          </Container>
        </div>
      </Parallax>
      <Parallax
        bgImage="/img/photo/serrah-galos-494312-unsplash-parallax.jpg"
        strength={500}
      >
        <Background className="vw-100 vh-100">
          <Image
            src="/img/photo/serrah-galos-494312-unsplash-parallax.jpg"
            alt=" Men's collection"
            layout="fill"
            className="bg-image"
          />
        </Background>
        <div className="vh-100 light-overlay light-overlay-lg-0 d-flex align-items-center text-dark text-center">
          <Container>
            <div className="py-5 overflow-hidden overlay-content mx-auto">
              <h1 className="mb-5 display-3 fw-bold text-uppercase">
                Men's collection
              </h1>
              <p>
                <Link href="/category" passHref>
                  <Button variant="dark" size="lg">
                    See look book
                  </Button>
                </Link>
              </p>
            </div>
          </Container>
        </div>
      </Parallax>
    </>
  )
}
