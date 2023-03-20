import React from 'react';

class Tag extends React.Component {
    render() {
        return ( 
        <div className={`Tag`}>
	        <p>{this.props.text}</p>
        </div>
        )
    }
}

export default Tag;
