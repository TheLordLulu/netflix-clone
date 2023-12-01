import React, { useEffect, useState } from "react";
import "./Nav.css";
const Nav = () => {
    const [show, handleShow] = useState(false);
    
    const transitionNavBar = () => {
        if(window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, [])


  return (
    <div className={`nav ${show && "nav_black"} `}>
      <div className="nav_contents">
        <img
          className="nav_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="netflix"
        />
        <img
          className="nav_avatar"
          src="data:image/png;base64,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"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default Nav;
