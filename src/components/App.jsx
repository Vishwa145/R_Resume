import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";

function App() {
  const [postion, changepostion] = useState(0);
  const [nav, changenav] = useState(1);
  function navFade() {
    if (window.pageYOffset > postion + 2) {
      changenav(0);
    } else if (window.pageYOffset < postion - 2) {
      changenav(1);
    }
    changepostion(window.pageYOffset);
  }

  return (
    <div onWheel={navFade} className="main">
      <Header opacity={nav} />
      <Home />
      <Experience />
      <Education />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
