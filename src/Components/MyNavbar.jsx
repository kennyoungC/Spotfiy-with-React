import React, { Component, useState } from "react"
import { Link } from "react-router-dom"
import { Col, Container, FormControl, InputGroup, Row } from "react-bootstrap"
const MyNavbar = (props) => {
  // const [query, setQuery] = useState("")

  return (
    <nav className="nav__bar d-flex flex-column text-muted px-3">
      <img
        className="logo py-2"
        src="./img/Spotify_Logo_RGB_White.png"
        alt="spotify-logo"
      />
      <div className="d-flex flex-column gap-3">
        <div className="d-flex gap-2 mt-4">
          <i className="bi bi-house-door-fill"></i>

          <Link to={"/home"}>
            <div className="text-decoration-none text-white home-page">
              Home
            </div>
          </Link>
        </div>
        <div className="d-flex flex-column gap-2">
          <div className="d-flex gap-2">
            <i className="bi bi-search"></i>
            <p className="mb-0">Search</p>
          </div>

          <InputGroup className="mb-3">
            <FormControl
              placeholder="Search.."
              value={props.query}
              onChange={props.handleSearch}
            />
            <InputGroup.Text id="basic-addon2">Go</InputGroup.Text>
          </InputGroup>
        </div>
        <div className="d-flex gap-2">
          <i className="bi bi-list-nested"></i>
          <p className="mb-0">Your Library</p>
        </div>
      </div>
      <div className="d-flex flex-column gap-1 my-5">
        <div className="d-flex gap-2 align-items-center">
          <i className="bi bi-file-plus-fill fs-1"></i>
          <p className="mb-0">Create Playlist</p>
        </div>
        <div className="d-flex gap-2 align-items-center">
          <figure>
            <img className="liked-img" src="./img/like songs.png" alt="" />
          </figure>
          <p className="mb-0">Liked Songs</p>
        </div>
      </div>
      <div>
        <ul className="list-unstyled d-flex flex-column gap-2">
          <li>
            <a
              className="text-decoration-none text-white fw-bold album-page"
              href="album.html"
            >
              Album page
            </a>
          </li>
          <li>
            <a
              className="text-decoration-none text-white fw-bold artist-page"
              href="artist.html"
            >
              Artist page
            </a>
          </li>

          <li>
            <span>
              <i className="bi bi-arrow-down-circle"></i>
            </span>
            Install App
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default MyNavbar
