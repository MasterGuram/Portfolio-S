//header scroll effect
const header = document.querySelector(".header")
window.addEventListener("scroll", function(){
    window.scrollY > 10 ? header.classList.add("sticky") : header.classList.remove("sticky")
})

//Menu items navigation
window.addEventListener("scroll", function(){
    const section = document.querySelectorAll("section")
    const scrollY = window.scrollY

    section.forEach(function(current){
        let sectionHight = current.offsetHeight
        let sectionTop = current.offsetYop - 100
        let sectionId = current.getAttribute("id")
        let navItem = document.querySelector(`.nav-item a[href*="${sectionId}"]`)

        if(navItem){
            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHight){
            navItem.classList.add("active")
            } else {
            navItem.classList.remove("active")
            }
        }
    })
})

// Scroll to top button 
const scrollToTop = document.querySelector(".scrollToTop")
window.addEventListener("scroll", function(){
    scrollToTop.classList.toggle("active", this.window.scrollY > 500)
})

scrollToTop.addEventListener("click", function(){
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
})

// Dark theme
const themeBtn = document.querySelector(".theme-btn")
// Function to get the current theme
const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light"
// Function to get current sign
const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon"

themeBtn.addEventListener("click", function(){
    document.body.classList.toggle("dark-theme")
    themeBtn.classList.toggle("sun")

    localStorage.setItem("saved-theme", getCurrentTheme())
    localStorage.setItem("saved-icon", getCurrentIcon())
})

const savedTheme = localStorage.getItem("saved-theme")
const savedIcon = localStorage.getItem("saved-icon")

if(savedTheme){
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme")
    themeBtn.classList[savedIcon === "sun" ? "add": "remove"]("sun")
}

// Toggle menu
const navBtn = document.querySelector(".nav-menu-btn")
const navBar = document.querySelector(".nav")
const navMenu = document.querySelector(".nav-menu")
const navLinks = document.querySelectorAll(".nav-link")

navBtn.addEventListener("click", function(){
    navBtn.classList.toggle("close")
    navBar.classList.toggle("active")
    navMenu.classList.toggle("active")
})

navLinks.forEach(function(link){
    link.addEventListener("click", function(){
        navBtn.classList.remove("close")
        navBar.classList.remove("active")
        navMenu.classList.remove("active")        
    })
})

// Slide animations
const revealConfiguration = [
    {selector: '.inner-title, .inner-second-title', config: {opacity: 0, delay: 400}},
    {selector: '.home-info h1, .about-img', config: {delay: 200, origin: "left"}},
    {selector: '.home-img, .description', config: {delay: 400, origin: "right"}},
    {selector: '.home-info h3, .home-info p', config: {delay: 400, origin: "left"}},
    {selector: '.skills-description, .services-description, .portfolio-img-card, .contact-right p, .contact-left h2', config: {delay: 300, scale: 0.5}},
    {selector: '.education', config: {delay: 400, origin: "bottom", interval: 200}},
    {selector: '.work-exp .experience-card, .services-container, .contact-list li, .first-row, .second-row, .third-row', config: {delay: 200, origin: "bottom", interval: 200}},
]

function initializeScrollReveal() {
    window.sr = ScrollReveal({
        reset: false,
        distance: "60px",
        duration: 1000
      })
      revealConfiguration.forEach(({selector, config}) => {
        sr.reveal(selector, config)
      })
}

initializeScrollReveal()

// ScrollRevel disable function
function deisableScrollReveal() {
    sr.clean() // Cleans all element animations
    document.documentElement.style.overflowY = "hidden"
    document.body.style.overflowY = "hidden"

    revealConfiguration.forEach(({selector}) => {
        document.querySelectorAll(selector).forEach(el => {
            el.style.transform = ""
            el.style.opacity = ""
            el.style.transition = ""
            el.style.visibility = ""
        })
    })
    console.log("function off");
}

// ScrollReveal enable function
function enableScrollReveal() {
    document.documentElement.style.overflowY = ""
    document.body.style.overflowY = ""
    initializeScrollReveal()
    console.log("function on");
}

// Services 
const serviceModal = document.querySelectorAll(".service-modal")
const learnMoreBtn = document.querySelectorAll(".learn-more-btn")
const modalCloseBtn = document.querySelectorAll(".modal-close-btn")

const modal = function(modalClick){
    serviceModal[modalClick].classList.add("active")
    deisableScrollReveal()
}

learnMoreBtn.forEach((button, i) => {
    button.addEventListener("click", function(){
        modal(i)
    })
})

modalCloseBtn.forEach(button => {
    button.addEventListener("click", () => {
        serviceModal.forEach(modal => {
            modal.classList.remove("active")
        })
        enableScrollReveal()
    })
})

//Portfolio 
const portfolioModals = document.querySelectorAll(".portfolio-model")
const imgCard = document.querySelectorAll(".img-card")
const portfolioCloseBtn = document.querySelectorAll(".portfolio-close-btn")

const portfolioModal = function(modalClick){
    portfolioModals[modalClick].classList.add("active")
    deisableScrollReveal()
}

imgCard.forEach((button, i) => {
    button.addEventListener("click", () => {
        portfolioModal(i)
    })
})

portfolioCloseBtn.forEach(button => {
    button.addEventListener("click", () => {
        portfolioModals.forEach(modelView => {
            modelView.classList.remove("active")
        })
        enableScrollReveal() // enable scroll after the icon close
    })
})

var swiper = new Swiper(".client-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// Message
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Stop actual form submission

    // Optionally clear the form
    this.reset();

    // Show the success message
    const successMessage = document.getElementById('success-message');
    successMessage.style.display = 'block';

    // Hide the message after a few seconds
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 5000); // 5 seconds
});






