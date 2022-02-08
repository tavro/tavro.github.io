import React from 'react';

import Header from '../components/Header';
import Tag from '../components/Tag';

class About extends React.Component {
    render() {
	const languages = ["Assembly", "C", "C#", "C++", "CSS", "D", "Dart", "Go", "Python", "Perl", "Pascal", "PHP", "Rust", "R", "Ruby", "Java", "JavaScript", "Lua", "Common Lisp", "Haskell", "HTML"];
        return (
        <div className="About">
	      <Header index={0} content="Hey, this is me, Isak" logged_in={this.props.logged_in}/>
	      <main>
	        <h2>About Me</h2>
	        <p>I'm a student from Sweden currently studying Computer Science and Software Engineering at Linköping University</p>
	        <img alt="profile" src={'/profile.jpg'} class="nondragable"/>
	        <p class="caption">Me hanging out with the Idégran</p>
		  <div className="Tags">
		      <h2>Programming Languages I Know</h2>
		<div className="Langs">
		{
		languages.map((lang) => (
		    <Tag text={lang}/>
		))
		}
		</div>
		</div>
	      </main>
	</div>
        )
    }
}

export default About;
