import React, { useEffect, useState } from "react"
import { Row, Container, Col } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import MyNavbar from "./MyNavbar"
import UserNavSection from "./UserNavSection"
const AlbumPage = () => {
  const [albumDetails, setAlbumDetails] = useState(null)

  useEffect(() => {
    getAlbum()
  }, [])
  const { albumId } = useParams()

  const getAlbum = async () => {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/album/" + albumId
    )
    const data = await response.json()
    console.log(data)
    setAlbumDetails(data)
  }
  return (
    <Container fluid className="px-0 position-relative">
      <Row className="g-0 all-content">
        <Col sm={3} md={2} className="">
          <MyNavbar />
        </Col>
        {albumDetails && (
          <Col sm={9} md={10} className="all-sections background-album">
            <div className="px-3 px-sm-5 pb-2">
              <UserNavSection />
              <header className="d-flex align-items-end mt-1 gap-4 ">
                <figure>
                  <img
                    src={albumDetails.cover_medium}
                    alt=""
                    className="big-img shadow-lg "
                  />
                </figure>
                <figcaption className="text text-light">
                  <p>{albumDetails.type}</p>
                  <h3 className="fs-1 fw-bold">{albumDetails.title}</h3>
                  <div className="d-flex gap-1 align-items-center">
                    <figure className="min-img">
                      <img
                        src={albumDetails.artist.picture}
                        className="img-fluid"
                        alt=""
                      />
                    </figure>
                    <div className=" d-flex gap-1">
                      <Link to={"/artist/" + albumDetails.artist.id}>
                        <p className="bt-text mb-0 ">
                          {albumDetails.artist.name}
                        </p>
                      </Link>
                      <p className="bt-note mb-0">
                        • {albumDetails.release_date.slice(0, 4)} •
                        {albumDetails.tracks.data.length}songs
                      </p>
                    </div>
                  </div>
                </figcaption>
              </header>
            </div>
            <audio src=""></audio>
            <section className="p-4 sub-artist-header">
              <div className="d-flex gap-4 align-items-center">
                <div className="play-btn artist-page-play"></div>
                <div className="fs-4">
                  <span className="text-light">
                    <i className="bi bi-heart"></i>
                  </span>
                </div>
                <p className="text-light fs-4 mb-0">
                  <i className="bi bi-three-dots"></i>
                </p>
              </div>
            </section>
            <section className="px-3">
              <table className="table-botherless w-100">
                <thead>
                  <tr className="album-thead">
                    <th scope="col">#</th>
                    <th scope="col">TITLE</th>
                    <th scope="col">PLAYS</th>
                    <th className="text-end px-3" scope="col">
                      <i className="bi bi-clock"></i>
                    </th>
                  </tr>
                </thead>
                <tbody className="album-tbody text-light">
                  {albumDetails.tracks.data.map((el, i) => (
                    <tr className="songs">
                      <th scope="row">
                        <span>{i + 1}</span>
                      </th>
                      <td>
                        <div className="d-flex gap-2 align-items-center">
                          <span>{el.title}</span>
                        </div>
                      </td>
                      <td className="text-start">{el.rank.toLocaleString()}</td>
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
            </section>
          </Col>
        )}
      </Row>
    </Container>
  )
}

export default AlbumPage
