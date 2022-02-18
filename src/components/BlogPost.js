import React from 'react';
import { AiOutlineLike, AiFillLike, AiOutlineDislike, AiFillDislike, AiOutlineComment} from "react-icons/ai";
import Comment from './Comment';

class BlogPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: "",
            post_id: this.props.post_id,
            username: this.props.user,
            has_liked: false,
            likes: 0,
            liked_by: [],
            comments: 0
        };

    }

    componentDidMount() {
        fetch("https://isakhorvath-backend.herokuapp.com/comments/", {
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

        fetch("https://isakhorvath-backend.herokuapp.com/like/" + this.state.post_id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res => res.json()).then(json => {
            this.setState({
                likes: json.likes,
                liked_by: json.liked_by
            });
        }).catch(err => {
        throw new Error(err)
        });

        fetch("https://isakhorvath-backend.herokuapp.com/comments/" + this.state.post_id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res => res.json()).then(json => {
            this.setState({
                comments: json.comments,
            });
        }).catch(err => {
        throw new Error(err)
        });
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

    handle_comment = (e, data) => {
        this.setState({username: this.props.user});
        e.preventDefault();
        fetch("https://isakhorvath-backend.herokuapp.com/comments/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
    };

    handle_like = (e) => {
        e.preventDefault();
        fetch("https://isakhorvath-backend.herokuapp.com/like/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: this.props.user, blogpost_id: this.props.post_id})
        });
        this.setState({has_liked: !this.state.has_liked});
    };

    render() {
        return (
        <div className={`BlogPost`}>
	    <h2>{this.props.title}</h2>
	    <p>{this.props.body}</p>
	    <div class="post-buttons">
            <div class="post-button" onClick={e => this.handle_like(e)}>
                {
                this.state.liked_by.some(row => row.includes(this.state.username)) ?
                <AiFillLike/> :
                <AiOutlineLike/>
                }
                {
                <span>{this.state.likes}</span>
                }
            </div>
            {/*
            <div class="post-button">
                {
                this.props.liked ?
                <AiFillDislike/> :
                <AiOutlineDislike/>
                }
                {
                this.props.dislikes ?
                <span>{this.props.dislikes}</span> :
                <span>0</span>
                }
            </div>
            */}
            <div class="post-button">
                <AiOutlineComment/>
                <span>{this.state.comments}</span>
            </div>
	    </div>
	    <div class="comments">
	        {this.state.data && this.state.data.map(comment => comment.post_id === this.props.post_id && (<span><Comment user={comment.username} text={comment.body}/></span>))}
	    </div>
	    {
	    this.props.logged_in ?
	    <form onSubmit={e => this.handle_comment(e, this.state)}>
            <div class="comment-field">
                <input id="commentfield" placeholder="comment..." type="text" name="body" onChange={this.handle_change}/>
                <input type="submit" id="commentsubmit" value="Comment"/>
            </div>
	    </form>
	    :
	    <p>You have to log in to leave a comment.</p>
	    }
        </div>
        )
    }
}

export default BlogPost;
