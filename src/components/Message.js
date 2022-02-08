import React from 'react';

class Message extends React.Component {
    render() {
        return (
        <div className={`Message`}>
            <h3>Message to {this.props.to}</h3>
            <p id="sub">{this.props.subject}</p>
            <p id="msg">{this.props.message}</p>
        </div>
        )
    }
}

export default Message;
