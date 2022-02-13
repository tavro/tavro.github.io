import React from 'react';

import Header from '../components/Header';

import {
  Link,
} from "react-router-dom";

class Rewind extends React.Component {
    render() {
        return (
        <div className="Rewind">
	      <Header index={1} content={this.props.content} logged_in={this.props.logged_in}/>
	      <main>
	        <h2>{this.props.header}</h2>
	        <p>{this.props.description}</p>
	        <ol>
	            <li><Link to='/goldendaffodil'>Golden Daffodil</Link></li>
	            <li><Link to='/safewithme'>Safe With Me</Link></li>
	            <li><Link to='/gonowhere'>Go Nowhere</Link></li>
	            <li><Link to='/beautyinthemess'>Beauty In The Mess</Link></li>
	            <li><Link to='/upwindrowing'>Upwind Rowing</Link></li>
	            <li><Link to='/rewindsong'>Rewind</Link></li>
	            <li><Link to='/latejuly'>Late July</Link></li>
	            <li><Link to='/inloveindeed'>In Love Indeed</Link></li>
	        </ol>
	      </main>
	</div>
        )
    }
}

export default Rewind;