// Define the navigation items
const navItems = [
    { text: 'Map of India', link: '../../../map_states_and_union_territories.html' },
    { text: 'About', link: '../../../about.html' },
];

// Function to generate the navigation banner
function generateNavbar() {
    const navbar = document.getElementById('navbar');
    const navBanner = document.createElement('div'); // Create a div element for the banner
    navBanner.classList.add('navbar-banner'); // Add a CSS class to style the banner

    navItems.forEach(item => {
        const navLink = document.createElement('a');
        navLink.href = item.link;
        navLink.textContent = item.text;
        navBanner.appendChild(navLink); // Append each navigation link to the banner
    });

    navbar.appendChild(navBanner); // Append the banner to the navbar
}