import './css/PostPreview.css';

function PostPreview(props) {
  return (
    <div class="App-post-preview">
        <h1 class="App-post-title">{props.post.title}</h1>
        <hr class="App-post-decorator"/>
        <div>
            <p class="App-post-date">{props.post.timestamp}</p>
            <p class="App-post-category">{props.post.category}</p>
        </div>
        <br/>
        <p class="App-post-content">{props.post.content}</p>
    </div>
  );
}

export default PostPreview;
