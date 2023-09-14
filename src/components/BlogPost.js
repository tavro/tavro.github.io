import {
    Link
  } from "react-router-dom";

import './css/BlogPost.css';

import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';

import SyntaxHighlighter from 'react-syntax-highlighter';

import { darcula as style } from 'react-syntax-highlighter/dist/esm/styles/hljs';
/*
favorites:
1 - darcula
2 - gruvboxDark
3 - a11yDark
dracula
dark

hopscotch
nord
nightOwl
gruvboxLight
tomorrow
*/

function BlogPost() {
  const { slug } = useParams();

  const posts = {
    'first-blog-post': {
      title: "my first blog post (again)",
      content: 'i\'m thrilled to share my very first blog post... again! previously, my blog was built using Svelte, a fantastic framework that served me well.\nhowever, as i built my new website, i wanted to unify the technologies and have everything in one place. that\'s when the idea of migrating my blog to React sparked!\nstay tuned for more engaging content and updates as my blog continues to evolve.',
      category: 'general',
      date: '2023-05-18',
      time: '20:39',
      tags: ['general']
    },
    'new-blog-features': {
      title: 'new blog features',
      content: 'i\'m excited to share the newly implemented features for this blog!\n## features\n### tags and categories\nthis will allow me to group posts together and make it easier for readers to find related content or search for specific blog posts or topics. \nhowever, the search queries for this is not yet implemented.\n### syntax highlighting\nhopefully this will improve the readability of code snippets in my posts. see example below:\n\n```int array[2] { };\nint (*fun(int x, int y))[2] {\n\tarray[0] = x;\n\tarray[1] = y;\n\treturn &array;\n}\n\nint main() {\n\tint (*a)[2] { fun(1, 2) };\n\tcout << (*a)[0] + (*a)[1] << endl;\n}\n',
      category: 'web development',
      date: '2023-09-13',
      time: '17:06',
      tags: ['programming', 'web development', 'features', 'projects']
    }
  }

  function code({ className, ...props }) {
    return <SyntaxHighlighter language="cpp" PreTag="div" {...props} style={style} />
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
          <Link to="/about" className="App-link">
            about
          </Link>
        </div>
        <div className='App-nav-wrapper'>
          <a id="App-nav-selected">> blog</a>
        </div>
      </header>
      <main className='Main'>
        <div className="Post-Header">
          <h1 className="Post-Title">{posts[slug].title}</h1>
          <hr/>
          <p className="Post-Info">blog post about <a href="#" className="Category-Link">{posts[slug].category}</a> posted {posts[slug].date} at {posts[slug].time}</p>
        </div>
        <div className="Mdx-Styling">
          <ReactMarkdown components={{ code }}>{posts[slug].content}</ReactMarkdown>
        </div>
        <div className="Post-Tags">
          <hr/>
          {posts[slug].tags.map((tag) => <a href="#" className="Tag-Link">{tag} </a>)}
        </div>
      </main>
    </div>
  );
}

export default BlogPost;
