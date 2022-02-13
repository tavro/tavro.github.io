import React from 'react';

import Header from '../../../components/Header';

class InLoveIndeed extends React.Component {
    render() {
        return (
        <div className="InLoveIndeed">
	      <Header index={1} content={this.props.content} logged_in={this.props.logged_in}/>
	      <main>
	        <h2>In Love Indeed</h2>
	        <p>blah blah blah</p>
	        <div class="paper">
	            <h3>In Love Indeed</h3>
	            <p>[Intro]</p>
	            <p>[Chorus]</p>
	            <p>[Hook]</p>
	            <p>[Chorus]</p>
	            <p>[Bridge]</p>
	            <p>[Hook]</p>
	        </div>
	      </main>
	</div>
        )
    }
}

export default InLoveIndeed;