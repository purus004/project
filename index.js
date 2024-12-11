// JavaScript to handle navigation between slides
document.addEventListener('DOMContentLoaded', function () {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    // Get all the component slides
    const slides = document.querySelectorAll('.component-slide');

    // Function to show a particular slide
    function showSlide(slideId) {
        // Hide all slides
        slides.forEach(slide => slide.style.display = 'none');
        // Show the selected slide
        document.querySelector(slideId).style.display = 'block';
    }

    // Initially show the first slide (Plant Diseases)
    showSlide('#plant-diseases');

    // Set up event listeners for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default link behavior
            const targetSlide = e.target.getAttribute('href'); // Get the target slide ID
            showSlide(targetSlide); // Show the target slide
        });
    });
});
