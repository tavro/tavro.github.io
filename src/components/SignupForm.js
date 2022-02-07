import React, { useEffect } from 'react';

class SignupForm extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
          username: "",
          password: "",
          error: ""
        };
        this.empty = this.empty.bind(this);
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

    empty() {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        if (username == "" || password == "") {
            this.state.error = "Username or password field is empty"
            return false;
        };
        this.state.error = ""
    }

    render() {
        return (
          <div className={`Signup`}>
            <form onSubmit={e => this.props.handle_signup(e, this.state)}>
                <h4>Sign up</h4>
                <p>
                <input id="username" placeholder="username" type="text" name="username" value={this.state.username} onChange={this.handle_change}/>
                </p>
                <p>
                <input id="password" placeholder="password" type="password" name="password" value={this.state.password} onChange={this.handle_change}/>
                </p>
                <p>
                <input type="submit" id="submit" value="Signup" onClick={this.empty}/>
                </p>
                <p id="no-acc">Already have an account? <a onClick={this.props.toggle}>Login</a></p>

                {
                this.props.error ?
                <p class="errors">{this.props.error}</p>
                :
                <p class="errors">{this.state.error}</p>
                }
            </form>
          </div>
        )
    }
}

export default SignupForm;