
// Get the menu button
const menuBtn = document.getElementById("menuBtn");

// Get the navigation links
const navLinks = document.getElementById("navLinks");

// When menu button is clicked
menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});


// Close menu after clicking a navigation link

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {

    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });

});


// Automatically display the current year

document.getElementById("year").textContent =
    new Date().getFullYear();