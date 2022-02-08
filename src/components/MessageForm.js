import React from 'react';

class MessageForm extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
          from_user: String(this.props.from),
          subject: "",
          message: ""
        };
    }

    handle_change = e => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState(prevstate => {
            const newstate = { ...prevstate };
            newstate[name] = value;
            return newstate;
        });
    };

    render() {
        return (
          <div className={`MessageForm`}>
            <form id="msgForm" onSubmit={e => this.props.handle_message(e, this.state)}>
                <h4>Send Message</h4>
                <p>
                <input type="text" name="subject" placeholder="Subject..." value={this.state.subject} onChange={this.handle_change}/>
                </p>
                <p>
                <textarea resize = "none" rows = "5" cols = "30" name="message" placeholder="Message..." value={this.state.message} onChange={this.handle_change}/>
                </p>
                <p>
                <input type="submit" id="submit" value="Send"/>
                </p>
            </form>
          </div>
        )
    }
}

export default MessageForm;