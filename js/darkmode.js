function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');


    // Example: Change color of text elements with different classes
    const changeColorElements = document.querySelectorAll('.contenttext, .contentheading, .line2, .aboutparagraph, .review , .reviewer , .card-titles , .modal , .nav-link ');
    const changeColorElementsDark = document.querySelectorAll('.mode, .hero-main, .hero-paragraph, .appointmentheading, .btn-block, .custom-info-text, .card-texts , .heading ');
    const changeBgElements = document.querySelectorAll('.testimonial-card, .appointment-from , .custom-info-card , .feature-item , .service-card , .modal-body , .modal-header ');

    changeColorElements.forEach(element => {
        if (document.body.classList.contains('dark-mode')) {
            element.style.setProperty('color', '#ffffff', 'important'); // Set text color to white in dark mode
        } else {
            // Revert to default styles
            element.style.color = ''; // Reset text color
        }
    });

    changeColorElementsDark.forEach(element => {
        if (document.body.classList.contains('dark-mode')) {
            element.style.setProperty('color', '#ffffff', 'important'); // Set text color to white in dark mode
        } else {
            // Revert to default styles
            element.style.color = ''; // Reset text color
        }
    });

    changeBgElements.forEach(element => {
        if (document.body.classList.contains('dark-mode')) {
            element.style.setProperty('background-color', '#1a1a1a', 'important'); // Set background color to dark
            element.style.setProperty('border', '1px solid #ffffff', 'important'); // Add white border
        } else {
            // Revert to default styles
            element.style.backgroundColor = ''; // Reset background color
            element.style.border = ''; // Reset border
        }
    });
}

document.getElementById('themeToggle').addEventListener('click', function (event) {
    event.preventDefault();
    toggleDarkMode();
});


