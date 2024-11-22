document.addEventListener("DOMContentLoaded", function() {
    // Simulate data fetching delay
    setTimeout(function() {
        document.getElementById("loader").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 2000); // 2-second delay to simulate loading time

    // Add event listeners to all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            document.getElementById("loader").style.display = "block";
            document.getElementById("content").style.display = "none";
            setTimeout(() => {
                window.location.href = this.href;
            }, 500); // 0.5-second delay for page transition
        });
    });
});
