  const sections = document.querySelectorAll("section");

  sections.forEach(section => {
    section.classList.add("zoom-effect");
  });
// Toggle Dark/Light Mode
const toggleModeBtn = document.getElementById("toggleMode");
toggleModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    toggleModeBtn.textContent = "Light Mode";
  } else {
    toggleModeBtn.textContent = "Dark Mode";
  }
});
