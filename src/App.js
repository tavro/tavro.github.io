import './App.css';

import Footer from './components/Footer';
import Contact from './pages/Contact';
import School from './pages/School';
import Work from './pages/Work';
import Projects from './pages/Projects';
import About from './pages/About';

import {
  HashRouter as Router,
  Route,
} from "react-router-dom";

import React, {Component} from 'react';

class App extends Component {
    render() {
        return (
        <div className="App">
          <Router basename="/">
            <Route exact path="/">
                <About/>
            </Route>
            <Route path="/projects" component={Projects} />
            <Route path="/work" component={Work} />
            <Route path="/school" component={School} />
            <Route path="/contact" component={Contact} />
          </Router>
          <Footer/>
        </div>
        );
    }
}

export default App;
