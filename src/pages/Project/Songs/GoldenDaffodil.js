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
	            <p>By the water and the windmill</p>
	            <p>I found a golden daffodil</p>
	            <p>[Verse 1]</p>
	            <p>Not yellow, pink, red or white</p>
	            <p>Golden daffodil, do me right</p>
	            <p>I'll water, love and bring you light</p>
	            <p>Golden daffodil, grow tonight</p>
	            <p>[Chorus]</p>
	            <p>In the house on the hill</p>
	            <p>Where time stands still</p>
	            <p>It's only you and me</p>
	            <p>My golden daffodil</p>
	            <p>[Verse 2]</p>
	            <p></p>
	            <p></p>
	            <p></p>
	            <p></p>
	            <p>[Chorus]</p>
	            <p>In the house on the hill</p>
	            <p>Where time stands still</p>
	            <p>It's only you and me</p>
	            <p>My golden daffodil</p>
	            <p>[Verse 3]</p>
	            <p></p>
	            <p></p>
	            <p></p>
	            <p></p>
	            <p>[Outro]</p>
	            <p>My love and will</p>
	            <p>My golden daffodil</p>
	        </div>
	      </main>
	</div>
        )
    }
}

export default GoldenDaffodil;