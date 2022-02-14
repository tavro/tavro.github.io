import React from 'react';

import Header from '../../../components/Header';

class InLoveIndeed extends React.Component {
    render() {
        return (
        <div className="InLoveIndeed">
	      <Header index={1} content={this.props.content} logged_in={this.props.logged_in}/>
	      <main>
	        <h2>In Love Indeed</h2>
	        <p>Description will come soon...</p>
	        <div class="paper">
	            <h3>In Love Indeed</h3>
	            <p>[Intro]</p>
	            <p>Let's consider me and you</p>
	            <p>Reconsider what to do</p>
	            <p>[Chorus]</p>
	            <p>Sadness comes then suddenly goes</p>
	            <p>When the music starts to beat</p>
	            <p>Happiness comes and suddenly grows</p>
	            <p>My favorite love songs on repeat</p>
	            <p>[Hook]</p>
	            <p>One kiss is all I need</p>
	            <p>I'm in love indeed</p>
	            <p>One hug is all I need</p>
	            <p>I'm in love indeed</p>
	            <p>[Chorus]</p>
	            <p>Sadness comes then suddenly goes</p>
	            <p>When the music starts to beat</p>
	            <p>Happiness comes and suddenly grows</p>
	            <p>My favorite love songs on repeat</p>
	            <p>[Bridge]</p>
	            <p>(Just be with me)</p>
	            <p>(Just breathe with me)</p>
	            <p>[Hook]</p>
	            <p>One kiss is all I need</p>
	            <p>I'm in love indeed</p>
	            <p>One hug is all I need</p>
	            <p>I'm in love indeed</p>
	        </div>
	      </main>
	</div>
        )
    }
}

export default InLoveIndeed;