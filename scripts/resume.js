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

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("age").textContent = calculateAge();

  const slider = document.getElementById("info-slider");

  function updateContent() {
    const value = parseInt(slider.value, 10);

    for (let i = 1; i <= 4; i++) {
      const elements = document.querySelectorAll(`.info-${i}`);
      elements.forEach((el) => {
        if (i <= value) {
          el.style.display = "";
        } else {
          el.style.display = "none";
        }
      });
    }
  }

  updateContent();
  slider.addEventListener("input", updateContent);
});
