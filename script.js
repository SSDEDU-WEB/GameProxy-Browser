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

// Theme Toggle Event
themeToggle.addEventListener('click', () => {
    if (body.classList.contains('light')) {
        body.classList.replace('light', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.replace('dark', 'light');
        localStorage.setItem('theme', 'light');
    }
});
