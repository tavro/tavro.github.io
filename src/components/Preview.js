import React from 'react';

import {
  Link,
} from "react-router-dom";

class Preview extends React.Component {
    render() {
        return ( 
        <div className={`Preview`}>
	        <p>{this.props.title}</p>
	        <img alt="preview" src={this.props.img}/>
          <Link to={this.props.url}>
	          <p>See more</p>
          </Link>
        </div>
        )
    }
}

export default Preview;
