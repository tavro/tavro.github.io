import React, { useState, useEffect } from 'react';

import profile from '../profile.jpg';
import './css/Home.css';

import {
    Link
  } from "react-router-dom";

function Home() {
  const [word, setWord] = useState("")

  useEffect(() => {
    printWord("it's me isak", 100)
  }, [])

  const delay = ms => new Promise(res => setTimeout(res, ms));
  const printWord = async (word, time) => {
    for (let i = 0; i < word.length+1; i++) {
        await delay(time)
        setWord(word.substring(0, i))
    }
  }

  return (
    <div className="App">
      <header className='App-header'>
        <div className='App-nav-wrapper'>
          <a id="App-nav-selected">> home</a>
        </div>
        <div className='App-nav-wrapper'>
          <Link to="/about" className="App-link">
            about
          </Link>
        </div>
        <div className='App-nav-wrapper'>
          <Link to="/blog" className="App-link">
            blog
          </Link>
        </div>
      </header>
      <main className='Main'>
        <div className='Home'>
        <h1 className='App-title'>tavro</h1>
        <h2 className='App-subtitle'>> { word }<span className='App-blink'>_</span></h2>
        <p className='App-desc'>i am a software developer from sweden, browse this website for more details.</p>
        <div className='App-button-wrapper'>
          <a href="https://isakhorvath.me/digital-cv/" className='App-button-link'>
            <div className='App-button'>
              <p className='App-button-text'>my digital resumé</p>
            </div>
          </a>
          <a href='https://github.com/tavro' className='App-button-link'>
            <div className='App-button-alt'>
              <p className='App-button-text-alt'>github</p>
            </div>
          </a>
        </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
