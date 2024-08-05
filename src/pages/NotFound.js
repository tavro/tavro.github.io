import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const NotFound = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : false;
  });

  useEffect(() => {
    document.body.className = isDarkTheme ? "dark-theme" : "light-theme";
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * 12) + 1;
    return `https://raw.githubusercontent.com/tavro/blog-image-db/main/404/${randomIndex}.JPG`;
  };

  const randomImageUrl = getRandomImage();

  return (
    <>
      <header className="App-header">
        <div className="App-nav-wappers">
          <div className="App-nav-wrapper">
            <Link to="/" className="App-link">
              home
            </Link>
          </div>
        </div>
        <FontAwesomeIcon
          icon={isDarkTheme ? faSun : faMoon}
          onClick={toggleTheme}
          className="theme-toggle-icon"
          title={isDarkTheme ? "Switch to Light Mode" : "Switch to Dark Mode"}
        />
      </header>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>404 - Page Not Found</h1>
        <p className="notfound-text">Sorry, the page you are looking for does not exist.</p>
        <img
          src={randomImageUrl}
          alt="Random 404"
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <p className="notfound-text">Enjoy this random picture while you're here!</p>
      </div>
    </>
  );
};

export default NotFound;
