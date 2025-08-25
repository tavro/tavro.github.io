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
    
    getRecentTrack("isakhorvath");
    
    const slides = document.querySelectorAll(".gallery-slide");
    let index = 0;
    
    function showSlide(i) {
        slides.forEach((slide, idx) => {
            slide.classList.toggle("active", idx === i);
        });
        index = i;
    }
    
    document.querySelector(".prev").addEventListener("click", () => {
        showSlide((index - 1 + slides.length) % slides.length);
    });
    
    document.querySelector(".next").addEventListener("click", () => {
        showSlide((index + 1) % slides.length);
    });
});
