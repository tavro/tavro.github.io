import { FaAngular, FaNodeJs, FaPython, FaVuejs, FaSass, FaReact, FaCss3Alt, FaHtml5, FaJava, FaJsSquare, FaDocker } from "react-icons/fa";
import { DiDjango, DiSqllite, DiDlang, DiGo, DiMarkdown, DiMongodb } from "react-icons/di";
import { SiGmail, SiHaskell, SiLua, SiAxios, SiCoffeescript, SiCplusplus, SiCsharp, SiDotenv, SiExpress, SiFlask, SiKotlin, SiLatex, SiMariadb, SiNextdotjs, SiOcaml, SiOpencv, SiOpengl, SiPerl, SiPhp, SiPug, SiPytorch, SiRuby, SiSfml, SiSvelte, SiTailwindcss, SiTensorflow, SiTypescript, SiWebgl, SiZeromq } from "react-icons/si";
import { FaChrome, FaDiscord, FaFacebookSquare, FaFigma, FaFirefoxBrowser, FaGitSquare, FaGithub, FaGitlab, FaInstagram, FaJira, FaLinkedin, FaNpm, FaOpera, FaRaspberryPi, FaSlack, FaStackOverflow, FaTrello, FaUbuntu, FaUnity, FaWindows, FaWordpressSimple, FaLinux } from "react-icons/fa";

import profile from '../profile.jpg';

import './css/About.css';

import React, { useState, useEffect } from 'react';

import {
    Link
  } from "react-router-dom";

function About() {
  const [word, setWord] = useState("")

  useEffect(() => {
    printWord("get to know me", 100)
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
          <Link to="/" className="App-link">
            home
          </Link>
        </div>
        <div className='App-nav-wrapper'>
          <a id="App-nav-selected">> about</a>
        </div>
        <div className='App-nav-wrapper'>
          <Link to="/blog" className="App-link">
            blog
          </Link>
        </div>
      </header>
      <main className='App-about-main'>
        <div className='App-about-rows'>
            <div className='App-about-me'>
                <div className='App-about-img'>
                    <img src={profile} alt="profile"/>
                    <div className='App-about-meta'>
                        <p>feel free to contact me! :-)</p>
                        <a href="https://discord.com/users/219786295097032715"><FaDiscord className='Icon'/></a>
                        <a href="https://www.facebook.com/profile.php?id=100006285705451"><FaFacebookSquare className='Icon'/></a>
                        <a href="https://www.instagram.com/isakhorvath"><FaInstagram className='Icon'/></a>
                        <a href="https://www.linkedin.com/in/isak-horvath-683950165"><FaLinkedin className='Icon'/></a>
                        <a href="mailto:isakhorvath@gmail.com"><SiGmail className='Icon'/></a>
                    </div>
                </div>
                <div className='App-about-question'>
                    <h1>> { word }<span className='App-blink'>_</span></h1>
                    <hr/>
                    <p>
                        i am a passionate full-stack software developer. currently, i am in the final year of my computer science master's program, where i am honing my skills and expanding my knowledge.
                    </p>
                    <p>
                        one of the things that excites me the most about being a software developer is the ever-evolving nature of the field. i thrive on learning new technologies and programming languages.
                    </p>
                    <p>
                        beyond my love for programming, i am a people person. i genuinely enjoy meeting new individuals and collaborating on various projects. i believe that building strong relationships not only fosters a supportive work environment but also fuels innovation and creativity.
                    </p>
                    <p>
                        while i have a broad interest in various aspects of software development, i have developed a particular fascination with compilers, language construction, and operating systems. 
                    </p>
                </div>
            </div>
            <div className='App-about-wrapper'>
                <div className='App-about'>
                    <h2>tools i use</h2>
                    <div className='App-about-icons'>
                        <FaChrome className='Icon'/>
                        <FaFirefoxBrowser className='Icon'/>
                        <FaOpera className='Icon'/>
                        <FaGitSquare className='Icon'/>
                        <FaGithub className='Icon'/>
                        <FaGitlab className='Icon'/>
                        <FaJira className='Icon'/>
                        <FaNpm className='Icon'/>
                        <FaFigma className='Icon'/>
                        <FaRaspberryPi className='Icon'/>
                        <FaSlack className='Icon'/>
                        <FaStackOverflow className='Icon'/>
                        <FaTrello className='Icon'/>
                        <FaWindows className='Icon'/>
                        <FaLinux className='Icon'/>
                        <FaUbuntu className='Icon'/>
                        <FaWordpressSimple className='Icon'/>
                        <FaUnity className='Icon'/>
                    </div>
                </div>
                <div className='App-about'>
                    <h2>technologies i use</h2>
                    <div className='App-about-icons'>
                        <FaReact className='Icon'/>
                        <FaAngular className='Icon'/>
                        <FaVuejs className='Icon'/>
                        <FaDocker className='Icon'/>
                        <FaNodeJs className='Icon'/>
                        <FaSass className='Icon'/>
                        <DiDjango className='Icon'/>
                        <DiMongodb className='Icon'/>
                        <SiExpress className='Icon'/>
                        <SiFlask className='Icon'/>
                        <SiNextdotjs className='Icon'/>
                        <SiOpencv className='Icon'/>
                        <SiPug className='Icon'/>
                        <SiPytorch className='Icon'/>
                        <SiSvelte className='Icon'/>
                        <SiTailwindcss className='Icon'/>
                        <SiTensorflow className='Icon'/>
                        <SiZeromq className='Icon'/>
                        <SiWebgl className='Icon'/>
                        <SiOpengl className='Icon'/>
                        <SiAxios className='Icon'/>
                        <DiSqllite className='Icon'/>
                        <SiSfml className='Icon'/>
                        <SiDotenv className='Icon'/>
                        <SiMariadb className='Icon'/>
                    </div>
                </div>
                <div className='App-about'>
                    <h2>languages i know</h2>
                    <div className='App-about-icons'>
                        <FaPython className='Icon'/>
                        <FaCss3Alt className='Icon'/>
                        <FaHtml5 className='Icon'/>
                        <FaJava className='Icon'/>
                        <FaJsSquare className='Icon'/>
                        <SiCplusplus className='Icon'/>
                        <SiCsharp className='Icon'/>
                        <DiDlang className='Icon'/>
                        <DiGo className='Icon'/>
                        <SiKotlin className='Icon'/>
                        <SiCoffeescript className='Icon'/>
                        <SiOcaml className='Icon'/>
                        <DiMarkdown className='Icon'/>
                        <SiLatex className='Icon'/>
                        <SiTypescript className='Icon'/>
                        <SiRuby className='Icon'/>
                        <SiPerl className='Icon'/>
                        <SiPhp className='Icon'/>
                        <SiLua className='Icon'/>
                        <SiHaskell className='Icon'/>
                    </div>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
}

export default About;