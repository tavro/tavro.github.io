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
		    	<h1 className="unselectable"> <big>\o/</big> > { this.state.word } <span className="blink">_</span> </h1>
		        <ul className="tabs">
		        		<Link to='/'>
			        		<li className="nobullet"><span className={this.props.index === 0 ? "selected" : "tab"}>&nbsp;About </span></li>
			        	</Link>
			        	<Link to='/projects'>
			        		<li className="nobullet"><span className={this.props.index === 1 ? "selected" : "tab"}>&nbsp;Projects </span></li>
			        	</Link>
                        <a href='https://www.isakhorvath.me/digital-cv'>
                            <li className="nobullet"><span className="tab">&nbsp;Work </span></li>
                        </a>
			        	<Link to='/school'>
			        		<li className="nobullet"><span className={this.props.index === 3 ? "selected" : "tab"}>&nbsp;School </span></li>
			         	</Link>
                        <a href='https://www.isakhorvath.me/tavro-blog-svelte'>
                            <li className="nobullet"><span className="tab">&nbsp;Blog </span></li>
                        </a>
		    	</ul>
		  	</header>
          </div>
        )
    }
}

export default Header;