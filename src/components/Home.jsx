import React, { useState, useEffect } from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
import DescriptionIcon from "@material-ui/icons/Description";
import cross from "../files/cross.svg";
import tick from "../files/tick.svg";
import select from "../files/select.svg";

function Home() {
  const [cardfront, changefront] = useState("rotateX(0deg)");
  const [cardback, changeback] = useState("rotateX(180deg)");

  const [rtick, rotatetick] = useState("rotateZ(0deg)");
  const [rselect, rotateselect] = useState("rotateX(0deg)");
  const [rcross, rotatecross] = useState("rotateZ(0deg)");

  var [copyopacity, change] = useState(0);
  var [copyresult, changecontent] = useState();

  useEffect(() => {
    setTimeout(() => {
      changefront("rotateX(-180deg)");
      changeback("rotateX(0deg)");
    }, 500);

    setTimeout(() => {
      changefront("rotateX(0deg)");
      changeback("rotateX(180deg)");
    }, 1500);
    ontick();
    onselect();
    oncross();
  }, []);

  function spinin() {
    changefront("rotateX(-180deg)");
    changeback("rotateX(0deg)");
  }

  function spinout() {
    changefront("rotateX(0deg)");
    changeback("rotateX(180deg)");
  }

  function Copyresult(res) {
    if (res) {
      changecontent("Copied to clipboard");
    } else {
      changecontent("Copy failed due to some reason");
    }
    change(0.7);
    setTimeout(() => {
      change(0);
    }, 1000);
  }

  function copy() {
    navigator.clipboard.writeText("8867953141").then(
      function () {
        Copyresult(true);
      },
      function () {
        Copyresult(false);
      }
    );
  }

  function ontick() {
    let i = 0;
    let rotate = setInterval(() => {
      i++;
      rotatetick("rotateZ(" + i * 18 + "deg)");
    }, 100);
    setTimeout(() => {
      clearInterval(rotate);
      rotatetick("rotateZ(0deg)");
    }, 2000);
  }

  function onselect() {
    let i = 0;
    let rotate = setInterval(() => {
      i++;
      rotateselect("rotateX(" + i * 18 + "deg)");
    }, 100);
    setTimeout(() => {
      clearInterval(rotate);
      rotateselect("rotateX(0deg)");
    }, 2000);
  }

  function oncross() {
    let i = 0;
    let rotate = setInterval(() => {
      i++;
      rotatecross("rotateZ(" + i * 18 + "deg)");
    }, 100);
    setTimeout(() => {
      clearInterval(rotate);
      rotatecross("rotateZ(0deg)");
    }, 2000);
  }

  return (
    <section id="Home" className="section">
      <div className="card" onMouseOut={spinout} onMouseMove={spinin}>
        <div className="back" style={{ transform: cardback }}>
          <h2>Vishwa</h2>
          <nav className="links">
            <a href="https://www.linkedin.com/in/vishwanath-patil-636276119">
              <LinkedInIcon style={{ color: "#6D214F" }} />
            </a>
            <a href="mailto:vishwanathpatil145@gmail.com">
              <MailIcon style={{ color: "#6D214F" }} />
            </a>
            <a href="./resume.pdf" target="_blank">
              <DescriptionIcon style={{ color: "#6D214F" }} />
            </a>
            <p onClick={copy}>
              <PhoneIcon style={{ color: "#6D214F" }} />
            </p>
          </nav>
        </div>
        <div className="front" style={{ transform: cardfront }}></div>
      </div>
      <div className="welcome">
        <marquee>Welcome to Resume website!</marquee>
      </div>
      <div className="copyresult" style={{ opacity: copyopacity }}>
        <p>{copyresult}</p>
      </div>
      <img
        onClick={ontick}
        src={tick}
        style={{
          transform: rtick,
          position: "absolute",
          top: "50%",
          left: "50%"
        }}
        alt={tick}
      />
      <img
        onClick={onselect}
        src={select}
        style={{
          transform: rselect,
          position: "absolute",
          top: "40%",
          left: "65%"
        }}
        alt={tick}
      />
      <img
        onClick={oncross}
        src={cross}
        style={{
          transform: rcross,
          position: "absolute",
          top: "30%",
          left: "80%"
        }}
        alt={cross}
      />
    </section>
  );
}

export default Home;
