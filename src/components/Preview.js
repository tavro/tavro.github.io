import React from 'react';

class Preview extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return ( 
        <div className={`Preview`}>
	    <p>{this.props.title}</p>
	    <img src={this.props.img}/>
        </div>
        )
    }
}

export default Preview;
