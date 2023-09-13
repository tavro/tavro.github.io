import {
    Link
  } from "react-router-dom";

import './css/BlogPost.css';

import ReactMarkdown from 'react-markdown';
  
function BlogPost() {
  // this will be automatically fetched from server 
  // using slug passed from parent component at a later point
  const mdxContent = `
  ### my first blog post (again)

  i'm thrilled to share my very first blog post... again! previously, my blog was built using Svelte, a fantastic framework that served me well. 
  however, as i built my new website, i wanted to unify the technologies and have everything in one place. that's when the idea of migrating my blog to React sparked! 
  stay tuned for more engaging content and updates as my blog continues to evolve.
  `;

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
        <div className="Mdx-Styling">
          <ReactMarkdown>{mdxContent}</ReactMarkdown>
        </div>
      </main>
    </div>
  );
}

export default BlogPost;
