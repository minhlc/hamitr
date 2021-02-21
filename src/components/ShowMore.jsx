import React from "react";
import style from "../style/show.module.scss";

function ShowMore(props) {
  return (
    <div className={`${style.box} ${style._more}`}>
      <p className={style.box__title}>More</p>

      <div className={style._more__list}>
        <div className={style._more__item}>
          <div className={style._more__index}>1</div>
          <div className={style._more__detail}>
            <h3>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </p>
          </div>
        </div>
        <div className={style._more__item}>
          <div className={style._more__index}>2</div>
          <div className={style._more__detail}>
            <h3>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </p>
          </div>
        </div>
        <div className={style._more__item}>
          <div className={style._more__index}>3</div>
          <div className={style._more__detail}>
            <h3>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </p>
          </div>
        </div>
        <div className={style._more__item}>
          <div className={style._more__index}>4</div>
          <div className={style._more__detail}>
            <h3>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowMore;
