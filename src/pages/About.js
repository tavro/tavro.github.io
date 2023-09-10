import { FaAngular, FaNodeJs, FaPython, FaVuejs, FaSass, FaReact, FaCss3Alt, FaHtml5, FaJava, FaJsSquare, FaDocker } from "react-icons/fa";
import { DiDjango, DiSqllite, DiDlang, DiGo, DiMarkdown, DiMongodb } from "react-icons/di";
import { SiGmail, SiHaskell, SiLua, SiAxios, SiCoffeescript, SiCplusplus, SiCsharp, SiDotenv, SiExpress, SiFlask, SiKotlin, SiMariadb, SiNextdotjs, SiOcaml, SiOpencv, SiOpengl, SiPerl, SiPhp, SiPug, SiPytorch, SiRuby, SiSfml, SiSvelte, SiTailwindcss, SiTensorflow, SiTypescript, SiWebgl, SiZeromq } from "react-icons/si";
import { FaChrome, FaDiscord, FaFacebookSquare, FaFigma, FaFirefoxBrowser, FaGitSquare, FaGithub, FaGitlab, FaInstagram, FaJira, FaLinkedin, FaNpm, FaOpera, FaRaspberryPi, FaSlack, FaStackOverflow, FaTrello, FaUbuntu, FaUnity, FaWindows, FaWordpressSimple, FaLinux } from "react-icons/fa";

import profile from '../profile.jpg';

import './css/About.css';

import React, { useState, useEffect } from 'react';

import {
    Link
  } from "react-router-dom";

import Tooltip from "../components/Tooltip";

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
      <div className="App-about-wrapper">
      <main className='App-about-main'>
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
                        i am a passionate full-stack software developer. currently, i am in the final year of my computer science master's program, where i am honing my skills and expanding my knowledge. i thrive on learning new technologies and programming languages.
                    </p>
                    <p>
                        beyond my love for programming, i am a people person. i genuinely enjoy meeting new individuals and collaborating on various projects. i believe that building strong relationships not only fosters a supportive work environment but also fuels innovation and creativity.
                    </p>
                    <p>
                        while i have a broad interest in various aspects of software development, i have developed a particular fascination with compilers, language construction, and operating systems. 
                    </p>
                </div>
            </div>
        
            {/*
            <div className='App-about-wrapper'>
                <div className='App-about'>
                    <h2>tools i use</h2>
                    <div className='App-about-icons'>
                        <Tooltip title="Google Chrome" desc="A widely-used web browser known for its speed, stability, and extensive range of features.">
                            <FaChrome className='Icon'/>
                        </Tooltip>
                        <Tooltip title="Firefox" desc="A popular web browser that emphasizes privacy, customization, and open-source development.">
                            <FaFirefoxBrowser className='Icon'/>
                        </Tooltip>
                        <Tooltip title="Opera" desc="A feature-rich web browser that offers a unique blend of speed, security, and built-in tools.">
                            <FaOpera className='Icon'/>
                        </Tooltip>
                        <Tooltip title="Git" desc="A distributed version control system designed to efficiently track and manage changes in source code during software development projects.">
                            <FaGitSquare className='Icon'/>
                        </Tooltip>
                        <Tooltip title="GitHub" desc="A web-based platform that facilitates collaboration, version control, and hosting of software projects.">
                            <FaGithub className='Icon'/>
                        </Tooltip>
                        <Tooltip title="GitLab" desc="A complete web-based DevOps platform that offers a wide range of tools for version control.">
                            <FaGitlab className='Icon'/>
                        </Tooltip>
                        <Tooltip title="Jira" desc="A popular project management tool that enables teams to plan, track, and release software.">
                            <FaJira className='Icon'/>
                        </Tooltip>
                        <Tooltip title="Npm" desc="A package manager for JavaScript that allows developers to discover, install, and manage dependencies for their projects efficiently.">
                            <FaNpm className='Icon'/>
                        </Tooltip>
                        <Tooltip title="Figma" desc="A cloud-based design and prototyping tool that enables collaborative interface design, offering features like real-time collaboration and interactive prototyping.">
                            <FaFigma className='Icon'/>
                        </Tooltip>
                        <Tooltip title="Raspberry Pi" desc="A credit card-sized computer that empowers users to explore programming, electronics, and various projects with its low-cost, versatile, and customizable nature.">
                            <FaRaspberryPi className='Icon'/>
                        </Tooltip>
                        <Tooltip title="Slack" desc="A communication platform that enables teams to collaborate, share information, and streamline workflows in a user-friendly and efficient manner.">
                            <FaSlack className='Icon'/>
                        </Tooltip>
                        <Tooltip title="Stack Overflow" desc="A question and answer platform where developers can seek solutions, share knowledge, and collaborate on programming-related issues.">
                            <FaStackOverflow className='Icon'/>
                        </Tooltip>
                        <Tooltip title="Trello" desc="A visual project management tool that helps individuals and teams organize tasks, track progress, and streamline workflows through customizable boards and cards.">
                            <FaTrello className='Icon'/>
                        </Tooltip>
                        <Tooltip title="Windows" desc="A widely-used operating system developed by Microsoft.">
                            <FaWindows className='Icon'/>
                        </Tooltip>
                        <Tooltip title="Linux" desc="An open-source operating system kernel that powers a variety of Unix-like operating systems and provides a robust, customizable, and highly secure platform for computing.">
                            <FaLinux className='Icon'/>
                        </Tooltip>
                        <Tooltip title="Ubuntu" desc="A popular Linux distribution known for its user-friendly interface, extensive software support, and community-driven development.">
                            <FaUbuntu className='Icon'/>
                        </Tooltip>
                        <Tooltip title="Wordpress" desc="A versatile and widely-used content management system that allows users to create and manage websites, blogs, and online stores with ease.">
                            <FaWordpressSimple className='Icon'/>
                        </Tooltip>
                        <Tooltip title="Unity" desc="A powerful and popular game development platform that enables developers to create interactive and immersive experiences across multiple platforms.">
                            <FaUnity className='Icon'/>
                        </Tooltip>
                    </div>
                </div>
                <div className='App-about'>
                    <h2>technologies i use</h2>
                    <div className='App-about-icons'>
                        <Tooltip title="React" desc="">
                            <FaReact className='Icon'/>
                        </Tooltip>
                        <Tooltip title="Angular" desc="">
                            <FaAngular className='Icon'/>
                        </Tooltip>
                        <Tooltip title="Vue" desc="">
                            <FaVuejs className='Icon'/>
                        </Tooltip>
                        <Tooltip title="Docker" desc="">
                            <FaDocker className='Icon'/>
                        </Tooltip>
                        <Tooltip title="Node" desc="">
                            <FaNodeJs className='Icon'/>
                        </Tooltip>
                        <Tooltip title="Sass" desc="">
                            <FaSass className='Icon'/>
                        </Tooltip>
                        <Tooltip title="Django" desc="">
                            <DiDjango className='Icon'/>
                        </Tooltip>
                        <Tooltip title="MongoDB" desc="">
                            <DiMongodb className='Icon'/>
                        </Tooltip>
                        <Tooltip title="Express" desc="">
                            <SiExpress className='Icon'/>
                        </Tooltip>
                        <Tooltip title="Flask" desc="">
                            <SiFlask className='Icon'/>
                        </Tooltip>
                        <Tooltip title="Next" desc="">
                            <SiNextdotjs className='Icon'/>
                        </Tooltip>
                        <Tooltip title="OpenCV" desc="">
                            <SiOpencv className='Icon'/>
                        </Tooltip>
                        <Tooltip title="Pug" desc="">
                            <SiPug className='Icon'/>
                        </Tooltip>
                        <Tooltip title="Pytorch" desc="">
                            <SiPytorch className='Icon'/>
                        </Tooltip>
                        <Tooltip title="Svelte" desc="">
                            <SiSvelte className='Icon'/>
                        </Tooltip>
                        <Tooltip title="Tailwind" desc="">
                            <SiTailwindcss className='Icon'/>
                        </Tooltip>
                        <Tooltip title="Tensorflow" desc="">
                            <SiTensorflow className='Icon'/>
                        </Tooltip>
                        <Tooltip title="ZeroMQ" desc="">
                            <SiZeromq className='Icon'/>
                        </Tooltip>
                        <Tooltip title="WebGL" desc="">
                            <SiWebgl className='Icon'/>
                        </Tooltip>
                        <Tooltip title="OpenGL" desc="">
                            <SiOpengl className='Icon'/>
                        </Tooltip>
                        <Tooltip title="Axios" desc="">
                            <SiAxios className='Icon'/>
                        </Tooltip>
                        <Tooltip title="SQLite" desc="">
                            <DiSqllite className='Icon'/>
                        </Tooltip>
                        <Tooltip title="Sfml" desc="">
                            <SiSfml className='Icon'/>
                        </Tooltip>
                        <Tooltip title="Dotenv" desc="">
                            <SiDotenv className='Icon'/>
                        </Tooltip>
                        <Tooltip title="MariaDB" desc="">
                            <SiMariadb className='Icon'/>
                        </Tooltip>
                    </div>
                </div>
                <div className='App-about'>
                    <h2>languages i know</h2>
                    <div className='App-about-icons'>
                        <Tooltip title="Python" desc="A high-level programming language known for its simplicity, readability, and versatility.">
                            <FaPython className='Icon'/>
                        </Tooltip>
                        <Tooltip title="Css" desc="A stylesheet language used to describe the visual presentation of a web page, allowing developers to control the layout, design, and formatting of HTML elements.">
                            <FaCss3Alt className='Icon'/>
                        </Tooltip>
                        <Tooltip title="HTML" desc="The standard markup language used to structure and present content on the World Wide Web.">
                            <FaHtml5 className='Icon'/>
                        </Tooltip>
                        <Tooltip title="Java" desc="A widely-used, object-oriented programming language known for its platform independence, extensive libraries, and ability to build robust, scalable applications for various domains.">
                            <FaJava className='Icon'/>
                        </Tooltip>
                        <Tooltip title="JavaScript" desc="A versatile scripting language that allows developers to add dynamic and interactive elements to web pages, enhancing user experience and enabling client-side functionality.">
                            <FaJsSquare className='Icon'/>
                        </Tooltip>
                        <Tooltip title="C++" desc="A powerful, general-purpose programming language renowned for its efficiency, performance, and extensive capabilities in building a wide range of software applications.">
                            <SiCplusplus className='Icon'/>
                        </Tooltip>
                        <Tooltip title="C#" desc="A modern, object-oriented programming language developed by Microsoft that combines the power of C++ with the simplicity of Visual Basic.">
                            <SiCsharp className='Icon'/>
                        </Tooltip>
                        <Tooltip title="D" desc="A systems programming language that combines the efficiency and control of low-level languages with modern features, making it suitable for high-performance applications and software development.">
                            <DiDlang className='Icon'/>
                        </Tooltip>
                        <Tooltip title="Go" desc="A statically-typed, compiled programming language created by Google, designed for simplicity, efficiency, and concurrency in building scalable and reliable software applications.">
                            <DiGo className='Icon'/>
                        </Tooltip>
                        <Tooltip title="Kotlin" desc="A modern, statically-typed programming language that seamlessly interoperates with Java, known for its conciseness, safety features, and wide adoption in Android app development.">
                            <SiKotlin className='Icon'/>
                        </Tooltip>
                        <Tooltip title="CoffeeScript" desc="A programming language that compiles into JavaScript, offering cleaner and more concise syntax while retaining full compatibility with JavaScript frameworks and libraries.">
                            <SiCoffeescript className='Icon'/>
                        </Tooltip>
                        <Tooltip title="Ocaml" desc="A functional programming language with strong static typing, powerful type inference, and a focus on expressiveness, making it suitable for both academic research and industrial applications.">
                            <SiOcaml className='Icon'/>
                        </Tooltip>
                        <Tooltip title="Markdown" desc="A lightweight markup language used for formatting plain text documents, allowing easy conversion to HTML, while providing a simple and readable syntax.">
                            <DiMarkdown className='Icon'/>
                        </Tooltip>
                        <Tooltip title="TypeScript" desc="A statically-typed superset of JavaScript that enables developers to write more reliable and maintainable code by adding type annotations and modern language features to JavaScript projects.">
                            <SiTypescript className='Icon'/>
                        </Tooltip>
                        <Tooltip title="Ruby" desc="A dynamic, object-oriented programming language known for its elegant syntax, developer-friendly environment, and emphasis on simplicity and productivity.">
                            <SiRuby className='Icon'/>
                        </Tooltip>
                        <Tooltip title="Perl" desc="A versatile and expressive scripting language known for its powerful text manipulation capabilities, rich library ecosystem, and support for both procedural and object-oriented programming paradigms.">
                            <SiPerl className='Icon'/>
                        </Tooltip>
                        <Tooltip title="Php" desc="A popular server-side scripting language that enables the creation of dynamic web applications, offering a wide range of functionality, extensive community support, and seamless integration with various databases.">
                            <SiPhp className='Icon'/>
                        </Tooltip>
                        <Tooltip title="Lua" desc="A lightweight, embeddable scripting language known for its simplicity, speed, and flexibility, often used in game development and embedded systems for its ease of integration.">
                            <SiLua className='Icon'/>
                        </Tooltip>
                        <Tooltip title="Haskell" desc="A purely functional programming language known for its strong type system, elegant syntax, and focus on correctness and abstraction, making it suitable for academic research and developing high-quality software.">
                            <SiHaskell className='Icon'/>
                        </Tooltip>
                    </div>
                </div>
            </div>
            */}
      </main>
      </div>
    </div>
  );
}

export default About;