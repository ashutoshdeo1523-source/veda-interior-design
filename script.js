// ================= MOBILE MENU =================

const menuButton = document.getElementById("menuButton");
const navLinks = document.querySelector(".nav-links");

if (menuButton) {
    menuButton.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}


// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


// ================= CONTACT FORM =================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();

        const phone = document.getElementById("phone").value.trim();

        const service = document.getElementById("service").value;

        const message = document.getElementById("message").value.trim();


        const whatsappMessage =
            `Hello Veda Interior Design Studio!%0A%0A` +
            `I would like to discuss an interior design project.%0A%0A` +
            `Name: ${name}%0A` +
            `Phone: ${phone}%0A` +
            `Service: ${service}%0A` +
            `Project Details: ${message}`;


        const whatsappURL =
            `https://wa.me/919284077475?text=${whatsappMessage}`;


        window.open(whatsappURL, "_blank");

    });

}