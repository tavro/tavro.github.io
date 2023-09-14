import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import BlogPost from './components/BlogPost'

import './App.css';

import {
  HashRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
