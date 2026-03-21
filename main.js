// Initialize Lucide Icons
lucide.createIcons();

// Simple Scroll Reveal Effect using .reveal class
const observerOptions = {
    threshold: 0.01, // Near zero to trigger as soon as it enters
    rootMargin: '0px 0px 0px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
            entry.target.classList.remove('is-hidden');
            observer.unobserve(entry.target); 
        }
    });
}, observerOptions);

// Initialize observer for all .reveal elements
document.querySelectorAll('.reveal').forEach(el => {
    const rect = el.getBoundingClientRect();
    // Only apply hidden state if it's below the current viewport
    if (rect.top > window.innerHeight) {
        el.classList.add('is-hidden');
        observer.observe(el);
    } else {
        // Already in view or above view - show immediately
        el.classList.add('reveal-active');
    }
});

// Global safety fallback (PM: Never let content stay invisible)
// If script finishes loading and any are hidden, force them visible after 1.5s
setTimeout(() => {
    document.querySelectorAll('.reveal:not(.reveal-active)').forEach(el => {
        el.classList.add('reveal-active');
        el.classList.remove('is-hidden');
    });
}, 1500);

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = "0.75rem 0";
        navbar.style.background = "rgba(255, 255, 255, 0.9)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.05)";
    } else {
        navbar.style.padding = "1rem 0";
        navbar.style.background = "rgba(255, 255, 255, 0.7)";
        navbar.style.boxShadow = "none";
    }
});

// Mobile Menu Toggle Improvement
const menuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.setAttribute('data-lucide', 'x');
        } else {
            icon.setAttribute('data-lucide', 'menu');
        }
        lucide.createIcons();
    });
}

// Back to Top Button Logic
const createBackToTop = () => {
    const btn = document.createElement('button');
    btn.innerHTML = '<i data-lucide="arrow-up"></i>';
    btn.className = 'back-to-top';
    document.body.appendChild(btn);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 800) {
            btn.style.display = 'flex';
        } else {
            btn.style.display = 'none';
        }
    });
    
    btn.onclick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    lucide.createIcons();
};
createBackToTop();

// Update Date Logic (PM: Maintain freshness)
const updateDate = () => {
    const dateEl = document.querySelector('.terms');
    if (dateEl) {
        const now = new Date();
        const year = now.getFullYear();
        const month = (now.getMonth() + 1).toString().padStart(2, '0');
        const day = now.getDate().toString().padStart(2, '0');
        dateEl.textContent = `最新稳定版: v.1.0.1 | 更新日期: ${year}.${month}.${day}`;
    }
};
updateDate();

// Update scroll reveal for new sections (Integrated into main observer list above)

// Simple download feedback for other platforms
document.addEventListener('DOMContentLoaded', function() {
    // Handle other download links (macOS, Linux) - show coming soon
    const otherDownloadLinks = document.querySelectorAll('.os-option a[href="#"]');
    otherDownloadLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Show coming soon message
            const originalText = this.innerHTML;
            this.innerHTML = '即将推出';
            this.style.background = '#64748b';
            this.style.color = 'white';
            
            // Reset after 2 seconds
            setTimeout(() => {
                this.innerHTML = originalText;
                this.style.background = '';
                this.style.color = '';
            }, 2000);
        });
    });
});
