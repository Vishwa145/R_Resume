import React from "react";
import ReactDOM from "react-dom";

function Header(props) {
  return (
    <div
      style={{ opacity: props.opacity }}
      id="navigation-bar"
      className="header"
    >
      <nav className="nav">
        <li>
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="#Experience">Experience</a>
        </li>
        <li>
          <a href="#Education">Education</a>
        </li>
        <li>
          <a href="#Skills">Skills</a>
        </li>
      </nav>
    </div>
  );
}

export default Header;
