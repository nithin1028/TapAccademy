document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-links a");
    
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    const courseItems = document.querySelectorAll(".course-item");
    courseItems.forEach(item => {
        item.addEventListener("mouseenter", () => {
            item.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.2)";
        });
        item.addEventListener("mouseleave", () => {
            item.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
        });
    });

    window.addEventListener("scroll", function () {
        let nav = document.querySelector("nav");
        nav.classList.toggle("sticky", window.scrollY > 100);
    });
});

const bookButton = document.querySelector('.call-button');
        const bookingForm = document.getElementById('booking-form');

        bookButton.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor behavior
            bookingForm.style.display = 'block'; // Show the booking form
            // You can add more logic here, like scrolling to the form or opening a modal
        });



       