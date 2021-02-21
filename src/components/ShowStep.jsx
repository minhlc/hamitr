import React, { useState } from "react";
import style from "../style/show-step.module.scss";

import QuestionIcon from "../img/question.svg";

function ShowStep(props) {
  const [step, setStep] = useState([]);
  const [changing, setChanging] = useState(false);

  const AddStep = () => {
    let newStep = [...step];
    newStep[step.length] = {
      id: step.length,
      title: "",
      description: "",
    };
    setStep(newStep);
    setChanging(true);
  };

  const ChangeInput = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleKeyDown = (event) => {
    if (event.which === 13 && event.shiftKey) {
      event.target.value = event.target.value + "\n";
    } else if (event.key === "Enter") {
      AddStep();
    }
  };

  return (
    <div className={`${style.box} ${style._steps}`}>
      <p className={style.box__title}>Step by step</p>
      <div className={style._help}>
        <img src={QuestionIcon} alt="question icon" />
        <div className={style._help__content}>
          <p>
            Press{" "}
            <b>
              <i>Enter</i>
            </b>{" "}
            to add new step.
          </p>
          <p>
            Press{" "}
            <b>
              <i>Shift + Enter</i>
            </b>{" "}
            to new line.
          </p>
        </div>
      </div>
      {step.length > 0 ? (
        <form onSubmit={handleSubmit}>
          <div className={style._steps__list}>
            {step.map((item) => (
              <div className={style._steps__item} key={item.id}>
                <div className={style._steps__index}>{item.id + 1}</div>
                <div className={style._steps__detail}>
                  <input
                    type="text"
                    placeholder="What is mountain"
                    name={`step[${item.id}][title]`}
                    defaultValue={item.title}
                    onChange={ChangeInput}
                    onKeyDown={handleKeyDown}
                    autoFocus={item.id === step.length - 1 ? true : false}
                  />
                  <textarea
                    name={`step[${item.id}][description]`}
                    placeholder="Moutain is a mountain"
                    cols="30"
                    defaultValue={item.description}
                    onKeyDown={handleKeyDown}
                    onChange={ChangeInput}
                  ></textarea>
                </div>
              </div>
            ))}
          </div>

          {changing ? (
            <div className={style._form__footer}>
              <button
                type="button"
                onClick={AddStep}
                className={style._btn__add}
              >
                Add new
              </button>
              <button type="submit" className={style._btn__save}>
                Save
              </button>
            </div>
          ) : (
            <></>
          )}
        </form>
      ) : (
        <div className={style._empty}>
          <p>There are no steps!</p>
          <button onClick={AddStep}>Add new</button>
        </div>
      )}
    </div>
  );
}

export default ShowStep;
