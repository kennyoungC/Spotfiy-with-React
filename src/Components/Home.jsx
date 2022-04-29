import { Col, Container, Row } from "react-bootstrap"
import MyNavbar from "./MyNavbar"

const Home = () => (
  <Container fluid className="px-0 position-relative">
    <Row className="g-0 all-content">
      <Col sm={3} md={2} className="">
        <MyNavbar />
      </Col>
      <Col sm={9} md={10} className="all-sections background">
        <div class="px-3 px-sm-5 pb-2">
          <div class="d-flex align-items-center justify-content-between gap-5 pt-4 pb-3">
            <div class="d-none d-sm-block">
              <span class="arrow">
                <i class="bi bi-chevron-left"></i>
              </span>
              <span class="arrow">
                <i class="bi bi-chevron-right"></i>
              </span>
            </div>

            <div class="d-flex gap-3 align-items-center">
              <div class="position-relative">
                <div class="dark-mode d-none">
                  <i class="bi bi-moon-fill"></i>

                  <p class="mode">Dark Mode</p>
                </div>

                <div class="light-mode ">
                  <i class="bi bi-brightness-high"></i>
                  <p class="mode">light Mode</p>
                </div>
              </div>
              <div>
                <figure class="d-flex align-items-center gap-2 text-white user-details">
                  <img src="./img/artist-img/anonymous avatar.png" alt="" />
                  <figcaption class="laura-jones">
                    <span class="user-name">laura-jones...</span>
                    <span>
                      <i class="bi bi-caret-down-fill"></i>
                    </span>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
          <article class="main-container mb-3 text-white">
            <h1>Good Morning</h1>
            <div class="row ">
              {[...Array(10)].map((el) => (
                <div class="col-12 col-sm-6 col-md-4 col-xl-2 mb-3">
                  <article class="d-flex gap-2 align-items-center pe-xl-2">
                    <figure>
                      <img src="./img/juice 2.jpg" alt="" />
                    </figure>
                    <div class="text-content">
                      <p>Burning Jazz-rock</p>
                      <p>Fusion</p>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </article>
        </div>
        <section class="px-5 mb-5">
          <div class="d-flex justify-content-between text-white mb-3">
            <h2 class="fs-1">Albums</h2>
            <h4>See all</h4>
          </div>
          <Row>
            {[...Array(10)].map((el) => (
              <Col className="col-12 col-sm-6 col-md-4 col-xl-3 mb-3">
                <div id="music-card">
                  <div id="music-card-overlay"></div>
                  <div id="music-card-info">
                    <div id="music-card-info-artist">David Bowie</div>
                    <div id="music-card-info-album">Aladdin Sane</div>
                    <div id="music-card-info-title">
                      Let's Spend the Night Together Let's Spend the Night
                      Together
                    </div>
                  </div>
                  <div id="music-card-play">
                    <div id="music-card-triangle"></div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </section>
      </Col>
    </Row>
  </Container>
)

export default Home
