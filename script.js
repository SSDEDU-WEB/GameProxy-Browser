// Selectors
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme in local storage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.className = savedTheme;
} else {
    body.classList.add('light'); // Default to light theme
}

// Light-Dark Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    body.classList.toggle("light");
    localStorage.setItem("theme", body.className);
});

// Load stored theme on reload
const storedTheme = localStorage.getItem("theme");
if (storedTheme) {
    body.className = storedTheme;
} else {
    body.classList.add("light"); // Default to light theme
}

// Sidebar Toggle
const sidebar = document.getElementById("sidebar");
const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");

openBtn.addEventListener("click", () => {
    sidebar.classList.add("open");
});

closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("open");
});
