import './App.css';

import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Profile from './pages/Profile';

import Footer from './components/Footer';
import School from './pages/School';
import Work from './pages/Work';
import Projects from './pages/Projects';
import About from './pages/About';

import Games from './pages/Project/Games';
import Programs from './pages/Project/Programs';
import Music from './pages/Project/Music';
import Websites from './pages/Project/Websites';
import ProjectTemplate from './pages/ProjectTemplate';
import Rewind from './pages/Rewind';

import BeautyInTheMess from './pages/Project/Songs/BeautyInTheMess';
import GoldenDaffodil from './pages/Project/Songs/GoldenDaffodil';
import GoNowhere from './pages/Project/Songs/GoNowhere';
import InLoveIndeed from './pages/Project/Songs/InLoveIndeed';
import LateJuly from './pages/Project/Songs/LateJuly';
import RewindSong from './pages/Project/Songs/Rewind';
import SafeWithMe from './pages/Project/Songs/SafeWithMe';
import UpwindRowing from './pages/Project/Songs/UpwindRowing';

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

            <Route path="/games" component={Games} />
            <Route path="/programs" component={Programs} />
            <Route path="/music" component={Music} />
            <Route path="/websites" component={Websites} />

            <Route path="/retrocolors">
                <ProjectTemplate content="This game actually won a prize!" header="Retro Colors"/>
            </Route>

            <Route path="/partypenguin">
                <ProjectTemplate content="Send me your highscore!" header="Party Penguin"/>
            </Route>

            <Route path="/abandonedtech">
                <ProjectTemplate content="Thinking about remaking this..." header="Abandoned Technology"/>
            </Route>

            <Route path="/animaltrans">
                <ProjectTemplate content="Gamejams ftw!!" header="Animal Transmission"/>
            </Route>

            <Route path="/cofflang">
                <ProjectTemplate content="return(1337);" header="cofflang"/>
            </Route>

            <Route path="/staben">
                <ProjectTemplate content="STABEN ser dig" header="staben.info"/>
            </Route>

            <Route path="/dsektionen">
                <ProjectTemplate content="D, D, D, ..., D, D, D" header="d-sektionen.se"/>
            </Route>

            <Route path="/this">
                <ProjectTemplate content="Inception" header="isakhorvath.me"/>
            </Route>

            <Route path="/rewind">
                <Rewind songtitle="Golden Daffodil" songtext="blah blah blah" content="I said baby, baby, baby, ohhhhh" header="Rewind" description="Rewind is my debut album consisting out of eight songs."/>
            </Route>

            <Route path="/donsole">
                <ProjectTemplate content="01101000 01100001 01100011 01101011 01100101 01110010" header="Donsole"/>
            </Route>

            <Route path="/poemscript">
                <ProjectTemplate content="[Poem:Comic Sans] (Tavro) Nice" header="Poem Script"/>
            </Route>

            <Route path="/minigrep">
                <ProjectTemplate content="cargo run minigrep projects.txt" header="Mini Grep"/>
            </Route>

            <Route path="/scraper">
                <ProjectTemplate content="Don't use prnt.sc" header="Scraper"/>
            </Route>

            <Route path="/goldendaffodil" component={GoldenDaffodil} />
            <Route path="/safewithme" component={SafeWithMe} />
            <Route path="/gonowhere" component={GoNowhere} />
            <Route path="/beautyinthemess" component={BeautyInTheMess} />
            <Route path="/upwindrowing" component={UpwindRowing} />
            <Route path="/rewindsong" component={RewindSong} />
            <Route path="/latejuly" component={LateJuly} />
            <Route path="/inloveindeed" component={InLoveIndeed} />
          </Router>
          <Footer/>
        </div>
        );
    }
}

export default App;
