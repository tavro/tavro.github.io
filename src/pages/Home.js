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
          <a href="https://isakhorvath.me/digital-cv/" className="App-link">work</a>
        </div>
        <div className='App-nav-wrapper'>
          <Link to="/about" className="App-link">
            about
          </Link>
        </div>
        <div className='App-nav-wrapper'>
          <a href="https://isakhorvath.me/tavro-blog-svelte/" className="App-link">blog</a>
        </div>
      </header>
      <main className='App-main'>
        <div className='App-meta'>
          <div className='App-meta-wrapper'>
            <div>
              <div className='App-titles'>
                <h1 className='App-title'>tavro</h1>
                <h2 className='App-subtitle'>> { word }<span className='App-blink'>_</span></h2>
              </div>
              <p className='App-desc'>i am a 23 year-old software developer from sweden</p>
            </div>
            <div className='App-button-wrapper'>
              <a href="#" className='App-button-link'>
                <div className='App-button'>
                  <p className='App-button-text'>my portfolio</p>
                </div>
              </a>
              <a href='https://github.com/tavro' className='App-button-link'>
                <div className='App-button-alt'>
                  <p className='App-button-text-alt'>github</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className='App-image'>
          <img src={profile} className="App-profile" alt="profile"/>
        </div>
      </main>
    </div>
  );
}

export default Home;
