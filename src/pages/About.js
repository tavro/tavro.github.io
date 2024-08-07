import { SiGmail } from "react-icons/si";
import {
  FaDiscord,
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import profile from "../profile.jpg";
import "./css/About.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

function About() {
  const [word, setWord] = useState("");
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : false;
  });

  useEffect(() => {
    document.body.className = isDarkTheme ? "dark-theme" : "light-theme";
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
  }, [isDarkTheme]);

  useEffect(() => {
    printWord("get to know me", 100);
  }, []);

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  const printWord = async (word, time) => {
    for (let i = 0; i < word.length + 1; i++) {
      await delay(time);
      setWord(word.substring(0, i));
    }
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-nav-wappers">
          <div className="App-nav-wrapper">
            <Link to="/" className="App-link">
              home
            </Link>
          </div>
          <div className="App-nav-wrapper">
            <a id="App-nav-selected">about</a>
          </div>
          <div className="App-nav-wrapper">
            <Link to="/blog" className="App-link">
              blog
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
      <main className="Main">
        <div className="Center-Wrapper">
          <div className="App-contact">
            <img src={profile} alt="profile" id="profile-img" />
            <div className="App-about-meta">
              <p>feel free to contact me! :-)</p>
              <a href="https://discord.com/users/219786295097032715">
                <FaDiscord className="Icon" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100006285705451">
                <FaFacebookSquare className="Icon" />
              </a>
              <a href="https://www.instagram.com/isakhorvath">
                <FaInstagram className="Icon" />
              </a>
              <a href="https://www.linkedin.com/in/isak-horvath-683950165">
                <FaLinkedin className="Icon" />
              </a>
              <a href="mailto:isakhorvath@gmail.com">
                <SiGmail className="Icon" />
              </a>
            </div>
          </div>
          <div className="App-about">
            <h1>
              > {word}
              <span className="App-blink">_</span>
            </h1>
            <hr />
            <p>
              i am a passionate full-stack software developer. currently, i am
              in the final semester of my computer science master's program.
            </p>
            <p>
              beyond my love for programming, i am a people person. i like
              meeting new people and collaborating on various projects, so
              please don't be afraid to reach out!
            </p>
            <p>
              while i have a broad interest in various aspects of software
              development, i have developed a particular fascination with
              compilers, language construction, and operating systems.
            </p>
            <p>
              if you want to know what i'm up to right now, check out my{" "}
              <a href="https://isakhorvath.me/now" className="App-link-alt">
                now page
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default About;
