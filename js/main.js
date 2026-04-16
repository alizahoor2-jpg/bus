// TechStore - Premium Computer Accessories
// Main JavaScript File

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all modules
  Header.init();
  MobileMenu.init();
  Animations.init();
  ProductCarousel.init();
  ContactForm.init();
  Cart.init();
});

// Header Module
const Header = {
  init() {
    this.header = document.querySelector('.header');
    if (this.header) {
      this.handleScroll();
      window.addEventListener('scroll', () => this.handleScroll());
    }
  },

  handleScroll() {
    if (window.scrollY > 50) {
      this.header.classList.add('scrolled');
    } else {
      this.header.classList.remove('scrolled');
    }
  }
};

// Mobile Menu Module
const MobileMenu = {
  init() {
    this.toggle = document.querySelector('.menu-toggle');
    this.nav = document.querySelector('.nav');
    if (this.toggle && this.nav) {
      this.toggle.addEventListener('click', () => this.toggleMenu());
    }
  },

  toggleMenu() {
    this.nav.classList.toggle('active');
    this.toggle.classList.toggle('active');
  }
};

// Animations Module
const Animations = {
  init() {
    this.observer = null;
    this.setupObserver();
    this.observeElements();
  },

  setupObserver() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            this.observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );
  },

  observeElements() {
    const elements = document.querySelectorAll(
      '.product-card, .category-card, .stat-item, .value-card, .team-card, .contact-info-card'
    );
    elements.forEach((el, index) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
      this.observer.observe(el);
    });
  }
};

// Add global styles for animation
const style = document.createElement('style');
style.textContent = `
  .animate-in {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`;
document.head.appendChild(style);

// Product Carousel Module
const ProductCarousel = {
  init() {
    this.carousels = document.querySelectorAll('.products-carousel');
    this.carousels.forEach((carousel) => this.setupCarousel(carousel));
  },

  setupCarousel(carousel) {
    const prevBtn = carousel.querySelector('.carousel-prev');
    const nextBtn = carousel.querySelector('.carousel-next');
    const track = carousel.querySelector('.products-track');

    if (!prevBtn || !nextBtn || !track) return;

    let scrollAmount = 0;
    const cardWidth = 300;

    prevBtn.addEventListener('click', () => {
      scrollAmount = Math.max(0, scrollAmount - cardWidth);
      track.style.transform = `translateX(-${scrollAmount}px)`;
    });

    nextBtn.addEventListener('click', () => {
      const maxScroll = track.scrollWidth - track.clientWidth;
      scrollAmount = Math.min(maxScroll, scrollAmount + cardWidth);
      track.style.transform = `translateX(-${scrollAmount}px)`;
    });
  }
};

// Contact Form Module
const ContactForm = {
  init() {
    this.form = document.querySelector('.contact-form form');
    if (this.form) {
      this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }
  },

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(this.form);
    const data = Object.fromEntries(formData);

    // Simulate form submission
    const submitBtn = this.form.querySelector('.form-submit');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.textContent = 'Message Sent!';
      submitBtn.style.background = '#28a745';

      setTimeout(() => {
        this.form.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.style.background = '';
      }, 2000);
    }, 1000);
  }
};

// Cart Module
const Cart = {
  init() {
    this.count = 0;
    this.countEl = document.querySelector('.cart-count');
    this.updateCount(0);

    // Add to cart buttons
    document.querySelectorAll('.add-to-cart-btn, .product-action-btn[data-action="cart"]').forEach((btn) => {
      btn.addEventListener('click', () => this.addToCart());
    });
  },

  addToCart() {
    this.count++;
    this.updateCount(this.count);

    // Show feedback
    this.showNotification('Added to cart!');
  },

  updateCount(count) {
    if (this.countEl) {
      this.countEl.textContent = count;
      this.countEl.style.transform = 'scale(1)';
      setTimeout(() => {
        this.countEl.style.transform = 'scale(1.2)';
      }, 100);
    }
  },

  showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      bottom: 24px;
      right: 24px;
      background: var(--color-text-primary);
      color: white;
      padding: 12px 24px;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 500;
      z-index: 9999;
      animation: slideInRight 0.3s ease;
      transform: translateY(0);
    `;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.style.animation = 'fadeIn 0.3s ease reverse';
      setTimeout(() => notification.remove(), 300);
    }, 2000);
  }
};

// Quantity Selector
document.querySelectorAll('.quantity-selector').forEach((selector) => {
  const minusBtn = selector.querySelector('.quantity-btn.minus');
  const plusBtn = selector.querySelector('.quantity-btn.plus');
  const input = selector.querySelector('.quantity-input');

  minusBtn?.addEventListener('click', () => {
    const value = parseInt(input.value) || 1;
    if (value > 1) {
      input.value = value - 1;
    }
  });

  plusBtn?.addEventListener('click', () => {
    const value = parseInt(input.value) || 0;
    input.value = value + 1;
  });
});

// Tabs Functionality
document.querySelectorAll('.tabs').forEach((tabs) => {
  const tabBtns = tabs.querySelectorAll('.tab-btn');
  const tabContents = tabs.querySelectorAll('.tab-content');

  tabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;

      tabBtns.forEach((b) => b.classList.remove('active'));
      tabContents.forEach((c) => c.classList.remove('active'));

      btn.classList.add('active');
      document.getElementById(target)?.classList.add('active');
    });
  });
});

// Color Options
document.querySelectorAll('.color-options').forEach((group) => {
  const options = group.querySelectorAll('.color-option');
  options.forEach((option) => {
    option.addEventListener('click', () => {
      options.forEach((o) => o.classList.remove('active'));
      option.classList.add('active');
    });
  });
});

// Thumbnail Selection
document.querySelectorAll('.thumbnail-list').forEach((list) => {
  const thumbnails = list.querySelectorAll('.thumbnail');
  thumbnails.forEach((thumb) => {
    thumb.addEventListener('click', () => {
      thumbnails.forEach((t) => t.classList.remove('active'));
      thumb.classList.add('active');
    });
  });
});
