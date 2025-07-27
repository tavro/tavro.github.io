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

document.addEventListener("DOMContentLoaded", () => {
  logVisitor();
});
