import React from 'react';
import { AiOutlineLike, AiFillLike, AiOutlineDislike, AiFillDislike, AiOutlineComment} from "react-icons/ai";
import Comment from './Comment';

class BlogPost extends React.Component {
    render() {
        return (
        <div className={`BlogPost`}>
	    <h2>{this.props.title}</h2>
	    <p>{this.props.body}</p>
	    <div class="post-buttons">
            <div class="post-button">
                {
                this.props.liked ?
                <AiFillLike/> :
                <AiOutlineLike/>
                }
                {
                this.props.likes ?
                <span>{this.props.likes}</span> :
                <span>0</span>
                }
            </div>
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
            <div class="post-button">
                <AiOutlineComment/>
                {
                this.props.comments ?
                <span>{this.props.comments}</span> :
                <span>0</span>
                }
            </div>
	    </div>
	    <div class="comments">
            <Comment user="isakhorvath" text="first"/>
            <Comment user="lolle" text="second"/>
	    </div>
	    {
	    this.props.logged_in ?
	    <form>
            <div class="comment-field">
                <input id="commentfield" placeholder="comment..." type="text" name="commentfield"/>
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
