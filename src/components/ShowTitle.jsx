import React from "react";
import style from "../style/show.module.scss";

function ShowTitle(props) {
  return (
    <div className={`${style.box} ${style._title}`}>
      <p className={style.box__title}>Title</p>
      <input id="title" type="text" placeholder="Title of work" />
    </div>
  );
}

export default ShowTitle;
