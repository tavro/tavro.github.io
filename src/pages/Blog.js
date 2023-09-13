import React, { useState, useEffect } from 'react';

import './css/Blog.css';

import {
    Link
  } from "react-router-dom";
  
function Blog() {
    const [word, setWord] = useState("")

    useEffect(() => {
      printWord("ls blog posts", 100)
    }, [])
  
    const delay = ms => new Promise(res => setTimeout(res, ms));
    const printWord = async (word, time) => {
      for (let i = 0; i < word.length+1; i++) {
          await delay(time)
          setWord(word.substring(0, i))
      }
    }

  const blogPosts = [
    {
        title: "my first blog post (again)",
        timestamp: "2023-05-18 20:39",
        date: "2023-05-18",
        time: "20:39",
        category: "general",
        content: "...",
        slug: "first-blog-post"
    }
  ]
  
  return (
    <div className="App">
      <header className='App-header'>
        <div className='App-nav-wrapper'>
          <Link to="/" className="App-link">
            home
          </Link>
        </div>
        <div className='App-nav-wrapper'>
          <Link to="/about" className="App-link">
            about
          </Link>
        </div>
        <div className='App-nav-wrapper'>
          <a id="App-nav-selected">> blog</a>
        </div>
      </header>
        <main className='Main'>
          <div className='Center-Wrapper'>
            <h3>> { word }<span className='App-blink'>_</span></h3>
            <ul>
              {blogPosts.map((blogPost) => 
              <li><p><span>{blogPost.date}</span> <span className='App-blogpost-title'><Link to={"/blog/" + blogPost.slug}>{blogPost.title}</Link></span></p></li>
              )}
            </ul>
          </div>
        </main>
    </div>
  );
}

export default Blog;
