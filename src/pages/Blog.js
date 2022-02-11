import React from 'react';

import Header from '../components/Header';
import BlogPost from '../components/BlogPost';

class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logged_in: localStorage.getItem('token') && localStorage.getItem('token') !== "undefined"? true : false,
            username: "",
            data: ""
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

        fetch("https://isakhorvath-backend.herokuapp.com/posts/", {
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

    handle_logout = () => {
        localStorage.removeItem("token");
        this.setState({logged_in: false, username:""});
    };

    render() {
        return (
        <div className="Blog">
	      <Header index={5} content="#influencer" logged_in={this.state.logged_in} handle_logout={this.handle_logout}/>
	      <main>
	        <h2>Blog posts</h2>
	        <p>I will write about random things I find interesting here occasionally.</p>
	        {
	        this.state.logged_in && (<p>You are currently logged in as: <p class="caption">{this.state.username}</p></p>)
	        }
	        {this.state.data && this.state.data.map(post => <BlogPost title={post.title} body={post.body} logged_in={this.state.logged_in}/>)}
	      </main>
	    </div>
        )
    }
}

export default Blog;