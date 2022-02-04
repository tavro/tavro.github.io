import React, { useEffect } from 'react';

import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

class LoginSignupForm extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
          login: true
        };
        this.toggle_display = this.toggle_display.bind(this);
    }

    toggle_display() {
        this.setState({
            login: !this.state.login,
        });
    }

    render() {
        return (
          <div className={`LoginSignup`}>
            {
            this.state.login ?
            <div>
                <LoginForm handle_login={this.props.handle_login} toggle={this.toggle_display} />
            </div> :
            <div>
                <SignupForm handle_signup={this.props.handle_signup} toggle={this.toggle_display}/>
            </div>
            }
          </div>
        )
    }
}

export default LoginSignupForm;