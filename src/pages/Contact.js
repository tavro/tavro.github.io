import '../App.css';

import Header from '../components/Header';

import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import LoginSignupForm from '../components/LoginSignupForm';


import React, {Component} from 'react';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logged_in: false,
            username: ""
        };
    }

    handle_login = (e, data) => {
        e.preventDefault();
        fetch("http://isakhorvath-backend.herokuapp.com/current_user/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json()).then(json => {
            localStorage.setItem("token", json.token);
            this.setState({
                logged_in: true,
                username: json.username
            });
        });
    };

    handle_signup = (e, data) => {
        e.preventDefault();
        fetch("http://isakhorvath-backend.herokuapp.com/users/", {
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
        throw new Error(err)
        });
    };

    handle_logout = () => {
        localStorage.removeItem("token");
        this.setState({logged_in: false, username:""});
    };

    render() {
        return (
        <div className="Contact">
          <Header index={4} content="Feel free to contact me"/>
          <main>
            <h2>Contact Me</h2>
            <p>I'm currently rewriting this page from scratch, so the sign-in & up does not work at the moment.</p>
            {
            !this.state.username ?
            <div>
                <LoginSignupForm handle_login={this.handle_login} handle_signup={this.handle_signup}/>
            </div>
            : <p><a>{this.state.username}</a></p>
            }
          </main>
        </div>
        );
    }
}


export default Contact;
