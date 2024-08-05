import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula as style } from "react-syntax-highlighter/dist/esm/styles/hljs";

function EditPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());

  useEffect(() => {
    fetchPost();
  }, [slug]);

  const fetchPost = async () => {
    try {
      const response = await fetch(
        `https://blogbackend-3043faadd9fc.herokuapp.com/api/posts/${slug}`
      );
      if (!response.ok) {
        throw new Error("Post not found");
      }
      const data = await response.json();
      setPost(data);
      setTitle(data.title);
      setContent(data.content);
      setCategory(data.category);
      setTags(data.tags.join(", "));
      setSelectedDate(new Date(data.date));
      setSelectedTime(new Date(`1970-01-01T${data.time}Z`));
    } catch (err) {
      console.error("Error fetching post:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdatePost = async (e) => {
    e.preventDefault();
    const updatedTags = tags.split(",").map((tag) => tag.trim());
    const date = selectedDate.toISOString().split("T")[0];
    const time = selectedTime.toLocaleTimeString("en-US", { hour12: false });

    const token = localStorage.getItem("token");

    try {
      const response = await fetch(
        `https://blogbackend-3043faadd9fc.herokuapp.com/api/posts/${slug}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            title,
            content,
            category,
            tags: updatedTags,
            date,
            time,
          }),
        }
      );

      if (response.ok) {
        navigate(`/blog/${slug}`);
      } else {
        const data = await response.json();
        console.error("Error updating post:", data.message);
      }
    } catch (error) {
      console.error("Error during post update:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  function code({ className, ...props }) {
    return (
      <SyntaxHighlighter language="cpp" PreTag="div" {...props} style={style} />
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-nav-wrapper">
          <Link to="/" className="App-link">
            home
          </Link>
        </div>
        <div className="App-nav-wrapper">
          <Link to="/about" className="App-link">
            about
          </Link>
        </div>
        <div className="App-nav-wrapper">
          <a id="App-nav-selected">> blog</a>
        </div>
      </header>
      <main className="Main">
        <form onSubmit={handleUpdatePost} className="post-form">
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="content">Content:</label>
            <textarea
              id="content"
              className="form-control"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="category">Category:</label>
            <input
              type="text"
              id="category"
              className="form-control"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="tags">Tags (comma separated):</label>
            <input
              type="text"
              id="tags"
              className="form-control"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              className="form-control"
              dateFormat="yyyy-MM-dd"
            />
          </div>
          <div className="form-group">
            <label htmlFor="time">Time:</label>
            <DatePicker
              selected={selectedTime}
              onChange={(time) => setSelectedTime(time)}
              className="form-control"
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="HH:mm"
            />
          </div>
          <button type="submit" className="submit-button">
            Update Post
          </button>
        </form>
        <h3>Preview</h3>
        <hr />
        <div className="Mdx-Styling">
          <ReactMarkdown components={{ code }}>
            {content.replace(/\\n/g, "\n").replace(/\\t/g, "\t")}
          </ReactMarkdown>
        </div>
      </main>
    </div>
  );
}

export default EditPost;
