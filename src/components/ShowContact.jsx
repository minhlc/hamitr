import React from "react";
import style from "../style/show.module.scss";

function ShowContact(props) {
  return (
    <div className={`${style.box} ${style._contact}`}>
      <p className={style.box__title}>Contact to</p>
      <div className={`${style._contact__item} row`}>
        <div className={`col-lg-4 ${style._contact__item__title}`}>
          <p>Fullname</p>
        </div>
        <div className="col-lg-8">
          <input type="text" placeholder="Le Cong Minh" />
        </div>
      </div>
      <div className={`${style._contact__item} row`}>
        <div className={`col-lg-4 ${style._contact__item__title}`}>
          <p>Number Phone</p>
        </div>
        <div className="col-lg-8">
          <input type="text" placeholder="0987654321" />
        </div>
      </div>
      <div className={`${style._contact__item} row`}>
        <div className={`col-lg-4 ${style._contact__item__title}`}>
          <p>E-mail</p>
        </div>
        <div className="col-lg-8">
          <input type="text" placeholder="example@gmail.com" />
        </div>
      </div>
    </div>
  );
}

export default ShowContact;
