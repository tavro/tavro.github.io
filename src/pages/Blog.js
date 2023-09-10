import React, { useState, useEffect } from 'react';

import './css/Blog.css';

import {
    Link
  } from "react-router-dom";

import PostPreview from '../components/PostPreview';

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
      title: "a review of my courses (so far)",
      timestamp: "2023-09-10 17:19",
      date: "2023-09-10",
      time: "17:19",
      category: "university",
      content: "..."
    },
    {
        title: "my first blog post (again)",
        timestamp: "2023-05-18 20:39",
        date: "2023-05-18",
        time: "20:39",
        category: "general",
        content: "..."
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
      <div className='App-blog-wrapper'>
        <main className='App-blog-main'>
          <h3>> { word }<span className='App-blink'>_</span></h3>
          <ul>
            {blogPosts.map((blogPost) => 
            <li><p><span>{blogPost.date}</span> <span className='App-blogpost-title'><Link to="/">{blogPost.title}</Link></span></p></li>
            )}
          </ul>
          {/*blogPosts.map((blogPost) => <PostPreview post={blogPost}/>)*/}
        </main>
      </div>
    </div>
  );
}

export default Blog;
