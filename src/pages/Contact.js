import '../App.css';

import Header from '../components/Header';

import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import MessageForm from '../components/MessageForm';
import LoginSignupForm from '../components/LoginSignupForm';
import Message from '../components/Message';

import useSWR from 'swr';

import React, {Component} from 'react';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logged_in: localStorage.getItem('token') && localStorage.getItem('token') != "undefined"? true : false,
            username: "",
            data: "",
            error: ""
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

        fetch("https://isakhorvath-backend.herokuapp.com/messages/", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res => res.json()).then(json => {
            this.setState({
                data: json,
            });
        }).catch(err => {
        throw new Error(err)
        });
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
        }).catch(err => {
            this.setState(
                {error: String(err)}
            );
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
        this.state.error = err
        throw new Error(err)
        });
    };

    handle_message = (e, data) => {
        e.preventDefault();
        fetch("https://isakhorvath-backend.herokuapp.com/messages/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
    };

    handle_logout = () => {
        localStorage.removeItem("token");
        this.setState({logged_in: false, username:""});
    };

    get_messages() {

    }

    render() {
        return (
        <div className="Contact">
          <Header index={4} content="Feel free to contact me" logged_in={this.state.logged_in} handle_logout={this.handle_logout}/>
          <main>
            <h2>Contact Me</h2>
            {
            !this.state.username || this.state.username.includes("This field may not be blank.") || !this.state.logged_in ?
            <div>
                <p>Feel free and create an account and contact me about anything.</p>
                <LoginSignupForm handle_login={this.handle_login} handle_signup={this.handle_signup} error={this.state.error}/>
            </div>
            :
            <div>
                <p>You are currently logged in as: <a>{this.state.username}</a></p>
                <MessageForm from={this.state.username} handle_message={this.handle_message}/>
                <h2>Recieved messages:</h2>
                {this.state.data && this.state.data.map(msg => (msg.to_user == this.state.username && (<Message subject={msg.subject} message={msg.message} to={msg.to_user}/>)))}
                <h2>Sent messages:</h2>
                {this.state.data && this.state.data.map(msg => (msg.from_user == this.state.username && (<Message subject={msg.subject} message={msg.message} to={msg.to_user}/>)))}
                <br/><br/><br/>
            </div>
            }
          </main>
        </div>
        );
    }
}


export default Contact;
