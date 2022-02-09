import React from 'react';

import Header from '../components/Header';
import BlogPost from '../components/BlogPost';

class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ""
        };
    }

    componentDidMount() {
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

    render() {
        return (
        <div className="Blog">
	      <Header index={5} content="#influencer" logged_in={this.props.logged_in}/>
	      <main>
	        <h2>Blog posts</h2>
	        <p>I will write about random things I find interesting here occasionally.</p>
	        {this.state.data && this.state.data.map(post => <BlogPost title={post.title} body={post.body}/>)}
	      </main>
	    </div>
        )
    }
}

export default Blog;