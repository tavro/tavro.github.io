import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Blog from './pages/Blog'
import EditPost from './pages/EditPost'
import NotFound from './pages/NotFound';
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
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/edit/:slug" element={<EditPost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
