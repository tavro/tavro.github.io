import React, { useState, useEffect } from 'react';

import './css/Blog.css';

import {
    Link
  } from "react-router-dom";

import PostPreview from '../components/PostPreview';

function Blog() {
    const [word, setWord] = useState("")

    useEffect(() => {
      printWord("ls blog posts -all", 100)
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
        title: "test post",
        timestamp: "2023-05-18 12:58",
        category: "computer science",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        title: "another test post",
        timestamp: "2023-05-18 13:04",
        category: "programming",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        title: "yet another test post",
        timestamp: "2023-05-18 13:15",
        category: "thoughts",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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
      <main className='App-blog-main'>
        <h3>> { word }<span className='App-blink'>_</span></h3>
        {blogPosts.map((blogPost) => <PostPreview post={blogPost}/>)}
      </main>
    </div>
  );
}

export default Blog;
