import '../App.css';

import Header from '../components/Header';

import MessageForm from '../components/MessageForm';
import Message from '../components/Message';

import React, {Component} from 'react';

import {
  Link,
} from "react-router-dom";

class Contact extends Component {
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

    render() {
        return (
        <div className="Contact">
          <Header index={4} content="Feel free to contact me" logged_in={this.state.logged_in} handle_logout={this.handle_logout}/>
          <main>
            <h2>Contact Me</h2>
            {
            !this.state.username || this.state.username.includes("This field may not be blank.") || !this.state.logged_in ?
            <div>
                <p>You have to <Link to='/profile'>login</Link> in order to contact me.</p>
            </div>
            :
            <div>
                <p>You are currently logged in as: <p class="caption">{this.state.username}</p></p>
                <MessageForm from={this.state.username} handle_message={this.handle_message}/>
                {this.state.data && this.state.data.map(msg => (this.state.username === "isakhorvath" && msg.to_user === this.state.username && (<div><Message subject={msg.subject} message={msg.message} to={msg.to_user}/>
                <div class="respond-field">
                    <input id="respondfield" placeholder="response..." type="text" name="body"/>
                    <input type="submit" id="respondsubmit" value="Respond"/>
                </div>
                </div>)))}
                <h2>Sent messages:</h2>
                {this.state.data && this.state.data.map(msg => (msg.from_user === this.state.username && (<Message subject={msg.subject} message={msg.message} to={msg.to_user}/>)))}
                <br/><br/><br/>
            </div>
            }
          </main>
        </div>
        );
    }
}


export default Contact;
