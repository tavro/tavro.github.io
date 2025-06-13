import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

import "./css/Home.css";

import { Link } from "react-router-dom";

function Home() {
  const [word, setWord] = useState("");
  const [uniqueVisitors, setUniqueVisitors] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : false;
  });

  function getRandomPhrase() {
    const phrases = [
      "404: brain not found",
      "code. sleep. coffee. repeat.",
      "commit, push, pray.",
      "turn it off and on again.",
      "sudo make-it-work",
      "bug or feature? you decide.",
      "tabs > spaces",
      "real devs debug in production",
      "undefined is not a function",
      "segmentation fault (core dumped)",
      "rm -rf /",
      "works on my machine!",
      "this should work... in theory.",
      "compiling... go grab a coffee.",
      "hello world! again.",
      "why does it work? no idea.",
      "todos and fixme comments ftw!",
      "let me just google that real quick...",
    ];

    return phrases[Math.floor(Math.random() * phrases.length)];
  }
  const phrase = getRandomPhrase()

  useEffect(() => {
    document.body.className = isDarkTheme ? "dark-theme" : "light-theme";
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
  }, [isDarkTheme]);

  useEffect(() => {
    printWord(phrase, 100);

    fetch("https://blogbackend-3043faadd9fc.herokuapp.com/api/log-visitor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error logging visitor");
        }
      })
      .catch((err) => console.error("Error logging visitor:", err));

    fetch("https://blogbackend-3043faadd9fc.herokuapp.com/api/unique-visitors")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error fetching unique visitor count");
        }
        return response.json();
      })
      .then((data) => setUniqueVisitors(data.uniqueVisitors))
      .catch((err) =>
        console.error("Error fetching unique visitor count:", err)
      );
  }, []);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  const printWord = async (word, time) => {
    for (let i = 0; i < word.length + 1; i++) {
      await delay(time);
      setWord(word.substring(0, i));
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-nav-wappers">
          <div className="App-nav-wrapper">
            <a id="App-nav-selected">home</a>
          </div>
          <div className="App-nav-wrapper">
            <Link to="/about" className="App-link">
              about
            </Link>
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
        <div className="Home">
          <h1 className="App-title">tavro</h1>
          <h2 className="App-subtitle">
            > {word}
            <span className="App-blink">_</span>
          </h2>
          <p className="App-desc">
            i am a passionate full-stack software developer from sweden, browse
            this website for more details.
          </p>
          <div className="App-button-wrapper">
            <a
              href="https://isakhorvath.me/digital-cv/"
              className="App-button-link"
            >
              <div className="App-button">
                <p className="App-button-text">my digital resumé</p>
              </div>
            </a>
            <a href="https://github.com/tavro" className="App-button-link">
              <div className="App-button-alt">
                <p className="App-button-text-alt">github</p>
              </div>
            </a>
          </div>
          <div className="visitors-container">
            <h1 className="vistors-header">
              Unique Visitors: <span id="uniqueVisitors">{uniqueVisitors}</span>
            </h1>
            <div className="visitors-date">Since July 24, 2024</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
