import React from 'react';

import Header from '../components/Header';

import LoginSignupForm from '../components/LoginSignupForm';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logged_in: localStorage.getItem('token') && localStorage.getItem('token') !== "undefined"? true : false,
            username: "",
            data: "",
            error: ""
        };
    }

    componentDidMount() {
        if (this.state.logged_in) {
          fetch('https://isakhorvath-backend.herokuapp.com/user/', {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
            }
          })
            .then(res => res.json())
            .then(json => {
              this.setState({ username: json.username });
            });
        }
    }

    handle_login = (e, data) => {
        e.preventDefault();
        fetch("https://isakhorvath-backend.herokuapp.com/current_user/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json()).then(json => {
            this.get_token(e, data)
            this.setState({
                logged_in: true,
                username: json.username
            });
        }).catch(err => {
            this.setState(
                {error: String(err)}
            );
        });
    };

    get_token = (e, data) => {
        fetch("https://isakhorvath-backend.herokuapp.com/token-auth/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json()).then(json => {
            localStorage.setItem("token", json.access);
        });
    }

    handle_signup = (e, data) => {
        e.preventDefault();
        fetch("https://isakhorvath-backend.herokuapp.com/users/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then(res => res.json()).then(json => {
            localStorage.setItem("token", json.token);
            this.setState({
                logged_in: true,
                username: json.username
            });
        }).catch(err => {
        this.setState({error: err});
        throw new Error(err)
        });
    };

    handle_logout = () => {
        localStorage.removeItem("token");
        this.setState({logged_in: false, username:""});
    };

    render() {
        return (
        <div className="Profile">
	      <Header index={6} content="I'm glad to have you on my site :D" logged_in={this.state.logged_in} handle_logout={this.handle_logout}/>
	      <main>
	        {
	        !this.state.logged_in ?
	        <div>
	            <p>Feel free to login or create an account!</p>
	            <LoginSignupForm handle_login={this.handle_login} handle_signup={this.handle_signup} error={this.state.error}/>
	        </div>
	        :
	        <div>
                <p>You are currently logged in as: <p class="caption">{this.state.username}</p></p>
	        </div>
	        }
	      </main>
	    </div>
        )
    }
}

export default Profile;
