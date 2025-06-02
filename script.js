// Navigation mobile
const hamburger = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".nav-menu")

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
  })

  // Fermer le menu mobile lors du clic sur un lien
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active")
      navMenu.classList.remove("active")
    })
  })

  // Fermer le menu en cliquant en dehors
  document.addEventListener("click", (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
      hamburger.classList.remove("active")
      navMenu.classList.remove("active")
    }
  })
}

// Navbar au scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)"
  } else {
    navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)"
  }
})

// Animation des éléments au scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observer les éléments à animer
document.addEventListener("DOMContentLoaded", () => {
  const elementsToAnimate = document.querySelectorAll(
    ".project-card, .resume-item, .award-item, .newspaper-article, .practice-card",
  )

  elementsToAnimate.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "opacity 0.8s ease, transform 0.8s ease"
    observer.observe(el)
  })
})

// Gestion du formulaire de contact
const contactForm = document.querySelector("#contactForm")
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault()

    const submitBtn = this.querySelector(".submit-btn")
    const originalText = submitBtn.textContent

    // Animation de soumission
    submitBtn.textContent = "Envoi en cours..."
    submitBtn.disabled = true
    submitBtn.style.background = "#666"

    // Simulation d'envoi
    setTimeout(() => {
      submitBtn.textContent = "Message envoyé ✓"
      submitBtn.style.background = "#28a745"

      setTimeout(() => {
        submitBtn.textContent = originalText
        submitBtn.disabled = false
        submitBtn.style.background = ""
        this.reset()
      }, 2000)
    }, 1500)
  })
}

// Smooth scroll pour les liens internes
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Effet de hover sur les cartes
document.querySelectorAll(".project-card, .newspaper-article").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-5px)"
  })

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)"
  })
})

// Gestion des états de focus pour l'accessibilité
document.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
    document.body.classList.add("keyboard-navigation")
  }
})

document.addEventListener("mousedown", () => {
  document.body.classList.remove("keyboard-navigation")
})

// Fonctions pour le slider
let currentSlideIndex = 0
let slideInterval

function showSlide(index) {
  const slides = document.querySelectorAll(".hero-slide")
  const dots = document.querySelectorAll(".slider-dot")

  if (slides.length === 0) return

  slides.forEach((slide) => slide.classList.remove("active"))
  dots.forEach((dot) => dot.classList.remove("active"))

  slides[index].classList.add("active")
  if (dots[index]) dots[index].classList.add("active")

  currentSlideIndex = index
}

function nextSlide() {
  const slides = document.querySelectorAll(".hero-slide")
  if (slides.length === 0) return

  currentSlideIndex = (currentSlideIndex + 1) % slides.length
  showSlide(currentSlideIndex)
}

function previousSlide() {
  const slides = document.querySelectorAll(".hero-slide")
  if (slides.length === 0) return

  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length
  showSlide(currentSlideIndex)
}

function changeSlide(index) {
  showSlide(index)
  // Redémarrer l'auto-play
  clearInterval(slideInterval)
  startSlideshow()
}

function startSlideshow() {
  slideInterval = setInterval(nextSlide, 5000)
}

// Initialiser le slider
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".hero-slide")
  if (slides.length > 0) {
    startSlideshow()
  }
})

// Animation simple pour les éléments
function animateOnScroll() {
  const elements = document.querySelectorAll(".practice-card")
  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top
    const elementVisible = 150

    if (elementTop < window.innerHeight - elementVisible) {
      element.style.opacity = "1"
      element.style.transform = "translateY(0)"
    }
  })
}

window.addEventListener("scroll", animateOnScroll)
document.addEventListener("DOMContentLoaded", animateOnScroll)
