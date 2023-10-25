import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/light.png";
import "./header.css";
import { useAuth } from "../../../context/Auth";
const Header = () => {
  const [auth, setAuth] = useAuth();
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add("dark-mode"); // Apply dark theme class
    } else {
      document.body.classList.remove("dark-mode"); // Remove dark theme class
    }
  }, [isDarkTheme]);
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "http://translate.google.com/translate_a/element.js?cb=loadGoogleTranslate";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array ensures that this effect runs once after the initial render

  const openLanguageMenu = () => {
    const selectBox = document.querySelector(".goog-te-combo");

    // Trigger a click event on the select box
    if (selectBox) {
      selectBox.click();
    }
  };

  return (
    <header className="sticky-header">
      <div className="box"></div>
      <div className="container">
        <a href="#" className="logo">
          <img src={logo} className="logoimg" height="50" width="150" />
        </a>
        <ul className="links">
          <li>
            {JSON.stringify(auth, null, 4)}
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about-us">About Us</a>
          </li>
          <li>
            <a href="#conatct">Contact</a>
          </li>
          <li>
            <a href="dashboard.html">Dashboard</a>
          </li>
          <li
            className="signin"
            style={{ color: "blue", background: "yellow" }}
          >
            <Link to="/login">Sign In</Link>
          </li>
          <li className="signin">
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
        <div className="theme-toggle">
          <input
            type="checkbox"
            id="theme-toggle-checkbox"
            checked={isDarkTheme}
            onChange={() => setIsDarkTheme(!isDarkTheme)}
          />
          <label for="theme-toggle-checkbox"></label>
        </div>
        <div id="google_element" onClick={openLanguageMenu}></div>
      </div>
    </header>
  );
};

export default Header;
