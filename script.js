// Light-Dark Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Load stored theme preference
const storedTheme = localStorage.getItem("theme");
if (storedTheme) {
    body.className = storedTheme;
} else {
    body.classList.add("light"); // Default to light mode
}

// Toggle theme
themeToggle.addEventListener("click", () => {
    if (body.classList.contains("light")) {
        body.classList.replace("light", "dark");
        localStorage.setItem("theme", "dark");
    } else {
        body.classList.replace("dark", "light");
        localStorage.setItem("theme", "light");
    }
});
