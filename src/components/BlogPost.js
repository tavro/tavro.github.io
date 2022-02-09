import React from 'react';

class BlogPost extends React.Component {
    render() {
        return (
        <div className={`BlogPost`}>
	    <h2>{this.props.title}</h2>
	    <p>{this.props.body}</p>
        </div>
        )
    }
}

export default BlogPost;
