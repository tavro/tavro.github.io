import React from 'react';

import Header from '../../../components/Header';

class GoNowhere extends React.Component {
    render() {
        return (
        <div className="GoNowhere">
	      <Header index={1} content={this.props.content} logged_in={this.props.logged_in}/>
	      <main>
	        <h2>Go Nowhere</h2>
	        <p>blah blah blah</p>
	        <div class="paper">
	            <h3>Go Nowhere</h3>
	            <p>[Intro]</p>
	            <p>[Chorus]</p>
	            <p>[Hook]</p>
	            <p>[Chorus]</p>
	            <p>[Hook]</p>
	        </div>
	      </main>
	</div>
        )
    }
}

export default GoNowhere;