import React from "react"
import Icon from "../Icon"

export default function FullScreenSearch({ searchToggle, setSearchToggle }) {
  return (
    <div className="search-area-wrapper" style={{ display: "block" }}>
      <div className="search-area d-flex align-items-center justify-content-center">
        <div
          className="close-btn"
          onClick={() => setSearchToggle(!searchToggle)}
        >
          <Icon icon="close-1" className="svg-icon-light w-3rem h-3rem" />
        </div>
        <form className="search-area-form" action="#">
          <div className="form-group position-relative">
            <input
              className="search-area-input"
              type="search"
              name="search"
              id="search"
              autoFocus
              placeholder="What are you looking for?"
            />
            <button className="search-area-button" type="submit">
              <Icon icon="search-1" />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
