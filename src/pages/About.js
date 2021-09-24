import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import profile from '../images/profile.jpg';

class About extends React.Component {
    render() {
        return ( 
        <div>
	      <Header index={0}/>
	      <main>
	        <h2>About Me</h2>
	        <p>I'm a software engineering student from Sweden.</p>
	        <img src={profile} class="nondragable"/>
	        <p class="caption">Me hanging out with the Idégran</p>
	      </main>
	      <Footer/>
	    </div>
        )
    }
}

export default About;