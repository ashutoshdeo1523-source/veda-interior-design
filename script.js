// =========================================================
// MOBILE MENU
// =========================================================

const menuButton = document.getElementById("menuButton");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {

    menuButton.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}


// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        if (navLinks) {
            navLinks.classList.remove("active");
        }

    });

});


// =========================================================
// PREMIUM SCROLL REVEAL ANIMATION
// =========================================================

// Automatically add reveal animation
// to major sections

const revealElements = document.querySelectorAll(
    "section, .service-card, .project-card, .process-step, .why-item, .about-image"
);

revealElements.forEach(element => {

    element.classList.add("reveal");

});


// Detect when elements enter the screen

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


document.querySelectorAll(".reveal").forEach(element => {

    revealObserver.observe(element);

});


// =========================================================
// CONTACT FORM → WHATSAPP
// =========================================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const service =
            document.getElementById("service").value;

        const message =
            document.getElementById("message").value.trim();


        const whatsappMessage =
            `Hello Veda Interior Design Studio!%0A%0A` +
            `I would like to discuss an interior design project.%0A%0A` +
            `Name: ${encodeURIComponent(name)}%0A` +
            `Phone: ${encodeURIComponent(phone)}%0A` +
            `Service: ${encodeURIComponent(service)}%0A` +
            `Project Details: ${encodeURIComponent(message)}`;


        const whatsappURL =
            `https://wa.me/919284077475?text=${whatsappMessage}`;


        window.open(whatsappURL, "_blank");

    });

}