import React from 'react';

import Header from '../../../components/Header';

class UpwindRowing extends React.Component {
    render() {
        return (
        <div className="UpwindRowing">
	      <Header index={1} content={this.props.content} logged_in={this.props.logged_in}/>
	      <main>
	        <h2>Upwind Rowing</h2>
	        <p>blah blah blah</p>
	        <div class="paper">
	            <h3>Upwind Rowing</h3>
	            <p>[Verse 1]</p>
	            <p>[Chorus]</p>
	            <p>[Bridge]</p>
	            <p>[Outro/Chorus]</p>
	        </div>
	      </main>
	</div>
        )
    }
}

export default UpwindRowing;