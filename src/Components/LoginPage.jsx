import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const LoginPage = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8} lg={5}>
          <h5 className=" fs-4 text-center">
            Welcome To My CLONED-SPOTIFY-PAGE
          </h5>

          <div className="d-flex flex-column align-items-center justify-content-center ">
            <span className="fw-bold mb-3 text-center">
              To continue, log in to Spotify
            </span>
            <button className="facebook mb-3 d-flex align-items-center gap-3 justify-content-center bg-primary w-100">
              <span>
                <i className="bi bi-facebook"></i>
              </span>
              <span>CONTINUE WITH FACEBOOK</span>
            </button>
            <button className="apple mb-3 d-flex align-items-center gap-3 justify-content-center bg-dark w-100">
              <span>
                <i className="bi bi-apple"></i>
              </span>
              <span>CONTINUE WITH APPLE</span>
            </button>
            <section>
              <p className="or fw-bold">OR</p>
            </section>
            <div className="d-flex flex-column gap-1 w-100">
              <input
                className="email"
                type="email"
                placeholder="Input Your Name Here"
              />
              <br />
              <input
                className="password"
                type="number"
                placeholder="Your Password is 12345"
              />
            </div>
            <div className="d-flex my-3 align-items-center justify-content-between w-100">
              <div className="d-flex">
                <span className="text-success fs-4 me-2">
                  <i className="bi bi-check-square-fill"></i>
                </span>
                <span className="fs-5 text-muted text-nowrap">Remember me</span>
              </div>
              <Link to={"/home"}>
                <div className="log-in bg-success text-nowrap text-decoration-none">
                  LOG IN
                </div>
              </Link>
            </div>
            <a className="text-success fs-5 me-2 text-decoration-none" href="#">
              Forget your password?
            </a>

            <p className="mb-3 fw-bold text-center fs-5 mt-5">
              Don't have account?
            </p>

            <button className="sign-up d-flex align-items-center justify-content-center mb-3 bg-transparent text-muted w-100">
              <span>SIGN UP FOR SPOTIFY</span>
            </button>
          </div>
          <footer>
            <p className="text-center border-top pt-3">
              if you click "Log in with Facebook" and not a Spotify user, you
              will be registered and <br />
              you agree to Spotify's
              <a
                className="text-success fs-5 me-2 text-decoration-none"
                href="#"
              >
                Terms & Conditions
              </a>
              and
              <a
                className="text-success fs-5 me-2 text-decoration-none"
                href="#"
              >
                Privacy Policy
              </a>
            </p>
          </footer>
        </Col>
      </Row>
      <div className="alert alert-success fs-4 d-none" role="alert">
        The Password Is 12345 😉
      </div>
    </Container>
  )
}

export default LoginPage
