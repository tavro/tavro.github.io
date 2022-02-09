import React from 'react';

class LoginForm extends React.Component {
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
        if (username === "" || password === "") {
            this.setState({error: "Username or password field is empty"});
            return false;
        };
        this.setState({error: ""})
    }

    render() {
        return (
          <div className={`Login`}>
            <form onSubmit={e => this.props.handle_login(e, this.state)}>
                <h4>Login</h4>

                <div class="input-width">
                    <p>
                    <input id="username" placeholder="username" type="text" name="username" value={this.state.username} onChange={this.handle_change}/>
                    </p>
                    <p>
                    <input id="password" placeholder="password" type="password" name="password" value={this.state.password} onChange={this.handle_change}/>
                    </p>
                    <p>
                    <input type="submit" id="submit" value="Login" onClick={this.empty}/>
                    </p>
                </div>
                <p id="no-acc">Don't have an account? <span class="fake-button" onClick={this.props.toggle}>Sign Up</span></p>

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

export default LoginForm;