// Navbar shadow on scroll
window.addEventListener("scroll", function() {
  const nav = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// Intersection Observer for animations on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.animation = "slideInUp 0.6s ease-out";
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all cards and products
document.querySelectorAll(".card, .product, .showcase-item").forEach(el => {
  el.style.opacity = "0";
  observer.observe(el);
});

// Newsletter form
const newsletterForm = document.querySelector(".newsletter-form");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const email = this.querySelector("input[type='email']").value;
    
    if (email) {
      // Show success message
      const button = this.querySelector("button");
      const originalText = button.textContent;
      button.textContent = "✓ Subscribed!";
      button.style.background = "linear-gradient(90deg, #00F0FF, #6C63FF)";
      
      // Reset after 3 seconds
      setTimeout(() => {
        button.textContent = originalText;
        button.style.background = "";
        this.querySelector("input[type='email']").value = "";
      }, 3000);
    }
  });
}

// Product buttons
document.querySelectorAll(".product-btn").forEach(btn => {
  btn.addEventListener("click", function(e) {
    e.preventDefault();
    const originalText = this.textContent;
    this.textContent = "✓ Added to Cart!";
    
    setTimeout(() => {
      this.textContent = originalText;
    }, 2000);
  });
});

// Parallax effect on mouse move
document.addEventListener("mousemove", (e) => {
  const notebookIllustration = document.querySelector(".notebook-illustration");
  if (notebookIllustration) {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    notebookIllustration.style.transform = `translateX(${x}px) translateY(${y}px)`;
  }
});

// Animate counter numbers on scroll
function animateCounters() {
  const stats = document.querySelectorAll(".stat-number");
  
  stats.forEach(stat => {
    const target = parseInt(stat.textContent);
    let current = 0;
    
    const increment = target / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      stat.textContent = Math.floor(current) + (stat.textContent.includes("+") ? "+" : stat.textContent.includes("%") ? "%" : "");
    }, 20);
  });
}

// Trigger counter animation when hero is in view
const heroSection = document.querySelector(".hero");
if (heroSection) {
  const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animate counters only once
        setTimeout(animateCounters, 500);
        heroObserver.unobserve(entry.target);
      }
    });
  });
  
  heroObserver.observe(heroSection);
}

// Add keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    // Escape key functionality if needed
  }
});

// Add page load animation
window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});

// Random emoji variation on hover
document.querySelectorAll(".product-btn").forEach(btn => {
  btn.addEventListener("mouseenter", function() {
    this.style.transform = "scale(1.02)";
  });
  
  btn.addEventListener("mouseleave", function() {
    this.style.transform = "scale(1)";
  });
});
