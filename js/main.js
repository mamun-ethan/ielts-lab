/**
 * IELTS LAB (Tangail) - Main JavaScript
 * Handles navigation, course filters, interactive calculators,
 * modal triggers, FAQ accordions, and WhatsApp lead submissions.
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileDrawer();
  initCourseFilters();
  initBandScoreCalculator();
  initFaqAccordion();
  initModalAndForms();
  initScrollEffects();
});

/* ==========================================================================
   1. Navbar & Header Sticky State
   ========================================================================== */
function initNavbar() {
  const header = document.getElementById('header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id], header[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Active Section Tracking
    let currentSection = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   2. Mobile Drawer Navigation
   ========================================================================== */
function initMobileDrawer() {
  const toggleBtn = document.getElementById('mobile-toggle');
  const closeBtn = document.getElementById('mobile-close');
  const drawer = document.getElementById('mobile-drawer');
  const overlay = document.getElementById('mobile-overlay');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  function openDrawer() {
    drawer.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (toggleBtn) toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
      const filter = link.getAttribute('data-filter');
      if (filter) {
        activateCourseFilter(filter);
      }
    });
  });
}

/* ==========================================================================
   3. Course Filtering
   ========================================================================== */
function activateCourseFilter(filter) {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const courseCards = document.querySelectorAll('.course-card');

  tabBtns.forEach(btn => {
    if (btn.getAttribute('data-tab') === filter) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  courseCards.forEach(card => {
    const category = card.getAttribute('data-category');
    if (filter === 'all' || category === filter) {
      card.style.display = 'flex';
      card.style.animation = 'fadeIn 0.4s ease';
    } else {
      card.style.display = 'none';
    }
  });
}

function initCourseFilters() {
  const tabBtns = document.querySelectorAll('.tab-btn');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.getAttribute('data-tab');
      activateCourseFilter(tab);
    });
  });

  // Handle dropdown link filters
  const dropdownFilterLinks = document.querySelectorAll('.dropdown-menu a[data-filter]');
  dropdownFilterLinks.forEach(link => {
    link.addEventListener('click', () => {
      const filter = link.getAttribute('data-filter');
      if (filter) {
        activateCourseFilter(filter);
      }
    });
  });
}

/* ==========================================================================
   4. IELTS Band Score Calculator
   ========================================================================== */
function initBandScoreCalculator() {
  const sListening = document.getElementById('slider-listening');
  const sReading = document.getElementById('slider-reading');
  const sWriting = document.getElementById('slider-writing');
  const sSpeaking = document.getElementById('slider-speaking');

  const vListening = document.getElementById('val-listening');
  const vReading = document.getElementById('val-reading');
  const vWriting = document.getElementById('val-writing');
  const vSpeaking = document.getElementById('val-speaking');

  const overallScoreEl = document.getElementById('overall-score');
  const resultStatusEl = document.getElementById('result-status');

  if (!sListening) return;

  function calculateScore() {
    const l = parseFloat(sListening.value);
    const r = parseFloat(sReading.value);
    const w = parseFloat(sWriting.value);
    const s = parseFloat(sSpeaking.value);

    vListening.textContent = l.toFixed(1);
    vReading.textContent = r.toFixed(1);
    vWriting.textContent = w.toFixed(1);
    vSpeaking.textContent = s.toFixed(1);

    // Calculate exact IELTS rounded band score
    const avg = (l + r + w + s) / 4;
    const decimalPart = avg % 1;
    const integerPart = Math.floor(avg);
    let finalBand = integerPart;

    if (decimalPart < 0.25) {
      finalBand = integerPart;
    } else if (decimalPart >= 0.25 && decimalPart < 0.75) {
      finalBand = integerPart + 0.5;
    } else {
      finalBand = integerPart + 1.0;
    }

    overallScoreEl.textContent = finalBand.toFixed(1);

    // CEFR & University eligibility status
    if (finalBand >= 8.0) {
      resultStatusEl.innerHTML = '🌟 <strong>C2 Mastery</strong> - Eligible for Oxford, Cambridge & Top Global Scholarships!';
      resultStatusEl.style.color = '#fbbf24';
    } else if (finalBand >= 7.5) {
      resultStatusEl.innerHTML = '✨ <strong>C1 Proficient</strong> - Direct entry into top UK, Canada, Australia & USA universities.';
      resultStatusEl.style.color = '#34d399';
    } else if (finalBand >= 6.5) {
      resultStatusEl.innerHTML = '🎯 <strong>B2 Competent</strong> - Meets minimum admission criteria for most global programs.';
      resultStatusEl.style.color = '#60a5fa';
    } else {
      resultStatusEl.innerHTML = '📚 <strong>Foundation Needed</strong> - Let our Tangail mentors boost your score to 7.0+!';
      resultStatusEl.style.color = '#f87171';
    }
  }

  [sListening, sReading, sWriting, sSpeaking].forEach(slider => {
    slider.addEventListener('input', calculateScore);
  });

  calculateScore();
}

/* ==========================================================================
   5. FAQ Accordion
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-accordion-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other items
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });

      if (!isActive) {
        item.classList.add('active');
        questionBtn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* ==========================================================================
   6. Modal Dialog & Form Submissions (With WhatsApp Integration)
   ========================================================================== */
function initModalAndForms() {
  const modal = document.getElementById('consultancy-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalOpenBtns = document.querySelectorAll('.open-consultancy-modal');
  const modalCourseSelect = document.getElementById('modal-course');

  function openModal(courseName) {
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
      if (courseName && modalCourseSelect) {
        modalCourseSelect.value = courseName;
      }
    }
  }

  function closeModal() {
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  modalOpenBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const course = btn.getAttribute('data-course');
      openModal(course || 'IELTS Masterclass (Academic)');
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  // Handle Quick Hero Form Submission
  const heroForm = document.getElementById('hero-quick-form');
  if (heroForm) {
    heroForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('hero-name').value;
      const phone = document.getElementById('hero-phone').value;
      const course = document.getElementById('hero-course').value;

      sendToWhatsApp({
        name,
        phone,
        course,
        note: 'Submitted via Website Hero Quick Form'
      });

      heroForm.reset();
      showToast('Thank you! We received your admission request. Redirecting to WhatsApp for instant confirmation...', 'success');
    });
  }

  // Handle Main Consultation Form Submission
  const mainConsultForm = document.getElementById('main-consultancy-form');
  if (mainConsultForm) {
    mainConsultForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('consult-name').value;
      const phone = document.getElementById('consult-phone').value;
      const email = document.getElementById('consult-email').value;
      const program = document.getElementById('consult-program').value;
      const target = document.getElementById('consult-target').value;
      const message = document.getElementById('consult-message').value;

      sendToWhatsApp({
        name,
        phone,
        email,
        course: `${program} (${target})`,
        note: message || 'Free Consultation Booking'
      });

      mainConsultForm.reset();
      showToast('Booking request submitted! Our Tangail counselor will reach out shortly.', 'success');
    });
  }

  // Handle Modal Form Submission
  const modalForm = document.getElementById('modal-consultancy-form');
  if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('modal-name').value;
      const phone = document.getElementById('modal-phone').value;
      const course = document.getElementById('modal-course').value;
      const time = document.getElementById('modal-time').value;

      closeModal();
      sendToWhatsApp({
        name,
        phone,
        course: `${course} - Preferred Time: ${time}`,
        note: 'Free Demo Class Booking'
      });

      modalForm.reset();
      showToast('Free Demo Class booked successfully! Contacting you on WhatsApp...', 'success');
    });
  }
}

/**
 * Formats data and provides seamless WhatsApp connection with IELTS LAB Tangail
 */
function sendToWhatsApp(data) {
  const whatsappNumber = '8801790314278';
  const text = `*New Admission / Free Consultation Request (IELTS LAB Tangail)*%0A%0A` +
    `👤 *Name:* ${encodeURIComponent(data.name)}%0A` +
    `📞 *Phone:* ${encodeURIComponent(data.phone)}%0A` +
    (data.email ? `✉️ *Email:* ${encodeURIComponent(data.email)}%0A` : '') +
    `🎯 *Course/Program:* ${encodeURIComponent(data.course)}%0A` +
    (data.note ? `💬 *Details:* ${encodeURIComponent(data.note)}%0A` : '') +
    `📍 *Campus:* Kumodini College Gate, Tangail`;

  const waUrl = `https://wa.me/${whatsappNumber}?text=${text}`;

  // Open WhatsApp in new window/tab after a gentle notification delay
  setTimeout(() => {
    window.open(waUrl, '_blank');
  }, 1200);
}

/* ==========================================================================
   7. Scroll Effects & Back to Top
   ========================================================================== */
function initScrollEffects() {
  const backToTopBtn = document.getElementById('back-to-top');

  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

/* ==========================================================================
   8. Toast Notification Utility
   ========================================================================== */
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type === 'success' ? 'toast-success' : ''}`;
  toast.innerHTML = `
    <i class="fa-solid ${type === 'success' ? 'fa-circle-check' : 'fa-circle-info'}"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4500);
}
