function toggleDarkMode() { // Defines a function to toggle dark mode on/off.
    document.body.classList.toggle('dark-mode'); // Adds/removes 'dark-mode' class on the body.
    const isDarkMode = document.body.classList.contains('dark-mode'); // Checks if dark mode is active.
    localStorage.setItem('eventify-dark-mode', isDarkMode); // Saves the dark mode state in localStorage.
    document.getElementById('toggle-icon').textContent = isDarkMode ? '☀️' : '🌙'; // Updates the toggle icon.

    const toggle = document.querySelector('.dark-mode-toggle'); // Selects the toggle button element.
    toggle.style.transform = 'scale(0.8) rotate(180deg)'; // Animates the toggle button (shrinks and rotates).
    setTimeout(() => { // After 200ms,
        toggle.style.transform = 'scale(1) rotate(0deg)'; // returns the toggle button to normal size and rotation.
    }, 200);
}

function loadDarkMode() { // Defines a function to load dark mode state on page load.
    const isDarkMode = localStorage.getItem('eventify-dark-mode') === 'true'; // Reads dark mode state from localStorage.
    if (isDarkMode) { // If dark mode is enabled,
        document.body.classList.add('dark-mode'); // adds 'dark-mode' class to the body.
        document.getElementById('toggle-icon').textContent = '☀️'; // Sets the icon to sun.
    } else { // If dark mode is not enabled,
        document.body.classList.remove('dark-mode'); // removes 'dark-mode' class from the body.
        document.getElementById('toggle-icon').textContent = '🌙'; // Sets the icon to moon.
    }
}