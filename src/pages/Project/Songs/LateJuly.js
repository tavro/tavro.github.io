import React from 'react';

import Header from '../../../components/Header';

class LateJuly extends React.Component {
    render() {
        return (
        <div className="LateJuly">
	      <Header index={1} content={this.props.content} logged_in={this.props.logged_in}/>
	      <main>
	        <h2>Late July</h2>
	        <p>Description will come soon...</p>
	        <div class="paper">
	            <h3>Late July</h3>
	            <p>[Verse 1]</p>
	            <p>Bring me back to late July</p>
	            <p>Where our love forever lies</p>
	            <p>Will it ever shine so bright</p>
	            <p>Fill my heart with love tonight</p>
	            <p>[Chorus]</p>
	            <p>Bring me back to late July</p>
	            <p>Summersky, where swallows fly</p>
	            <p>Lovely place, no need to cry</p>
	            <p>Wake me up with tearless eyes</p>
	            <p>[Verse 2]</p>
	            <p>Bring me back to late July</p>
	            <p>No need to even question why</p>
	            <p>Please respond without a sigh</p>
	            <p>Love me love, or love will dry</p>
	            <p>[Chorus]</p>
	            <p>Bring me back to late July</p>
	            <p>Summersky, where swallows fly</p>
	            <p>Lovely place, no need to cry</p>
	            <p>Wake me up with tearless eyes</p>
	            <p>[Outro]</p>
	            <p>Bring me back to late July</p>
	            <p>Fill my heart with love tonight</p>
	            <p>Bring me back to late july</p>
	            <p>Wake me up with tearless eyes</p>
	        </div>
	      </main>
	</div>
        )
    }
}

export default LateJuly;