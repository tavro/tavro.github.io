import './App.css';

import Footer from './components/Footer';
import Contact from './pages/Contact';
import School from './pages/School';
import Work from './pages/Work';
import Projects from './pages/Projects';
import About from './pages/About';

import Games from './pages/Project/Games';
import Programs from './pages/Project/Programs';
import Music from './pages/Project/Music';
import Websites from './pages/Project/Websites';

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

            <Route path="/games" component={Games} />
            <Route path="/programs" component={Programs} />
            <Route path="/music" component={Music} />
            <Route path="/websites" component={Websites} />
          </Router>
          <Footer/>
        </div>
        );
    }
}

export default App;
