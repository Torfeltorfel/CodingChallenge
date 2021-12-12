import React from "react";
import "./stickyBanner.css";
import PlayIcon from "./PlayIcon.js";

export default function StickyBanner() {
  return (
    <>
      <div className="bannerSection">
        <div className="bannerSection-gradient"></div>
        <div className="bannerSection-content">
          <h2 className="containerStickyBanner--headline">
            Receive 3 tax tips to start optimizing your taxes!
          </h2>
          <form className="email">
            <input
              type="email"
              placeholder="Your email address"
              className="email--input"
            ></input>
            <button type="submit" className="email--button">
              <PlayIcon />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
