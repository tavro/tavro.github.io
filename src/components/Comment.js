import React from 'react';

class Comment extends React.Component {
    render() {
        return (
        <div className={`Comment`}>
            <div class="content-body">
	            <p class="user">@{this.props.user}:</p>
	            <p class="text">{this.props.text}</p>
	        </div>
        </div>
        )
    }
}

export default Comment;
