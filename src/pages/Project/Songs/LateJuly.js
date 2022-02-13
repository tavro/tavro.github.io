import React from 'react';

import Header from '../../../components/Header';

class LateJuly extends React.Component {
    render() {
        return (
        <div className="LateJuly">
	      <Header index={1} content={this.props.content} logged_in={this.props.logged_in}/>
	      <main>
	        <h2>Late July</h2>
	        <p>blah blah blah</p>
	        <div class="paper">
	            <h3>Late July</h3>
	            <p>[Verse 1]</p>
	            <p>[Chorus]</p>
	            <p>[Verse 2]</p>
	            <p>[Chorus]</p>
	            <p>[Outro]</p>
	        </div>
	      </main>
	</div>
        )
    }
}

export default LateJuly;