import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import School from './pages/School';
import Work from './pages/Work';
import Projects from './pages/Projects';
import About from './pages/About';

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/work" component={Work} />
        <Route path="/school" component={School} />
        <Route path="/contact" component={Contact} />
      </Router>

    </div>
  );
}

export default App;
