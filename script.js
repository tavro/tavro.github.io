async function getRecentTrack(username) {
  const corsProxy = "https://corsproxy.io/?";
  const url = `${corsProxy}https://www.last.fm/user/${encodeURIComponent(
    username
  )}`;

  try {
    const res = await fetch(url);
    const html = await res.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    const trackEl = doc.querySelector(".chartlist .chartlist-row");
    if (!trackEl) {
      console.log("No recent tracks found.");
      return;
    }

    const artist =
      trackEl.querySelector(".chartlist-artist a")?.textContent.trim() ||
      "Unknown Artist";
    const title =
      trackEl.querySelector(".chartlist-name a")?.textContent.trim() ||
      "Unknown Title";
    let link = trackEl.querySelector(".chartlist-name a")?.href || "#";
    if (link.startsWith("file://")) {
      link = link.slice("file://".length);
    }

    document.getElementById("song-name").textContent = title;
    document.getElementById("artist-name").textContent = artist;
    document.getElementById("song-link").href = "https://www.last.fm" + link;
  } catch (err) {
    console.error("Failed to fetch track:", err);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("archive-toggle")
    .addEventListener("click", function () {
      const list = document.getElementById("archive-list");
      const isVisible = list.style.display === "block";
      list.style.display = isVisible ? "none" : "block";

      this.textContent = isVisible
        ? "‣ see what i have been up to previously"
        : "▾ see what i have been up to previously";
    });

  const navLinks = document.querySelectorAll("nav ul li a");
  const sections = document.querySelectorAll("section");

  navLinks.forEach((link) => {
    if (link.getAttribute("href") === "#") {
      link.addEventListener("click", function (e) {
        e.preventDefault();

        const footer = document.querySelector("footer");
        footer.style.display = "none";

        navLinks.forEach((el) => {
          el.classList.remove("active");
          el.textContent = "/" + el.id;
        });

        this.classList.add("active");
        this.textContent = "<" + this.id + "/>";

        sections.forEach((section) => {
          section.style.display = "none";
        });

        const targetSection = document.querySelector("section." + this.id);
        if (targetSection) {
          targetSection.style.display = "block";
        }

        switch (this.id) {
          case "home":
            footer.style.display = "block";
            break;
          case "resume":
            document.getElementById("age").textContent = calculateAge();
            break;
          case "blog":
            listBlogPosts();
            break;
          case "now":
            getRecentTrack("isakhorvath");
            break;
        }
      });
    }
  });
});

async function getUniqueVisitors() {
  const url =
    "https://blogbackend-3043faadd9fc.herokuapp.com/api/unique-visitors";

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const contents = await response.json();
    const visitorsElement = document.getElementById("visitors");
    visitorsElement.innerHTML = contents.uniqueVisitors;
  } catch (error) {
    console.error("Error fetching amount of unique visitors:", error);
  }
}

async function logVisitor() {
  const url = "https://blogbackend-3043faadd9fc.herokuapp.com/api/log-visitor";

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error logging visitor: ${response.status}`);
    }
  } catch (error) {
    console.error("Error logging visitor:", error);
  }
}

async function listBlogPosts() {
  const url = "https://api.github.com/repos/tavro/blog-posts/contents/";

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const contents = await response.json();

    const fileNames = contents
      .filter((item) => item.type === "file")
      .map((file) => ({
        name: file.name.replace(/\.md$/, ""),
        url: file.html_url,
      }));

    const ulElement = document.getElementById("blog-posts");
    ulElement.innerHTML = "";

    fileNames.forEach(({ name, url }) => {
      const li = document.createElement("li");
      li.style.cssText = `
          font-family: Verdana, Geneva, sans-serif;
          color: black;
          border: 2px dotted #555;
          padding: 6px;
          margin-bottom: 4px;
        `;

      const a = document.createElement("a");
      a.href = url;
      a.textContent = name;
      a.style.cssText = `
          color: #6fcf6f;
          text-decoration: underline;
          font-weight: bold;
        `;
      a.target = "_blank";

      li.appendChild(a);
      ulElement.appendChild(li);
    });
  } catch (error) {
    console.error("Error fetching repo contents:", error);
  }
}

function calculateAge() {
  const birthDate = new Date(2000, 2, 22);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();

  const hasHadBirthdayThisYear =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() >= birthDate.getDate());

  if (!hasHadBirthdayThisYear) {
    age--;
  }

  return age;
}

window.addEventListener("load", () => {
  logVisitor();
  getUniqueVisitors();

  const isMobile =
    /Mobi|Android/i.test(navigator.userAgent) || window.innerWidth <= 768;

  const hideOnDesktopElements = document.querySelectorAll(".hide-on-desktop");
  const hideOnMobileElements = document.querySelectorAll(".hide-on-mobile");

  if (isMobile) {
    hideOnMobileElements.forEach((el) => (el.style.display = "none"));
  } else {
    hideOnDesktopElements.forEach((el) => (el.style.display = "none"));
  }
});
