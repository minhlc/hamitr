import React, { useState, useEffect, useRef } from "react"
// import { Link } from "react-router-dom";
import SearchIcon from "../img/loupe.svg"
// import ClockIcon from "../img/clock.svg";
import LogoText from "./LogoText"
import Weather from "./Weather"
import SearchSuggest from "./SearchSuggest"

import socketIOClient from "socket.io-client"

const ENDPOINT = "http://192.168.1.208:4001"

function Search(props) {
  const [response, setResponse] = useState("")
  const [showSuggest, setShowSuggest] = useState(false)
  const wrapperRef = useRef(null)

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT)
    socket.emit("keysearch", "FAB")
    socket.on("htmltag", (data) => {
      setResponse(data)
    })
  }, [])

  // NOTE: click outside SEARCH-FORM will close suggest box
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowSuggest(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [wrapperRef])

  const ToggleSuggest = () => {
    setShowSuggest(true)
  }

  const suggestClass = () => {
    return "search " + (showSuggest ? "active" : "default")
  }

  return (
    <div className="container__search">
      <Weather></Weather>
      <LogoText></LogoText>
      <div id="search-form" className={suggestClass()} ref={wrapperRef}>
        <form className="form">
          <div className="icon">
            <img src={SearchIcon} alt="search icon" />
          </div>
          <input type="text" onClick={ToggleSuggest} />
          <button>Search</button>
        </form>

        {showSuggest ? <SearchSuggest links={response}></SearchSuggest> : <></>}
      </div>
    </div>
  )
}

export default Search
