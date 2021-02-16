import React from "react";
import { Link } from "react-router-dom";
import style from "../style/show.module.scss";

import LeftArrowIcon from "../img/left-arrow.svg";

function Show(props) {
  return (
    <div className={style.show}>
      <Link to="/">
        <button className={style.btn__back}>
          <img src={LeftArrowIcon} alt="" />
        </button>
      </Link>

      <div className="row">
        <div className="col-lg-6 d-flex flex-column">
          <div className={`${style.box} ${style._title}`}>
            <p className={style.box__title}>Title</p>
            <input id="title" type="text" placeholder="Title of work" />
          </div>
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
        </div>
        <div className="col-lg-6">
          <div className={`${style.box} ${style._more}`}>
            <p className={style.box__title}>More</p>

            <div className={style._more__list}>
              <div className={style._more__item}>
                <div className={style._more__index}>1</div>
                <div className={style._more__detail}>
                  <h3>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled
                  </p>
                </div>
              </div>
              <div className={style._more__item}>
                <div className={style._more__index}>2</div>
                <div className={style._more__detail}>
                  <h3>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled
                  </p>
                </div>
              </div>
              <div className={style._more__item}>
                <div className={style._more__index}>3</div>
                <div className={style._more__detail}>
                  <h3>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled
                  </p>
                </div>
              </div>
              <div className={style._more__item}>
                <div className={style._more__index}>4</div>
                <div className={style._more__detail}>
                  <h3>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-12">
          <div className={`${style.box} ${style._steps}`}>
            <p className={style.box__title}>Step by step</p>

            <div className={style._steps__list}>
              <div className={style._steps__item}>
                <div className={style._steps__index}>01</div>
                <div className={style._steps__detail}>
                  <h3>What is Lorem Ipsum?</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged
                  </p>
                </div>
              </div>
              <div className={style._steps__item}>
                <div className={style._steps__index}>02</div>
                <div className={style._steps__detail}>
                  <h3>What is Lorem Ipsum?</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged
                  </p>
                </div>
              </div>
              <div className={style._steps__item}>
                <div className={style._steps__index}>03</div>
                <div className={style._steps__detail}>
                  <h3>What is Lorem Ipsum?</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged
                  </p>
                </div>
              </div>
              <div className={style._steps__item}>
                <div className={style._steps__index}>04</div>
                <div className={style._steps__detail}>
                  <h3>What is Lorem Ipsum?</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Show;
