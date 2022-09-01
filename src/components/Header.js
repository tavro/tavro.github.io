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
			        		<li class="nobullet"><span class={this.props.index === 0 ? "selected" : "tab"}>&nbsp;About </span></li>
			        	</Link>
			        	<Link to='/projects'>
			        		<li class="nobullet"><span class={this.props.index === 1 ? "selected" : "tab"}>&nbsp;Projects </span></li>
			        	</Link>
			        	<Link to='/work'>
			        		<li class="nobullet"><span class={this.props.index === 2 ? "selected" : "tab"}>&nbsp;Work </span></li>
			        	</Link>
			        	<Link to='/school'>
			        		<li class="nobullet"><span class={this.props.index === 3 ? "selected" : "tab"}>&nbsp;School </span></li>
			         	</Link>
		    	</ul>
		  	</header>
          </div>
        )
    }
}

export default Header;