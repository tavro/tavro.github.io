import React, { useEffect } from 'react';

class LoginForm extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
          username: "",
          password: ""
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
          <div className={`Login`}>
            <form onSubmit={e => this.props.handle_login(e, this.state)}>
                <h4>Login</h4>
                <p>
                <label htmlFor="username">Username: </label>
                <input type="text" name="username" value={this.state.username} onChange={this.handle_change}/>
                </p>
                <p>
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" value={this.state.password} onChange={this.handle_change}/>
                </p>
                <p>
                <input type="submit" id="submit" value="Login"/>
                </p>
                <p id="no-acc">Don't have an account? <a onClick={this.props.toggle}>Sign Up</a></p>
            </form>
          </div>
        )
    }
}

export default LoginForm;