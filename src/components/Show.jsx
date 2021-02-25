import React from "react"
import { Link } from "react-router-dom"
import style from "../style/show.module.scss"

import LeftArrowIcon from "../img/left-arrow.svg"

import ShowContact from "./ShowContact"
import ShowTitle from "./ShowTitle"
import ShowMore from "./ShowMore"
import ShowStep from "./ShowStep"

function Show(props) {
  return (
    <div className={style.show}>
      <div className="container">
        <Link to="/">
          <button className={style.btn__back}>
            <img src={LeftArrowIcon} alt="" />
          </button>
        </Link>

        <div className="row">
          <div className="col-lg-6 d-flex flex-column">
            <ShowTitle></ShowTitle>
            <ShowContact></ShowContact>
          </div>
          <div className="col-lg-6">
            <ShowMore></ShowMore>
          </div>

          <div className="col-lg-12">
            <ShowStep></ShowStep>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Show
