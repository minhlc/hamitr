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

  const suggestClass = () => {
    return 'search ' + (showSuggest ? 'active':'default')
  }

  return (
   <div className="_container-search">
    <div className={suggestClass()}>
      <form className="form">
        <div className="icon">
          <img src={SearchIcon} alt="search icon" />
        </div>
        <input type="text" onClick={ToggleSuggest} />
        <button>Search</button>
      </form>

      {showSuggest ? (
        <div className="suggest">
          <div className="suggest__content">
            <div className="suggest__list">
              <ul>
                {parse(response)}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
   </div>
  );
}

export default Search;
