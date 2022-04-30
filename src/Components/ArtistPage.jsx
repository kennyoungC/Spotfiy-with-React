import React, { useEffect, useState } from "react"
import { Row, Container, Col } from "react-bootstrap"
import UserNavSection from "./UserNavSection"
import MyNavbar from "./MyNavbar"
import { useParams } from "react-router-dom"

const ArtistPage = () => {
  const [music, setMusic] = useState([])
  const [tracks, setTracks] = useState([])
  const id = useParams()
  useEffect(() => {
    loadArtistPage()
    displayTrackLists()
  }, [])

  const loadArtistPage = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/artist/" +
          id.artistId
      )
      const userData = await response.json()
      // console.log(userData)
      setMusic(userData)
    } catch (error) {
      console.log(error)
    }
  }
  const displayTrackLists = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/artist/" +
          id.artistId +
          "/top?limit=50"
      )
      const userData = await response.json()
      console.log(userData.data)
      setTracks(userData.data)
    } catch (error) {}
  }

  return (
    <Container fluid className="px-0 position-relative">
      <Row className="g-0 all-content">
        <Col sm={3} md={2} className="">
          <MyNavbar />
        </Col>

        <Col sm={9} md={10} className="all-sections ">
          {music ? (
            <Row>
              <Col
                xs={12}
                className="artist-page-background"
                style={{
                  backgroundImage: `url(${music.picture_medium})`,
                }}
              >
                <UserNavSection />
                <section className="image-text">
                  <span>
                    <span className="text-primary">
                      <i className="bi bi-patch-check-fill"></i>
                    </span>
                    Verified Artist
                  </span>
                  <h1>{music.name}</h1>
                  <p>37,120,733 monthly listeners</p>
                </section>
              </Col>
              <Col xs={12} className="artist-page-background-2">
                <section className="p-4 sub-artist-header">
                  <div className="d-flex gap-4 align-items-center">
                    <div className="pause-btn artist-page-play"></div>
                    <button className="btn btn-outline-secondary bg-transparent rounded">
                      <span className="text-light">FOLLOW</span>
                    </button>
                    <p className="text-light fs-4 mb-0">
                      <i className="bi bi-three-dots"></i>
                    </p>
                  </div>
                </section>
                <Row className="mb-5 px-4 text-light artist-page-music-section">
                  <Col lg={9}>
                    <h2 className="fw-bold fs-4">Popular</h2>
                    <table className="table-botherless w-100">
                      <tbody>
                        {tracks &&
                          tracks.map((el, i) => (
                            <tr className="songs">
                              <th scope="row">
                                <span>{i + 1}</span>
                              </th>
                              <td>
                                <div className="d-flex gap-2 align-items-center">
                                  <img src={el.album.cover_small} alt="" />
                                  <span>{el.title}</span>
                                </div>
                              </td>
                              <td className="text-start">
                                {el.rank.toLocaleString()}
                              </td>
                              <td className="text-end">
                                {(Number(el.duration) / 60)
                                  .toFixed(2)
                                  .toString()
                                  .split(".")
                                  .join(":")}
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                    <section className="px-3 my-5">
                      <div className="d-flex justify-content-between mb-3">
                        <h2 className="fw-bold fs-5">Popular Releases</h2>
                        <h4>See all</h4>
                      </div>
                      <audio src=""></audio>
                      <article className="middle-container popuplar">
                        <div className="row album-cards">
                          {tracks &&
                            tracks.map((el) => (
                              <div className="col-6 col-md-4  col-xl-3 mb-3">
                                <article className="music-content">
                                  <figure className="position-relative">
                                    <img
                                      src={el.album.cover_small}
                                      alt=""
                                      className="img-fluid"
                                    />
                                    <div className="play-box">
                                      <p className="play-btn"></p>
                                    </div>
                                  </figure>
                                  <figcaption>{el.title}</figcaption>
                                  <p>A collection of the best metal ballads</p>
                                </article>
                              </div>
                            ))}
                        </div>
                      </article>
                    </section>
                  </Col>
                  <Col lg={3} className="artist-pick">
                    <h2 class="fw-bold">Artist pick</h2>
                    <div class="d-flex gap-3 align-items-center">
                      <figure>
                        <img
                          class=""
                          src={music.picture_medium}
                          alt=""
                          style={{ width: "120px" }}
                        />
                      </figure>
                      <figcaption>
                        <p class="text-muted mb-1">
                          <span>
                            <i class="bi bi-music-note-beamed"></i>
                          </span>
                          Posted By {music.name}
                        </p>
                        <p class="fw-bold mb-0">
                          {music.name} Best Of <br />
                          <span class="text-muted">Playlist</span>
                        </p>
                      </figcaption>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          ) : (
            "loading..."
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default ArtistPage
