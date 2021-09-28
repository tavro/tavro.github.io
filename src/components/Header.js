import React from 'react';

import {
  Link,
} from "react-router-dom";

class Header extends React.Component {
	constructor(props) {
        super(props);
    }

    render() {
        return ( 
          <div className={`Header`}>
          	<header>
		    	<h1 class="unselectable"> <big>\o/</big> > Hey, this is me, Isak_ </h1>
		        <ul class="tabs">
		        		<Link to='/'>
			        		<li class="nobullet"><a class={this.props.index === 0 ? "selected" : "tab"}> About </a></li>
			        	</Link>
			        	<Link to='/projects'>
			        		<li class="nobullet"><a class={this.props.index === 1 ? "selected" : "tab"}> Projects </a></li>
			        	</Link>
			        	<Link to='/work'>
			        		<li class="nobullet"><a class={this.props.index === 2 ? "selected" : "tab"}> Work </a></li>
			        	</Link>
			        	<Link to='/school'>
			        		<li class="nobullet"><a class={this.props.index === 3 ? "selected" : "tab"}> School </a></li>
			         	</Link>
			         	<Link to='/contact'>
			         		<li class="nobullet"><a class={this.props.index === 4 ? "selected" : "tab"}> Contact </a></li>
		    			</Link>
		    	</ul>
		  	</header>
          </div>
        )
    }
}

export default Header;