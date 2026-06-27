function scrollToSection() {
    document.getElementById("projects").scrollIntoView({
        behavior: "smooth"
    });
}

document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Message Sent Successfully!");
});