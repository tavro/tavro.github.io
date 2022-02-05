import '../App.css';

import Header from '../components/Header';

import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import MessageForm from '../components/MessageForm';
import LoginSignupForm from '../components/LoginSignupForm';

import React, {Component} from 'react';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logged_in: localStorage.getItem('token') && localStorage.getItem('token') != "undefined"? true : false,
            username: ""
        };
    }

    componentDidMount() {
        if (this.state.logged_in) {
          fetch('https://isakhorvath-backend.herokuapp.com/current_user/', {
            headers: {
              Authorization: `JWT ${localStorage.getItem('token')}`
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
            localStorage.setItem("token", json.token);
            this.setState({
                logged_in: true,
                username: json.username
            });
        });
    };

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
          <Header index={4} content="Feel free to contact me" logged_in={this.state.logged_in} handle_logout={this.handle_logout}/>
          <main>
            <h2>Contact Me</h2>
            {
            !this.state.username && !this.state.logged_in ?
            <div>
                <p>I'm currently rewriting this page from scratch, so the sign-in & up does not work at the moment.</p>
                <LoginSignupForm handle_login={this.handle_login} handle_signup={this.handle_signup}/>
            </div>
            :
            <div>
                <p>You are currently logged in as: <a>{this.state.username}</a></p>
                <MessageForm from={this.state.username}/>
            </div>
            }
          </main>
        </div>
        );
    }
}


export default Contact;
