import React from 'react';
import {
  Link,
} from "react-router-dom";

class Header extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
          word: ""
        };   
    }

    printWord = (word, time) => {
        let index = 0;

        for (let letter of word) {
            index++;

            setTimeout(() => {
                this.setState((prevState) => ({
                    word: prevState.word + letter
                }));
            }, index*time);
        }
    }

	componentDidMount() {
	    this.printWord(String(this.props.content), 50);
	}

    render() {
        return ( 
          <div className={`Header`}>
          	<header>
		    	<h1 class="unselectable"> <big>\o/</big> > { this.state.word } <span class="blink">_</span> </h1>
		        <ul class="tabs">
		        		<Link to='/'>
			        		<li class="nobullet"><a class={this.props.index === 0 ? "selected" : "tab"}>&nbsp;About </a></li>
			        	</Link>
			        	<Link to='/projects'>
			        		<li class="nobullet"><a class={this.props.index === 1 ? "selected" : "tab"}>&nbsp;Projects </a></li>
			        	</Link>
			        	<Link to='/work'>
			        		<li class="nobullet"><a class={this.props.index === 2 ? "selected" : "tab"}>&nbsp;Work </a></li>
			        	</Link>
			        	<Link to='/school'>
			        		<li class="nobullet"><a class={this.props.index === 3 ? "selected" : "tab"}>&nbsp;School </a></li>
			         	</Link>
			         	<Link to='/contact'>
			         		<li class="nobullet"><a class={this.props.index === 4 ? "selected" : "tab"}>&nbsp;Contact&nbsp;</a></li>
		    			</Link>
		    			{
		    			this.props.logged_in ?
		    			<div>
		    			    <Link to='/contact'>
			         		    <li class="nobullet"><a class="tab" onClick={this.props.handle_logout}>&nbsp;Log out&nbsp;</a></li>
		    			    </Link>
		    			</div> :
		    			<div></div>
		    			}
		    	</ul>
		  	</header>
          </div>
        )
    }
}

export default Header;