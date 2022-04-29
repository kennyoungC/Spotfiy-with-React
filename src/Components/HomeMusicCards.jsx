import React, { Component } from "react"
import { Col } from "react-bootstrap"
import { Link } from "react-router-dom"
const HomeMusicCards = (props) => {
  return (
    <Col className="col-12 col-sm-6 col-md-4 col-xl-3 mb-3">
      <div
        id="music-card"
        style={{ backgroundImage: `url(${props.data.album.cover})` }}
      >
        <div id="music-card-overlay"></div>
        <div id="music-card-info">
          <div id="music-card-info-artist"></div>
          <div id="music-card-info-album">{props.data.artist.name}</div>
          <div id="music-card-info-title">{props.data.title}</div>
        </div>
        <div id="music-card-play">
          <Link to={"/album/" + props.data.album.id}>
            {" "}
            <div id="music-card-triangle"></div>
          </Link>
        </div>
      </div>
    </Col>
  )
}

export default HomeMusicCards
