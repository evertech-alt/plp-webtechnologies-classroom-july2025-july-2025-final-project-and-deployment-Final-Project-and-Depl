// MOBILE MENU TOGGLE
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// FORM VALIDATION + MESSAGE
const form = document.getElementById("contactForm");
const status = document.getElementById("form-status");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        status.textContent = "Please fill in all fields.";
        status.style.color = "red";
    } else {
        status.textContent = "Message sent successfully!";
        status.style.color = "green";
        form.reset();
    }
});