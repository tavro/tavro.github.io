import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula as style } from "react-syntax-highlighter/dist/esm/styles/hljs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./css/Blog.css";
import Pagination from "../components/Pagination";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

function Blog() {
  const [word, setWord] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [blogPosts, setBlogPosts] = useState([]);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [filteredCategory, setFilteredCategory] = useState("");
  const [filteredTag, setFilteredTag] = useState("");
  const [isPrinting, setIsPrinting] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : false;
  });
  const postsPerPage = 8;

  const location = useLocation();
  const printTimeoutRef = useRef(null);

  useEffect(() => {
    document.body.className = isDarkTheme ? "dark-theme" : "light-theme";
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
  }, [isDarkTheme]);

  useEffect(() => {
    printWord("ls blog-posts", 100);
    fetchPosts();
    checkAuthentication();
    checkSubscription();
  }, []);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get("category");
    const tag = queryParams.get("tag");
    if (category) {
      setFilteredCategory(category);
      setFilteredTag("");
      printWord(`grep -i ${category} blog-posts`, 100);
    } else if (tag) {
      setFilteredTag(tag);
      setFilteredCategory("");
      printWord(`grep -i ${tag} blog-posts`, 100);
    } else {
      setFilteredCategory("");
      setFilteredTag("");
      printWord("ls blog-posts", 100);
    }
  }, [location.search]);

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const printWord = async (word, time) => {
    if (isPrinting) return;

    setIsPrinting(true);
    clearTimeout(printTimeoutRef.current);

    for (let i = 0; i < word.length + 1; i++) {
      await delay(time);
      setWord(word.substring(0, i));
    }

    setIsPrinting(false);
  };

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

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://blogbackend-3043faadd9fc.herokuapp.com/api/posts"
      );
      const data = await response.json();
      setBlogPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleNewPost = async (e) => {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    const category = document.getElementById("category").value;
    const tags = document
      .getElementById("tags")
      .value.split(",")
      .map((tag) => tag.trim());
    const date = selectedDate.toISOString().split("T")[0];
    const time = selectedTime.toLocaleTimeString("en-US", { hour12: false });

    const token = localStorage.getItem("token");

    try {
      const response = await fetch(
        "https://blogbackend-3043faadd9fc.herokuapp.com/api/create-post",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ title, content, category, tags, date, time }),
        }
      );

      if (!response.ok) {
        const data = await response.json();
        console.error("Error creating post:", data.message);
      } else {
        sendNotifications();
      }
    } catch (error) {
      console.error("Error during post creation:", error);
    }
  };

  const sendNotifications = async () => {
    try {
      await fetch(
        "https://blogbackend-3043faadd9fc.herokuapp.com/api/send-notifications",
        {
          method: "POST",
        }
      );
    } catch (error) {
      console.error("Error sending notifications:", error);
    }
  };

  const handleCategoryClick = (category) => {
    setFilteredCategory(category);
    setFilteredTag("");
    setCurrentPage(1);
    printWord(`grep -i ${category} blog-posts`, 100);
  };

  const handleTagClick = (tag) => {
    setFilteredTag(tag);
    setFilteredCategory("");
    printWord(`grep -i ${tag} blog-posts`, 100);
  };

  const clearFilter = () => {
    setFilteredCategory("");
    setFilteredTag("");
    printWord("ls blog-posts", 100);
  };

  const filteredPosts = filteredCategory
    ? blogPosts.filter((post) => post.category === filteredCategory)
    : filteredTag
    ? blogPosts.filter((post) => post.tags.includes(filteredTag))
    : blogPosts;

  const titleToSlug = (title) => {
    return title.replace(/\s+/g, "-").toLowerCase();
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0];
  };

  const code = ({ className, ...props }) => {
    return (
      <SyntaxHighlighter language="cpp" PreTag="div" {...props} style={style} />
    );
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const checkSubscription = async () => {
    if ("serviceWorker" in navigator && "PushManager" in window) {
      const registration = await navigator.serviceWorker.ready;
      const subscription = await registration.pushManager.getSubscription();
      setIsSubscribed(subscription !== null);
    }
  };

  const subscribeUser = async () => {
    if ("serviceWorker" in navigator && "PushManager" in window) {
      try {
        const registration = await navigator.serviceWorker.ready;
        const subscription = await registration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: urlBase64ToUint8Array(
            "BP9faj95FZPZ2WlZ4xhQ2gNpNHBvcYIFUGKGCdAaPhUIeL5ogKJCecm6esmsfDExjzBFRw6aPLW_F1CQfKjBIcM"
          ),
        });

        await fetch(
          "https://blogbackend-3043faadd9fc.herokuapp.com/api/subscribe",
          {
            method: "POST",
            body: JSON.stringify(subscription),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        setIsSubscribed(true);
      } catch (error) {
        console.error("Error during subscription:", error);
      }
    }
  };

  const unsubscribeUser = async () => {
    const registration = await navigator.serviceWorker.ready;
    const subscription = await registration.pushManager.getSubscription();

    if (subscription) {
      await subscription.unsubscribe();
      await fetch(
        "https://blogbackend-3043faadd9fc.herokuapp.com/api/unsubscribe",
        {
          method: "POST",
          body: JSON.stringify(subscription),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setIsSubscribed(false);
    }
  };

  const urlBase64ToUint8Array = (base64String) => {
    const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding)
      .replace(/-/g, "+")
      .replace(/_/g, "/");

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-nav-wappers">
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
            <a id="App-nav-selected">blog</a>
          </div>
        </div>
        <FontAwesomeIcon
          icon={isDarkTheme ? faSun : faMoon}
          onClick={toggleTheme}
          className="theme-toggle-icon"
          title={isDarkTheme ? "Switch to Light Mode" : "Switch to Dark Mode"}
        />
      </header>
      <main className="Main">
        <div className="Center-Wrapper">
          <h3>
            > {word}
            <span className="App-blink">_</span>
          </h3>
          {(filteredCategory || filteredTag) && (
            <>
              <br />
              <a onClick={clearFilter} className="subtle">
                ✖ Clear filter
              </a>
            </>
          )}
          <ul className="blog-list">
            {loading ? (
              <div className="spinner">Loading...</div>
            ) : (
              currentPosts.map((blogPost) => (
                <li key={blogPost._id} className="blog-list-item">
                  <span className="blog-list-item-content">
                    <span className="category-container">
                      <span className="category-bracket">[</span>
                      <span className="category-text">
                        &nbsp;<small>{formatDate(blogPost.date)}</small>,{" "}
                        <a
                          onClick={() => handleCategoryClick(blogPost.category)}
                        >
                          {blogPost.category}
                        </a>
                      </span>
                      <span className="category-bracket">]</span>
                      <span className="category-colon">:</span>
                    </span>{" "}
                    <span className="App-blogpost-title">
                      <Link to={`/blog/${titleToSlug(blogPost.title)}`}>
                        {blogPost.title}
                      </Link>
                    </span>
                  </span>
                </li>
              ))
            )}
          </ul>
          {!loading && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
          <div className="subscription-section">
            {isSubscribed ? (
              <button onClick={unsubscribeUser} className="subscription-button">
                Unsubscribe from Notifications 🔔
              </button>
            ) : (
              <button onClick={subscribeUser} className="subscription-button">
                Subscribe to Notifications 🔔
              </button>
            )}
          </div>
          {isAuthenticated ? (
            <>
              <form onSubmit={handleNewPost} className="post-form">
                <div className="form-group">
                  <label htmlFor="title">Title:</label>
                  <input
                    type="text"
                    id="title"
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="content">Content:</label>
                  <textarea
                    id="content"
                    className="form-control"
                    required
                    value={content}
                    onChange={handleContentChange}
                  ></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="category">Category:</label>
                  <input type="text" id="category" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="tags">Tags (comma separated):</label>
                  <input type="text" id="tags" className="form-control" />
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
                  Create Post
                </button>
              </form>
              <h3>Preview</h3>
              <hr />
              <div className="Mdx-Styling">
                <ReactMarkdown components={{ code }}>{content}</ReactMarkdown>
              </div>
            </>
          ) : (
            <Link to="/login" className="subtle">
              login
            </Link>
          )}
        </div>
      </main>
    </div>
  );
}

export default Blog;
