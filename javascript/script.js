// ============================================================
// DARK THEME TOGGLE
// ============================================================
function initDarkMode() {
    // Get all dark mode buttons (both on index and form pages)
    const buttons = document.querySelectorAll('#darkToggle, #darkToggleSmall');
    
    // Load saved preference from localStorage on page load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
    
    // Add click handler to all dark mode buttons
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            
            // Save preference to localStorage
            if (document.body.classList.contains('dark-theme')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });
    });
}

// Initialize dark mode when page loads
initDarkMode();

// ============================================================
// FORM HANDLING (only runs on pages with a form)
// ============================================================
const form = document.querySelector('form');

if (form) {
    form.addEventListener('submit', function(e) {
        // Prevent page refresh
        e.preventDefault();
        
        // Get form data
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Basic validation
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Get display area
        const displayArea = document.getElementById('display-area');
        const output = document.getElementById('output');
        
        // Display data using textContent (safe against XSS)
        output.textContent = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
        
        // Show the display area
        displayArea.style.display = 'block';
        
        // Reset form fields
        form.reset();
    });
}