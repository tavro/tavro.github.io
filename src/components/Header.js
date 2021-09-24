import React from 'react';

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
			        	<li class="nobullet"><a href="/" class={this.props.index === 0 ? "selected" : "tab"}> About </a></li>
			        	<li class="nobullet"><a href="/projects" class={this.props.index === 1 ? "selected" : "tab"}> Projects </a></li>
			        	<li class="nobullet"><a href="/work" class={this.props.index === 2 ? "selected" : "tab"}> Work </a></li>
			        	<li class="nobullet"><a href="/school" class={this.props.index === 3 ? "selected" : "tab"}> School </a></li>
			         	<li class="nobullet"><a href="/contact" class={this.props.index === 4 ? "selected" : "tab"}> Contact </a></li>
		    	</ul>
		  	</header>
          </div>
        )
    }
}

export default Header;