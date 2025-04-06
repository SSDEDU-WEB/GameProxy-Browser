// Light-Dark Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Set initial theme from localStorage
const storedTheme = localStorage.getItem("theme");
if (storedTheme) {
    body.className = storedTheme;
} else {
    body.classList.add("light"); // Default to light theme
}

// Toggle between light and dark themes
themeToggle.addEventListener("click", () => {
    if (body.classList.contains("light")) {
        body.classList.replace("light", "dark");
        localStorage.setItem("theme", "dark");
    } else {
        body.classList.replace("dark", "light");
        localStorage.setItem("theme", "light");
    }
});

// Sidebar Toggle
const sidebar = document.getElementById("sidebar");
const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");

// Open sidebar
openBtn.addEventListener("click", () => {
    sidebar.classList.add("open");
});

// Close sidebar
closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("open");
});
