import './css/PostPreview.css';

function PostPreview({post}) {
  return (
    <div class="App-post-preview">
        <h1 class="App-post-title">{post.title}</h1>
        <hr class="App-post-decorator"/>
        <div>
            <p class="App-post-date">{post.timestamp}</p>
            <p class="App-post-category">{post.category}</p>
        </div>
        <br/>
        <p class="App-post-content">{post.content}</p>
    </div>
  );
}

export default PostPreview;
