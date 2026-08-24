/* =============================================
   Sakshi Neeraj — Portfolio JavaScript
   Typing effect, scroll reveal, nav behavior
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  // ---------- Typing Effect ----------
  const typingElement = document.querySelector('.hero-typing');
  const phrases = [
    'Platform Engineer',
    'AI Enabled Automation',
    'SRE Practitioner',
    'DevSecOps Implementor',
    'Cloud Infrastructure',
  ];
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const TYPING_SPEED = 80;
  const DELETING_SPEED = 45;
  const PAUSE_AFTER_TYPING = 1800;
  const PAUSE_AFTER_DELETING = 400;

  function typeEffect() {
    const currentPhrase = phrases[phraseIndex];

    if (!isDeleting) {
      typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      if (charIndex === currentPhrase.length) {
        isDeleting = true;
        setTimeout(typeEffect, PAUSE_AFTER_TYPING);
        return;
      }
      setTimeout(typeEffect, TYPING_SPEED);
    } else {
      typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(typeEffect, PAUSE_AFTER_DELETING);
        return;
      }
      setTimeout(typeEffect, DELETING_SPEED);
    }
  }

  // Start typing after initial animations
  setTimeout(typeEffect, 1600);

  // ---------- Navbar Scroll Behavior ----------
  const navbar = document.querySelector('.navbar');
  const scrollTopBtn = document.querySelector('.scroll-top');

  function handleScroll() {
    const scrollY = window.scrollY;

    // Navbar background
    if (scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Scroll-to-top button
    if (scrollY > 500) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }

    // Active nav link
    updateActiveNav();
  }

  window.addEventListener('scroll', handleScroll, { passive: true });

  // Scroll to top
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ---------- Active Nav Link ----------
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  function updateActiveNav() {
    const scrollY = window.scrollY + 120;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  // ---------- Mobile Menu ----------
  const navToggle = document.querySelector('.nav-toggle');
  const navLinksContainer = document.querySelector('.nav-links');

  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    navLinksContainer.classList.toggle('open');
  });

  // Close mobile menu when a link is clicked
  navLinksContainer.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('open');
      navLinksContainer.classList.remove('open');
    });
  });

  // ---------- Scroll Reveal (IntersectionObserver) ----------
  const revealElements = document.querySelectorAll(
    '.timeline-item, .skill-card, .project-card, .cert-card, .achievement-card, .edu-card, .reveal-element'
  );

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  revealElements.forEach((el, index) => {
    // Add staggered delay for grid items
    const parent = el.parentElement;
    if (parent && (parent.classList.contains('skills-grid') ||
                   parent.classList.contains('projects-grid') ||
                   parent.classList.contains('certs-grid') ||
                   parent.classList.contains('achievements-grid'))) {
      const siblings = Array.from(parent.children);
      const siblingIndex = siblings.indexOf(el);
      el.style.transitionDelay = `${siblingIndex * 0.1}s`;
    }
    revealObserver.observe(el);
  });

  // ---------- Smooth Scroll for anchor links ----------
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ---------- Initial scroll check ----------
  handleScroll();
});

