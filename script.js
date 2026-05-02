// =========================
// PRELOADER
// =========================
window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");

    setTimeout(() => {
        preloader.classList.add("hide");

        setTimeout(() => {
            preloader.style.display = "none";
        }, 500);
    }, 800);
});

// =========================
// NAVBAR SCROLL EFFECT
// =========================
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// =========================
// MOBILE MENU
// =========================
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// close menu when click link
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    });
});

// =========================
// ACTIVE NAV LINK
// =========================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

// =========================
// SMOOTH SCROLL
// =========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: "smooth"
            });
        }
    });
});

// =========================
// SCROLL TO CONTACT
// =========================
function scrollToContact() {
    const contact = document.getElementById("contact");

    window.scrollTo({
        top: contact.offsetTop - 80,
        behavior: "smooth"
    });
}

// =========================
// COUNTER ANIMATION
// =========================
const counters = document.querySelectorAll(".stat-number");

const startCounter = () => {
    counters.forEach(counter => {
        const target = +counter.getAttribute("data-target");
        let count = 0;

        const increment = target / 100;

        const updateCounter = () => {
            count += increment;

            if (count < target) {
                counter.innerText = Math.floor(count);
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = target;
            }
        };

        updateCounter();
    });
};

let counterStarted = false;

window.addEventListener("scroll", () => {
    const statsSection = document.querySelector(".hero-stats");

    if (!statsSection) return;

    const sectionTop = statsSection.offsetTop;

    if (window.scrollY + window.innerHeight > sectionTop && !counterStarted) {
        startCounter();
        counterStarted = true;
    }
});

// =========================
// PORTFOLIO FILTER
// =========================
const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        portfolioItems.forEach(item => {
            const category = item.getAttribute("data-category");

            if (filter === "all" || filter === category) {
                item.style.display = "block";

                setTimeout(() => {
                    item.style.opacity = "1";
                    item.style.transform = "scale(1)";
                }, 100);

            } else {
                item.style.opacity = "0";
                item.style.transform = "scale(0.8)";

                setTimeout(() => {
                    item.style.display = "none";
                }, 300);
            }
        });
    });
});

// =========================
// TESTIMONIAL SLIDER
// =========================
const slider = document.getElementById("testimonialsSlider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentSlide = 0;

function updateSlider() {
    const cards = document.querySelectorAll(".testimonial-card");

    if (cards.length === 0) return;

    const cardWidth = cards[0].offsetWidth + 30;

    slider.style.transform = `translateX(-${currentSlide * cardWidth}px)`;
}

nextBtn.addEventListener("click", () => {
    const cards = document.querySelectorAll(".testimonial-card");

    if (currentSlide < cards.length - 1) {
        currentSlide++;
    } else {
        currentSlide = 0;
    }

    updateSlider();
});

prevBtn.addEventListener("click", () => {
    const cards = document.querySelectorAll(".testimonial-card");

    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = cards.length - 1;
    }

    updateSlider();
});

// auto slide
setInterval(() => {
    const cards = document.querySelectorAll(".testimonial-card");

    if (cards.length === 0) return;

    if (currentSlide < cards.length - 1) {
        currentSlide++;
    } else {
        currentSlide = 0;
    }

    updateSlider();

}, 5000);

// =========================
// CONTACT FORM
// =========================
const contactForm = document.getElementById("contactForm");
const formSuccess = document.getElementById("formSuccess");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const submitBtn = contactForm.querySelector("button");

    submitBtn.innerHTML = `
        <i class="fas fa-spinner fa-spin"></i> Mengirim...
    `;

    submitBtn.disabled = true;

    setTimeout(() => {
        contactForm.style.display = "none";
        formSuccess.style.display = "block";
    }, 2000);
});

// =========================
// NEWSLETTER FORM
// =========================
const newsletterForm = document.getElementById("newsletterForm");

newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const input = newsletterForm.querySelector("input");

    alert(`Terima kasih! Email ${input.value} berhasil didaftarkan 🎉`);

    input.value = "";
});

// =========================
// SCROLL TO TOP BUTTON
// =========================
const scrollTopBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add("show");
    } else {
        scrollTopBtn.classList.remove("show");
    }
});

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// =========================
// SIMPLE SCROLL ANIMATION
// =========================
const animatedElements = document.querySelectorAll("[data-aos]");

const animateOnScroll = () => {
    animatedElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < window.innerHeight - 100) {
            element.classList.add("aos-animate");
        }
    });
};

window.addEventListener("scroll", animateOnScroll);
window.addEventListener("load", animateOnScroll);

// =========================
// PARALLAX HERO EFFECT
// =========================
window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;

    document.querySelectorAll(".hero-shape").forEach((shape, index) => {
        const speed = (index + 1) * 0.2;

        shape.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// =========================
// CONSOLE EASTER EGG 😭
// =========================
console.log(`
🚀 TechNova Solutions
Website crafted with passion.

Kalau client bilang:
"bisa cepet ga?"

langsung ngopi dulu ☕
`);