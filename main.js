var typed=new Typed(".text",{
    strings:["Frontend Developer", "UI/UX Designer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay:1000,
    loop:true
})

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar a");

    function setActiveLink() {
        let index = sections.length;

        while (--index && window.scrollY + 100 < sections[index].offsetTop) {}

        // Remove active class from all links
        navLinks.forEach((link) => link.classList.remove("active"));

        // Add active class to the correct link based on the index
        if (index >= 0 && index < navLinks.length) {
            navLinks[index].classList.add("active");
        }
    }

    setActiveLink(); // Set active link on page load

    window.addEventListener("scroll", setActiveLink);
});
