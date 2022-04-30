import React, { Component } from "react"

const UserNavSection = (props) => {
  return (
    <div className="d-flex align-items-center justify-content-between gap-5 pt-4 pb-3">
      <div className="d-none d-sm-block">
        <span className="arrow">
          <i className="bi bi-chevron-left"></i>
        </span>
        <span className="arrow">
          <i className="bi bi-chevron-right"></i>
        </span>
      </div>

      <div className="d-flex gap-3 align-items-center">
        <div className="position-relative">
          <div className="dark-mode d-none">
            <i className="bi bi-moon-fill"></i>

            <p className="mode">Dark Mode</p>
          </div>

          <div className="light-mode ">
            <i className="bi bi-brightness-high"></i>
            <p className="mode">light Mode</p>
          </div>
        </div>
        <div>
          <figure className="d-flex align-items-center gap-2 text-white user-details">
            <img src="./img/artist-img/anonymous avatar.png" alt="" />
            <figcaption className="laura-jones">
              <span className="user-name">{props.userName}</span>
              <span>
                <i className="bi bi-caret-down-fill"></i>
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  )
}

export default UserNavSection
