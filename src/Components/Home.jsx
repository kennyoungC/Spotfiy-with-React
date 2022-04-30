import { Col, Container, Row } from "react-bootstrap"
import MyNavbar from "./MyNavbar"
import React, { useEffect, useState } from "react"
import HomeMusicCards from "./HomeMusicCards"
import UserNavSection from "./UserNavSection"

const Home = (props) => {
  const [query, setQuery] = useState("wizkid")
  const [musicData, setmusicData] = useState([])

  const handleQuery = (e) => {
    setQuery(e.target.value)
  }
  useEffect(() => {
    getMusic()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  const getMusic = async () => {
    if (query.length >= 3) {
      try {
        const response = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query
        )
        const { data } = await response.json()
        console.log(data)
        setmusicData(data)
      } catch (error) {
        console.log(error)
      }
    }
  }
  let myDate = new Date()
  let hrs = myDate.getHours()
  const checkCurrentTime = function () {
    let greet

    if (hrs < 12) greet = "Good Morning"
    else if (hrs >= 12 && hrs <= 17) greet = "Good Afternoon"
    else if (hrs >= 17 && hrs <= 24) greet = "Good Evening"

    return greet
  }

  return (
    <Container fluid className="px-0 position-relative">
      <Row className="g-0 all-content">
        <Col sm={3} md={2} className="">
          <MyNavbar query={query} handleSearch={handleQuery} />
        </Col>
        <Col sm={9} md={10} className="all-sections background">
          <div className="px-3 px-sm-5 pb-2">
            <UserNavSection userName={props.userName} />
            <article className="main-container mb-3 text-white">
              <h1>
                {checkCurrentTime()} {props.userName}
              </h1>
              <div className="row ">
                {musicData.slice(0, 8).map((el) => (
                  <div className="col-12 col-sm-6 col-md-4 col-xl-2 mb-3">
                    <article className="d-flex gap-2 align-items-center pe-xl-2">
                      <figure>
                        <img src={el.album.cover} alt="" />
                      </figure>
                      <div className="text-content">
                        <p>{el.artist.name}</p>
                        <p>{el.title}</p>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </article>
          </div>
          <section className="px-5 mb-5">
            <div className="d-flex justify-content-between text-white mb-3">
              <h2 className="fs-1"> Albums</h2>
              <h4>See all</h4>
            </div>
            <Row>
              {musicData.map((el) => (
                <HomeMusicCards data={el} />
              ))}
            </Row>
          </section>
        </Col>
      </Row>
    </Container>
  )
}

export default Home
