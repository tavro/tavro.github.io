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
        title: "my first blog post (again)",
        timestamp: "2023-05-18 20:39",
        category: "general",
        content: "i'm thrilled to share my very first blog post... again! previously, my blog was built using Svelte, a fantastic framework that served me well. however, as i built my new website, i wanted to unify the technologies and have everything in one place. that's when the idea of migrating my blog to React sparked! stay tuned for more engaging content and updates as my blog continues to evolve."
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
