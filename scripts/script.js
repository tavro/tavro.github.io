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

document.addEventListener("DOMContentLoaded", () => {
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
