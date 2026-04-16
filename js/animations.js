// NEXUS - Professional Animations with GSAP
// Premium scroll-triggered animations and micro-interactions

document.addEventListener('DOMContentLoaded', () => {
  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // ============================================
  // HERO ANIMATIONS
  // ============================================

  // Hero content stagger fade-in
  gsap.from('.hero-badge', {
    duration: 0.8,
    opacity: 0,
    y: 30,
    ease: 'power3.out',
    delay: 0.2
  });

  gsap.from('.hero-title', {
    duration: 1,
    opacity: 0,
    y: 50,
    ease: 'power3.out',
    delay: 0.4
  });

  gsap.from('.hero-description', {
    duration: 1,
    opacity: 0,
    y: 40,
    ease: 'power3.out',
    delay: 0.6
  });

  gsap.from('.hero-buttons', {
    duration: 1,
    opacity: 0,
    y: 30,
    ease: 'power3.out',
    delay: 0.8
  });

  // Hero image scale and fade
  gsap.from('.hero-image-wrapper', {
    duration: 1.2,
    opacity: 0,
    scale: 0.9,
    ease: 'power3.out',
    delay: 0.5
  });

  // ============================================
  // SECTION HEADERS
  // ============================================

  gsap.utils.toArray('.section-header').forEach((header) => {
    gsap.from(header, {
      scrollTrigger: {
        trigger: header,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      duration: 0.8,
      opacity: 0,
      y: 40,
      ease: 'power3.out'
    });
  });

  // ============================================
  // CATEGORY CARDS - Staggered Grid Reveal
  // ============================================

  gsap.from('.category-card', {
    scrollTrigger: {
      trigger: '.categories-grid',
      start: 'top 75%',
      toggleActions: 'play none none reverse'
    },
    duration: 0.8,
    opacity: 0,
    y: 60,
    stagger: 0.15,
    ease: 'back.out(1.7)'
  });

  // ============================================
  // PRODUCT CARDS - Staggered Grid Reveal
  // ============================================

  gsap.utils.toArray('.products-grid').forEach((grid) => {
    const cards = grid.querySelectorAll('.product-card');
    gsap.from(cards, {
      scrollTrigger: {
        trigger: grid,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      duration: 0.7,
      opacity: 0,
      y: 50,
      stagger: {
        amount: 0.5,
        grid: 'auto',
        from: 'top'
      },
      ease: 'power3.out'
    });
  });

  // ============================================
  // STATS SECTION - Counting Animation
  // ============================================

  gsap.utils.toArray('.stat-item').forEach((stat, index) => {
    const value = stat.querySelector('.stat-value');
    const text = value.textContent;
    const number = text.match(/[\d.]+/);

    if (number) {
      gsap.from(value, {
        scrollTrigger: {
          trigger: stat,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        },
        duration: 1.5,
        opacity: 0,
        scale: 0.5,
        ease: 'back.out(1.7)',
        delay: index * 0.1
      });
    }
  });

  // ============================================
  // VALUE CARDS
  // ============================================

  gsap.from('.value-card', {
    scrollTrigger: {
      trigger: '.values-grid',
      start: 'top 75%',
      toggleActions: 'play none none reverse'
    },
    duration: 0.8,
    opacity: 0,
    y: 50,
    stagger: 0.15,
    ease: 'power3.out'
  });

  // ============================================
  // TEAM CARDS
  // ============================================

  gsap.from('.team-card', {
    scrollTrigger: {
      trigger: '.team-grid',
      start: 'top 75%',
      toggleActions: 'play none none reverse'
    },
    duration: 0.8,
    opacity: 0,
    y: 50,
    stagger: 0.1,
    ease: 'back.out(1.7)'
  });

  // ============================================
  // CONTACT INFO CARDS
  // ============================================

  gsap.from('.contact-info-card', {
    scrollTrigger: {
      trigger: '.contact-info',
      start: 'top 75%',
      toggleActions: 'play none none reverse'
    },
    duration: 0.7,
    opacity: 0,
    x: -50,
    stagger: 0.1,
    ease: 'power3.out'
  });

  // Contact form slide from right
  gsap.from('.contact-form', {
    scrollTrigger: {
      trigger: '.contact-form',
      start: 'top 75%',
      toggleActions: 'play none none reverse'
    },
    duration: 0.8,
    opacity: 0,
    x: 50,
    ease: 'power3.out',
    delay: 0.2
  });

  // ============================================
  // ABOUT PAGE ANIMATIONS
  // ============================================

  gsap.from('.about-title', {
    scrollTrigger: {
      trigger: '.about-hero',
      start: 'top 60%',
      toggleActions: 'play none none reverse'
    },
    duration: 1,
    opacity: 0,
    y: 50,
    ease: 'power3.out'
  });

  gsap.from('.about-subtitle', {
    scrollTrigger: {
      trigger: '.about-hero',
      start: 'top 60%',
      toggleActions: 'play none none reverse'
    },
    duration: 1,
    opacity: 0,
    y: 40,
    ease: 'power3.out',
    delay: 0.2
  });

  gsap.from('.about-image', {
    scrollTrigger: {
      trigger: '.about-grid',
      start: 'top 70%',
      toggleActions: 'play none none reverse'
    },
    duration: 1,
    opacity: 0,
    x: -80,
    ease: 'power3.out'
  });

  gsap.from('.about-content', {
    scrollTrigger: {
      trigger: '.about-grid',
      start: 'top 70%',
      toggleActions: 'play none none reverse'
    },
    duration: 1,
    opacity: 0,
    x: 80,
    ease: 'power3.out',
    delay: 0.2
  });

  // ============================================
  // PARALLAX EFFECTS
  // ============================================

  // Subtle parallax on hero image
  gsap.to('.hero-image-wrapper', {
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    },
    y: 100,
    ease: 'none'
  });

  // ============================================
  // HEADER ANIMATION ON SCROLL
  // ============================================

  gsap.to('.header', {
    scrollTrigger: {
      trigger: '.header',
      start: 'top top',
      end: '+=100',
      scrub: true
    },
    backgroundColor: 'rgba(255, 255, 255, 0.98)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
  });

  // ============================================
  // MAGNETIC BUTTON EFFECTS
  // ============================================

  const magneticButtons = document.querySelectorAll('.btn, .product-action-btn, .add-to-cart-btn');

  magneticButtons.forEach((button) => {
    button.addEventListener('mousemove', (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(button, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.3,
        ease: 'power2.out'
      });
    });

    button.addEventListener('mouseleave', () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.5)'
      });
    });
  });

  // ============================================
  // PRODUCT CARD HOVER ENHANCEMENTS
  // ============================================

  document.querySelectorAll('.product-card').forEach((card) => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card.querySelector('.product-image-placeholder'), {
        scale: 1.1,
        duration: 0.4,
        ease: 'power2.out'
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card.querySelector('.product-image-placeholder'), {
        scale: 1,
        duration: 0.4,
        ease: 'power2.out'
      });
    });
  });

  // ============================================
  // CATEGORY CARD ICON BOUNCE
  // ============================================

  document.querySelectorAll('.category-card').forEach((card) => {
    const icon = card.querySelector('.category-icon');

    card.addEventListener('mouseenter', () => {
      gsap.to(icon, {
        scale: 1.3,
        rotation: 10,
        duration: 0.4,
        ease: 'back.out(1.7)'
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(icon, {
        scale: 1,
        rotation: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.5)'
      });
    });
  });

  // ============================================
  // PAGE LOAD REVEAL
  // ============================================

  gsap.to('body', {
    duration: 0.5,
    opacity: 1,
    ease: 'power2.out',
    delay: 0.1
  });

  // ============================================
  // CURSOR TRAIL EFFECT (Subtle)
  // ============================================

  const cursorTrail = document.createElement('div');
  cursorTrail.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    border: 1px solid rgba(201, 169, 98, 0.3);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.3s;
  `;
  document.body.appendChild(cursorTrail);

  let mouseX = 0, mouseY = 0;
  let trailX = 0, trailY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (e.target.closest('a, button, .product-card, .category-card')) {
      cursorTrail.style.opacity = '1';
    } else {
      cursorTrail.style.opacity = '0';
    }
  });

  function animateTrail() {
    trailX += (mouseX - trailX) * 0.2;
    trailY += (mouseY - trailY) * 0.2;

    cursorTrail.style.left = trailX + 'px';
    cursorTrail.style.top = trailY + 'px';

    requestAnimationFrame(animateTrail);
  }
  animateTrail();

  // ============================================
  // TEXT REVEAL ANIMATION FOR HEADLINES
  // ============================================

  gsap.utils.toArray('.hero-title, .page-title, .section-title').forEach((title) => {
    const text = title.textContent;
    title.innerHTML = text.split('').map((char, i) => {
      if (char === ' ') return '<span class="char" style="display:inline-block;width:0.3em;"> </span>';
      return `<span class="char" style="display:inline-block;opacity:0;transform:translateY(20px);">${char}</span>`;
    }).join('');

    gsap.to(title.querySelectorAll('.char'), {
      scrollTrigger: {
        trigger: title,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      opacity: 1,
      y: 0,
      stagger: 0.02,
      duration: 0.5,
      ease: 'power3.out'
    });
  });
});
