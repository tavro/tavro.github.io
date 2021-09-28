import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import Tag from '../components/Tag';

class About extends React.Component {
    render() {
	const languages = ["Assembly", "C", "C#", "C++", "CSS", "D", "Dart", "Go", "Python", "Perl", "Pascal", "PHP", "Rust", "R", "Ruby", "Java", "JavaScript", "Lua", "Common Lisp", "Haskell", "HTML"];
        return ( 
        <div className="About">
	      <Header index={0}/>
	      <main>
	        <h2>About Me</h2>
	        <p>I'm a software engineering student from Sweden.</p>
	        <img src={'/profile.jpg'} class="nondragable"/>
	        <p class="caption">Me hanging out with the Idégran</p>
		
		  <div className="Tags">
		      <h2>Programming Languages I Know</h2>
		{
		languages.map((lang) => (
		    <Tag text={lang}/>
		))
		}
		</div>
	      </main>
	      <Footer/>
	</div>
        )
    }
}

export default About;
