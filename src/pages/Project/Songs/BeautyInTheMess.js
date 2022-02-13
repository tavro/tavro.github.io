import React from 'react';

import Header from '../../../components/Header';

class BeautyInTheMess extends React.Component {
    render() {
        return (
        <div className="BeautyInTheMess">
	      <Header index={1} content={this.props.content} logged_in={this.props.logged_in}/>
	      <main>
	        <h2>Beauty In The Mess</h2>
	        <p>blah blah blah</p>
	        <div class="paper">
	            <h3>Beauty In The Mess</h3>
	            <p>[Verse 1]</p>
	            <p>[Chorus]</p>
	            <p>[Verse 2]</p>
	            <p>[Chorus]</p>
	        </div>
	      </main>
	</div>
        )
    }
}

export default BeautyInTheMess;