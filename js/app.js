/*
 * APP.JS — Main application logic
 * Handles: init, navigation, modal, scroll, interactions
 */

const App = {
  init() {
    Renderer.renderSection(DAILY_ENGLISH, 'daily-phases-container');
    Renderer.renderSection(MEDICAL_ENGLISH, 'medical-phases-container');
    this.updateProgressPill();
    this.initNavbar();
    this.initScrollReveal();
    this.initModal();
    this.initBackToTop();
    this.updateStatCount();
  },

  /* --- Find a lesson by ID across all data --- */
  findLesson(id) {
    for (const section of [DAILY_ENGLISH, MEDICAL_ENGLISH]) {
      for (const phase of section.phases) {
        const lesson = phase.lessons.find(l => l.id === id);
        if (lesson) return lesson;
      }
    }
    return null;
  },

  /* --- Phase toggle (expand/collapse) --- */
  togglePhase(phaseId) {
    const el = document.getElementById('phase-' + phaseId);
    const header = el?.previousElementSibling;
    if (!el) return;
    const isOpen = el.classList.contains('open');
    el.classList.toggle('open');
    header?.classList.toggle('expanded');
    if (!isOpen) {
      setTimeout(() => {
        el.querySelectorAll('.lesson-card').forEach((card, i) => {
          setTimeout(() => card.classList.add('visible'), i * 60);
        });
      }, 100);
    }
  },

  /* --- Lesson modal --- */
  openLesson(id) {
    const lesson = this.findLesson(id);
    if (!lesson) return;
    const modal = document.getElementById('lesson-modal');
    const body = document.getElementById('modal-body');
    body.innerHTML = Renderer.renderModal(lesson);
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  },

  closeModal() {
    document.getElementById('lesson-modal').classList.remove('open');
    document.body.style.overflow = '';
  },

  initModal() {
    document.getElementById('modal-close').addEventListener('click', () => this.closeModal());
    document.getElementById('lesson-modal').addEventListener('click', e => {
      if (e.target.id === 'lesson-modal') this.closeModal();
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') this.closeModal();
    });
  },

  /* --- Toggle lesson completion --- */
  toggleComplete(id) {
    const nowDone = Progress.toggle(id);
    // Re-render everything
    Renderer.renderSection(DAILY_ENGLISH, 'daily-phases-container');
    Renderer.renderSection(MEDICAL_ENGLISH, 'medical-phases-container');
    this.initScrollReveal();
    this.updateProgressPill();
    // Re-open modal with updated state
    this.openLesson(id);
    // Re-open the phase that contains this lesson
    for (const section of [DAILY_ENGLISH, MEDICAL_ENGLISH]) {
      for (const phase of section.phases) {
        if (phase.lessons.some(l => l.id === id)) {
          const el = document.getElementById('phase-' + phase.id);
          if (el) {
            el.classList.add('open');
            el.previousElementSibling?.classList.add('expanded');
            el.querySelectorAll('.lesson-card').forEach(c => c.classList.add('visible'));
          }
        }
      }
    }
  },

  /* --- Progress pill in navbar --- */
  updateProgressPill() {
    const stats = Progress.getStats();
    const pill = document.getElementById('progress-pill-text');
    if (pill) pill.textContent = stats.pct + '%';
    const pillEl = document.getElementById('progress-pill');
    pillEl?.classList.add('updated');
    setTimeout(() => pillEl?.classList.remove('updated'), 800);
  },

  /* --- Update hero stat count --- */
  updateStatCount() {
    const total = Progress.getAllLessonIds().length;
    const el = document.getElementById('stat-lessons');
    if (el) el.textContent = total;
  },

  /* --- Navbar scroll & mobile toggle --- */
  initNavbar() {
    const navbar = document.getElementById('navbar');
    const toggle = document.getElementById('nav-toggle');
    const links = document.getElementById('nav-links');

    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    toggle?.addEventListener('click', () => {
      toggle.classList.toggle('active');
      links.classList.toggle('open');
    });

    links?.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('active');
        links.classList.remove('open');
      });
    });

    // Active nav link on scroll
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 120) current = s.id;
      });
      links?.querySelectorAll('.nav-link').forEach(l => {
        l.classList.toggle('active', l.getAttribute('href') === '#' + current);
      });
    });
  },

  /* --- Scroll reveal (Intersection Observer) --- */
  initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed', 'visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal, .overview-card, .skill-card, .tip-card').forEach(el => {
      observer.observe(el);
    });
  },

  /* --- Back to top button --- */
  initBackToTop() {
    const btn = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
      btn?.classList.toggle('visible', window.scrollY > 600);
    });
    btn?.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
};

/* --- Start the app --- */
document.addEventListener('DOMContentLoaded', () => App.init());
