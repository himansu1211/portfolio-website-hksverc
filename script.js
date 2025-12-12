document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');

    // Function to set the theme and update icons/localStorage
    function setTheme(theme) {
        if (theme === 'dark') {
            htmlElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            sunIcon.classList.remove('hidden');
            moonIcon.classList.add('hidden');
        } else {
            htmlElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            sunIcon.classList.add('hidden');
            moonIcon.classList.remove('hidden');
        }
    }

    // --- Initial State Check ---
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set theme based on stored preference or system default
    if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
        setTheme('dark');
    } else {
        setTheme('light');
    }

    // --- Toggle Functionality ---
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            if (htmlElement.classList.contains('dark')) {
                setTheme('light');
            } else {
                setTheme('dark');
            }
        });
    }

});
