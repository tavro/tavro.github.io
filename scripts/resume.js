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
});
