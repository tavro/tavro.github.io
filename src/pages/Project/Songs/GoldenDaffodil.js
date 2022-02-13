import React from 'react';

import Header from '../../../components/Header';

class GoldenDaffodil extends React.Component {
    render() {
        return (
        <div className="GoldenDaffodil">
	      <Header index={1} content={this.props.content} logged_in={this.props.logged_in}/>
	      <main>
	        <h2>Golden Daffodil</h2>
	        <p>blah blah blah</p>
	        <div class="paper">
	            <h3>Golden Daffodil</h3>
	            <p>[Intro]</p>
	            <p>[Verse 1]</p>
	            <p>[Chorus]</p>
	            <p>[Verse 2]</p>
	            <p>[Chorus]</p>
	            <p>[Verse 3]</p>
	            <p>[Outro]</p>
	        </div>
	      </main>
	</div>
        )
    }
}

export default GoldenDaffodil;