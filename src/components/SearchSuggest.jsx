import React from "react"
import parse from "html-react-parser"

function SearchSuggest(props) {
  return (
    <div className="suggest">
      <div className="suggest__content">
        <div className="suggest__list">
          <ul>{parse(props.links)}</ul>
        </div>
      </div>
    </div>
  )
}

export default SearchSuggest
