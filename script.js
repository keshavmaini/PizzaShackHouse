const themeToggle = document.getElementById("theme-toggle");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

// Check saved theme
const savedTheme = localStorage.getItem("theme");

if(savedTheme === "dark"){
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀️";
}

// Toggle Theme
themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "☀️";
    }else{
        localStorage.setItem("theme", "light");
        themeToggle.textContent = "🌙";
    }

});

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){
        navbar.style.background = "#000";
    }else{
        navbar.style.background = "rgba(0,0,0,.9)";
    }

});


menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});