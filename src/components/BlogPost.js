import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./css/BlogPost.css";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula as style } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp as fasThumbsUp,
  faThumbsDown as fasThumbsDown,
  faShare as fasShare,
} from "@fortawesome/free-solid-svg-icons";
import {
  faThumbsUp as farThumbsUp,
  faThumbsDown as farThumbsDown,
} from "@fortawesome/free-regular-svg-icons";
import Overlay from "./Overlay";
import Comment from "./Comment";

import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const updateMetaTags = (post, slug) => {
  const metaTags = {
    "og:title": post.title,
    "og:description": post.description,
    "og:url": `https://isakhorvath.me/#/blog/${slug}`,
  };

  Object.keys(metaTags).forEach((property) => {
    let metaTag = document.querySelector(`meta[property="${property}"]`);
    if (!metaTag) {
      metaTag = document.createElement("meta");
      metaTag.setAttribute("property", property);
      document.head.appendChild(metaTag);
    }
    metaTag.setAttribute("content", metaTags[property]);
  });
};

function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [likeStatus, setLikeStatus] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({ username: "", content: "" });
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : false;
  });

  useEffect(() => {
    document.body.className = isDarkTheme ? "dark-theme" : "light-theme";
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
  }, [isDarkTheme]);

  useEffect(() => {
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
      } catch (err) {
        console.error("Error fetching post:", err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchPost();
    checkAuthentication();
    loadLikeStatus();
  }, [slug]);

  useEffect(() => {
    if (post) {
      fetchComments();
    }
  }, [post]);

  useEffect(() => {
    if (post) {
      updateMetaTags(post, slug);
    }
  }, [post, slug]);

  const checkAuthentication = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const response = await fetch(
          "https://blogbackend-3043faadd9fc.herokuapp.com/api/validate-token",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          if (data.valid) {
            setIsAuthenticated(true);
          } else {
            localStorage.removeItem("token");
          }
        } else {
          localStorage.removeItem("token");
        }
      } catch (error) {
        console.error("Error during token validation:", error);
        localStorage.removeItem("token");
      }
    }
  };

  const loadLikeStatus = () => {
    const user = localStorage.getItem("user");
    if (user) {
      const storedStatus = localStorage.getItem(`likeStatus_${slug}`);
      if (storedStatus) {
        setLikeStatus(storedStatus);
      }
    }
  };

  const fetchComments = async () => {
    try {
      const response = await fetch(
        `https://blogbackend-3043faadd9fc.herokuapp.com/api/posts/${post.id}/comments`
      );
      if (!response.ok) {
        throw new Error("Error fetching comments");
      }
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const updateLikeDislike = async (action) => {
    try {
      const response = await fetch(
        `https://blogbackend-3043faadd9fc.herokuapp.com/api/posts/${post.id}/${action}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        setLikeStatus(action);
        localStorage.setItem(`likeStatus_${slug}`, action);
      }
    } catch (error) {
      console.error("Error updating like/dislike:", error);
    }
  };

  const handleInteraction = (action) => {
    const user = localStorage.getItem("user");
    if (user) {
      if (likeStatus !== action) {
        updateLikeDislike(action);
      }
    } else {
      setShowOverlay(true);
    }
  };

  const handleCreateAccount = (username) => {
    localStorage.setItem("user", username);
    setShowOverlay(false);
  };

  function code({ className, ...props }) {
    return (
      <SyntaxHighlighter language="cpp" PreTag="div" {...props} style={style} />
    );
  }

  if (loading) {
    return <div className="spinner">Loading...</div>;
  }

  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0];
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewComment((prevComment) => ({
      ...prevComment,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = localStorage.getItem("user");
    if (!user) {
      setShowOverlay(true);
      return;
    }
    try {
      const response = await fetch(
        `https://blogbackend-3043faadd9fc.herokuapp.com/api/posts/${post.id}/comments`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...newComment,
            username: user,
            date: new Date().toISOString(),
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Error posting comment");
      }
      const data = await response.json();
      setComments((prevComments) => [data, ...prevComments]);
      setNewComment({ username: "", content: "" });
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

  const handleShare = () => {
    const encodedUrl = encodeURIComponent(
      `https://isakhorvath.me/#/blog/${slug}`
    );
    const shareText = encodeURIComponent("Check out this blog post!");
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${shareText}`;
    window.open(twitterUrl, "_blank");
  };

  const countWords = (content) => {
    return content.split(/\s+/).filter((word) => word.length > 0).length;
  };

  const estimateReadingTime = (wordCount) => {
    const wordsPerMinute = 200;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  const wordCount = post ? countWords(post.content) : 0;
  const readingTime = estimateReadingTime(wordCount);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-nav-wrapper">
          <Link to="/blog" className="App-link">
            go back
          </Link>
        </div>
        <FontAwesomeIcon
          icon={isDarkTheme ? faSun : faMoon}
          onClick={toggleTheme}
          className="theme-toggle-icon"
          title={isDarkTheme ? "Switch to Light Mode" : "Switch to Dark Mode"}
        />
      </header>
      <main className="Main">
        {post && (
          <div className="Post-Wrapper">
            <div className="Post-Header">
              <div className="Post-Header-Title">
                <h1 className="Post-Title">
                  {post.title}
                  {isAuthenticated && (
                    <Link to={`/edit/${slug}`} className="edit-button">
                      Edit
                    </Link>
                  )}
                </h1>
                <p className="Post-Word-Count">
                  <i>
                    {wordCount} words, approximately {readingTime} minute read
                  </i>
                </p>
              </div>
              <hr />
              <p className="Post-Info">
                Blog post about{" "}
                <Link
                  to={`/blog?category=${post.category}`}
                  className="Category-Link"
                >
                  {post.category}
                </Link>{" "}
                posted {formatDate(post.date)} at {post.time}
              </p>
            </div>
            <div className="Mdx-Styling">
              <ReactMarkdown
                components={{
                  code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || "");
                    return !inline && match ? (
                      <SyntaxHighlighter
                        style={style}
                        language={match[1]}
                        PreTag="div"
                        {...props}
                      >
                        {String(children).replace(/\n$/, "")}
                      </SyntaxHighlighter>
                    ) : (
                      <code {...props} className={className}>
                        {children}
                      </code>
                    );
                  },
                  li({ node, children }) {
                    const content = children
                      .map((child) =>
                        typeof child === "string" ? child : child.props.children
                      )
                      .join("");

                    const isCheckbox = /^\[\s?(x| )\s?\]/.test(content);
                    const isChecked = content.startsWith("[x]");

                    const listItemContent = content
                      .replace(/^\[\s?(x| )\s?\]/, "")
                      .trim();

                    if (isCheckbox) {
                      return (
                        <li>
                          <input
                            type="checkbox"
                            disabled
                            checked={isChecked}
                            style={{ marginRight: "8px" }}
                          />
                          {listItemContent}
                        </li>
                      );
                    }

                    return <li>{children}</li>;
                  },
                }}
              >
                {post.content.replace(/\\n/g, "\n").replace(/\\t/g, "\t")}
              </ReactMarkdown>
            </div>
            <hr />
            <div className="Post-Tags">
              {post.tags.map((tag, index) => (
                <Link key={index} to={`/blog?tag=${tag}`} className="Tag-Link">
                  {tag}{" "}
                </Link>
              ))}
            </div>
            <div className="Interaction-Wrapper">
              <FontAwesomeIcon
                className="Post-Icon"
                icon={fasShare}
                onClick={() => handleShare()}
                style={{
                  cursor: "pointer",
                }}
              />
              <FontAwesomeIcon
                className="Post-Icon"
                icon={likeStatus === "upvote" ? fasThumbsUp : farThumbsUp}
                onClick={() => handleInteraction("upvote")}
                style={{
                  cursor: likeStatus === "upvote" ? "not-allowed" : "pointer",
                }}
              />
              <FontAwesomeIcon
                className="Post-Icon"
                icon={likeStatus === "downvote" ? fasThumbsDown : farThumbsDown}
                onClick={() => handleInteraction("downvote")}
                style={{
                  cursor: likeStatus === "downvote" ? "not-allowed" : "pointer",
                }}
              />
              <div id="upvotes">upvotes: {post.upvotes}</div>
            </div>
            <div className="Comments-Wrapper">
              {comments.length !== 0 && (
                <>
                  <h2>Comments</h2>
                  {comments.map((comment, index) => (
                    <Comment
                      key={index}
                      username={comment.username}
                      date={comment.date}
                      content={comment.content}
                    />
                  ))}
                </>
              )}
              <form onSubmit={handleSubmit}>
                <textarea
                  name="content"
                  placeholder="Write your comment"
                  value={newComment.content}
                  onChange={handleInputChange}
                  required
                  id="comment-input"
                />
                <button type="submit" id="comment-btn">
                  Add Comment
                </button>
              </form>
            </div>
          </div>
        )}
      </main>
      <Overlay
        show={showOverlay}
        onClose={() => setShowOverlay(false)}
        onCreateAccount={handleCreateAccount}
      />
    </div>
  );
}

export default BlogPost;
