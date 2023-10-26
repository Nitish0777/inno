import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/light.png";
import "./header.css";
import { useAuth } from "../../../context/Auth";
import { toast } from "react-toastify";
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

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logged out successfully");
  };

  return (
    <header className="sticky-header">
      <div className="box"></div>
      <div className="container">
        <Link to="" className="logo">
          <img src={logo} className="logoimg" height="50" width="150" />
        </Link>
        <ul className="links">
          <li>
            {/* {JSON.stringify(auth, null, 4)} */}
            <Link href="#home">Home</Link>
          </li>
          <li>
            <Link href="#about-us">About Us</Link>
          </li>
          <li>
            <Link href="#conatct">Contact</Link>
          </li>
          <li>
            <Link href="dashboard.html">Dashboard</Link>
          </li>
          {!auth.user ? (
            <li>
              <Link to="/signup" className="signin">
                Sign Up
              </Link>
              <Link to="/login" className="signin">
                Sign In
              </Link>
            </li>
          ) : (
            <li>
              <Link onClick={handleLogout}>Logout</Link>
            </li>
          )}
          <li className="signin">
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
