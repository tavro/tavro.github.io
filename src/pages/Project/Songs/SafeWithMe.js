import React from 'react';

import Header from '../../../components/Header';

class SafeWithMe extends React.Component {
    render() {
        return (
        <div className="SafeWithMe">
	      <Header index={1} content={this.props.content} logged_in={this.props.logged_in}/>
	      <main>
	        <h2>Safe With Me</h2>
	        <p>blah blah blah</p>
	        <div class="paper">
	            <h3>Safe With Me</h3>
	            <p>[Chorus]</p>
	            <p>[Verse 1]</p>
	            <p>[Chorus]</p>
	            <p>[Verse 2]</p>
	        </div>
	      </main>
	</div>
        )
    }
}

export default SafeWithMe;