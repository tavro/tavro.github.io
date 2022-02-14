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
	            <p>Don't go babe</p>
	            <p>Where I cant be babe</p>
	            <p>Your heart babe</p>
	            <p>It's safe with me babe</p>
	            <p>[Verse 1]</p>
	            <p>Hold tight babe</p>
	            <p>Feels right babe</p>
	            <p>Dim light babe</p>
	            <p>Let's unite babe</p>
	            <p>[Chorus]</p>
	            <p>Don't go babe</p>
	            <p>Where I cant be babe</p>
	            <p>Your heart babe</p>
	            <p>It's safe with me babe</p>
	            <p>[Verse 2]</p>
	            <p>No clothes babe</p>
	            <p>Come close babe</p>
	            <p>Time slows babe</p>
	            <p>Let's expose babe</p>
	        </div>
	      </main>
	</div>
        )
    }
}

export default SafeWithMe;