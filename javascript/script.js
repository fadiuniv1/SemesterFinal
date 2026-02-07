// Function to load the navigation
function loadNav() {
    fetch('nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('nav-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading navigation:', error));
}

// Run the function
loadNav();