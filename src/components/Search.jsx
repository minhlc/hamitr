import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import style from "../style/search.module.scss";
import SearchIcon from "../img/loupe.svg";
import ClockIcon from "../img/clock.svg";
import socketIOClient from "socket.io-client";
import parse from 'html-react-parser'
const ENDPOINT = "http://192.168.1.208:4001";

function Search(props) {

  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.emit('keysearch', 'FAB');
    socket.on("htmltag", data => {
      setResponse(data);
    });
  }, []);

  const [showSuggest, setShowSuggest] = useState(false);

  const ToggleSuggest = () => {
    setShowSuggest(true);
  };

  return (
    <div className={style.search}>
      <form className={style.form}>
        <div className={style.icon}>
          <img src={SearchIcon} alt="search icon" />
        </div>
        <input type="text" onClick={ToggleSuggest} />
        <button>Search</button>
      </form>

      {showSuggest ? (
        <div className={style.suggest}>
          <div className={style.suggest__content}>
            <div className={style.suggest__list}>
              <ul>
                {parse(response)}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <p className={style.hint}>
          ex. Fabbi JSC, Edso Labs, Together we can do it, ...
        </p>
      )}
    </div>
  );
}

export default Search;
