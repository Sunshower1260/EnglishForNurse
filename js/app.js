/*
 * APP.JS — Main application logic
 * Handles: init, navigation, modal, scroll, interactions, search, TTS, dashboard, typing
 */

const App = {
  init() {
    Renderer.renderSection(DAILY_ENGLISH, 'daily-phases-container');
    Renderer.renderSection(MEDICAL_ENGLISH, 'medical-phases-container');

    // Dashboard (Item 6)
    Renderer.renderDashboard('dashboard-container');

    // Search bars (Item 5)
    Renderer.renderSearchBar('daily-phases-container', 'Tìm bài học đời thường...');
    Renderer.renderSearchBar('medical-phases-container', 'Tìm bài học chuyên ngành...');
    this.initSearch();

    this.updateProgressPill();
    this.initNavbar();
    this.initScrollReveal();
    this.initModal();
    this.initBackToTop();
    this.updateStatCount();
    this.initTypingAnimation(); // Item 4
    this.initBottomNav(); // Item 8
    this.animateCountUps(); // Item 3
  },

  /* --- Find a lesson by ID across all data --- */
  findLesson(id) {
    for (const section of [DAILY_ENGLISH, MEDICAL_ENGLISH]) {
      for (const phase of section.phases) {
        const lesson = phase.lessons.find(l => l.id === id);
        if (lesson) return { lesson, color: section.color };
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
      // Animate count-up for this phase's progress (Item 3)
      const progressText = header?.querySelector('.phase-progress-text');
      if (progressText) {
        this.countUp(progressText, parseInt(progressText.dataset.target) || 0);
      }
    }
  },

  /* --- Count up animation (Item 3) --- */
  countUp(el, target, duration = 600) {
    const start = 0;
    const startTime = performance.now();
    el.classList.add('counting');

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const current = Math.round(start + (target - start) * eased);
      el.textContent = current + '%';
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        el.classList.remove('counting');
      }
    };
    requestAnimationFrame(animate);
  },

  /* --- Animate all visible count-ups (Item 3) --- */
  animateCountUps() {
    // Animate dashboard ring percentage
    const ringPct = document.querySelector('.dashboard-ring-pct');
    if (ringPct) {
      const target = parseInt(ringPct.dataset.target) || 0;
      this.countUp(ringPct, target, 1200);
    }
  },

  /* --- Lesson modal --- */
  openLesson(id) {
    const result = this.findLesson(id);
    if (!result) return;
    const { lesson, color } = result;
    const modal = document.getElementById('lesson-modal');
    const body = document.getElementById('modal-body');
    body.innerHTML = Renderer.renderModal(lesson, color);
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

    // Swipe to close on mobile (Item 8)
    let startY = 0;
    let currentY = 0;
    const modalEl = document.querySelector('.modal');

    modalEl?.addEventListener('touchstart', e => {
      if (modalEl.scrollTop <= 0) {
        startY = e.touches[0].clientY;
      }
    }, { passive: true });

    modalEl?.addEventListener('touchmove', e => {
      if (startY > 0) {
        currentY = e.touches[0].clientY;
        const diff = currentY - startY;
        if (diff > 0 && modalEl.scrollTop <= 0) {
          modalEl.style.transform = `translateY(${Math.min(diff * 0.5, 150)}px)`;
          modalEl.style.opacity = Math.max(1 - diff / 400, 0.5);
        }
      }
    }, { passive: true });

    modalEl?.addEventListener('touchend', () => {
      const diff = currentY - startY;
      if (diff > 100 && modalEl.scrollTop <= 0) {
        this.closeModal();
      }
      modalEl.style.transform = '';
      modalEl.style.opacity = '';
      startY = 0;
      currentY = 0;
    });
  },

  /* --- Toggle lesson completion --- */
  toggleComplete(id) {
    const nowDone = Progress.toggle(id);
    // Re-render everything
    Renderer.renderSection(DAILY_ENGLISH, 'daily-phases-container');
    Renderer.renderSection(MEDICAL_ENGLISH, 'medical-phases-container');
    Renderer.renderDashboard('dashboard-container');
    // Re-init search bars
    Renderer.renderSearchBar('daily-phases-container', 'Tìm bài học đời thường...');
    Renderer.renderSearchBar('medical-phases-container', 'Tìm bài học chuyên ngành...');
    this.initSearch();
    this.initScrollReveal();
    this.updateProgressPill();
    this.animateCountUps();
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
      // Update bottom nav active state
      document.querySelectorAll('.bottom-nav-item').forEach(item => {
        item.classList.toggle('active', item.getAttribute('href') === '#' + current);
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

    document.querySelectorAll('.reveal, .overview-card, .skill-card, .tip-card, .dashboard').forEach(el => {
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
  },

  /* --- Typing animation (Item 4) --- */
  initTypingAnimation() {
    const el = document.getElementById('typing-target');
    if (!el) return;
    const fullText = el.dataset.text || el.textContent;
    el.textContent = '';
    el.classList.add('typing-text');

    let i = 0;
    const type = () => {
      if (i < fullText.length) {
        el.textContent = fullText.substring(0, i + 1);
        i++;
        setTimeout(type, 50 + Math.random() * 40);
      } else {
        setTimeout(() => el.classList.add('done'), 1500);
      }
    };
    // Start after hero animations complete
    setTimeout(type, 1400);
  },

  /* --- Search / Filter (Item 5) --- */
  initSearch() {
    document.querySelectorAll('.search-input').forEach(input => {
      let debounceTimer;
      const clearBtn = input.parentElement.querySelector('.search-clear');

      input.addEventListener('input', () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
          this.filterLessons(input);
        }, 200);
        clearBtn?.classList.toggle('visible', input.value.length > 0);
      });

      clearBtn?.addEventListener('click', () => {
        input.value = '';
        clearBtn.classList.remove('visible');
        this.filterLessons(input);
        input.focus();
      });
    });
  },

  filterLessons(input) {
    const query = input.value.toLowerCase().trim();
    const container = input.closest('[id$="-container"]') || input.parentElement.parentElement;

    container.querySelectorAll('.lesson-card').forEach(card => {
      if (!query) {
        card.classList.remove('search-hidden');
      } else {
        const text = card.dataset.searchText || '';
        card.classList.toggle('search-hidden', !text.includes(query));
      }
    });

    // Hide phase blocks where ALL cards are hidden
    container.querySelectorAll('.phase-block').forEach(block => {
      const visibleCards = block.querySelectorAll('.lesson-card:not(.search-hidden)');
      block.classList.toggle('search-hidden', query && visibleCards.length === 0);

      // Auto-expand phases with matching results
      if (query && visibleCards.length > 0) {
        const lessons = block.querySelector('.phase-lessons');
        const header = block.querySelector('.phase-header');
        if (lessons && !lessons.classList.contains('open')) {
          lessons.classList.add('open');
          header?.classList.add('expanded');
          visibleCards.forEach(c => c.classList.add('visible'));
        }
      }
    });

    // Show "no results" if ALL phase blocks are hidden
    const existingNoResults = container.querySelector('.no-results');
    if (existingNoResults) existingNoResults.remove();

    if (query) {
      const allHidden = container.querySelectorAll('.phase-block:not(.search-hidden)').length === 0;
      if (allHidden) {
        container.insertAdjacentHTML('beforeend', '<div class="no-results">😔 Không tìm thấy bài học nào phù hợp</div>');
      }
    }
  },

  /* --- Text-to-Speech (Item 7) --- */
  speak(text) {
    if (!('speechSynthesis' in window)) {
      console.warn('TTS not supported');
      return;
    }
    // Cancel any ongoing speech
    speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.85; // Slightly slower for learners
    utterance.pitch = 1;

    // Try to find an English voice
    const voices = speechSynthesis.getVoices();
    const englishVoice = voices.find(v => v.lang.startsWith('en') && v.name.includes('Female'))
      || voices.find(v => v.lang.startsWith('en-US'))
      || voices.find(v => v.lang.startsWith('en'));
    if (englishVoice) utterance.voice = englishVoice;

    // Visual feedback on the button that was clicked
    const activeBtn = document.activeElement;
    if (activeBtn?.classList.contains('tts-btn')) {
      activeBtn.classList.add('playing');
      utterance.onend = () => activeBtn.classList.remove('playing');
      utterance.onerror = () => activeBtn.classList.remove('playing');
    }

    speechSynthesis.speak(utterance);
  },

  speakAllVocab(lessonId) {
    const result = this.findLesson(lessonId);
    if (!result) return;
    const { lesson } = result;
    const vocab = lesson.vocabulary || [];
    if (!vocab.length) return;

    speechSynthesis.cancel();
    vocab.forEach((v, i) => {
      const utterance = new SpeechSynthesisUtterance(v.en);
      utterance.lang = 'en-US';
      utterance.rate = 0.8;
      const voices = speechSynthesis.getVoices();
      const englishVoice = voices.find(v => v.lang.startsWith('en-US')) || voices.find(v => v.lang.startsWith('en'));
      if (englishVoice) utterance.voice = englishVoice;
      speechSynthesis.speak(utterance);
    });
  },

  /* --- Mobile Bottom Nav (Item 8) --- */
  initBottomNav() {
    document.querySelectorAll('.bottom-nav-item').forEach(item => {
      item.addEventListener('click', (e) => {
        document.querySelectorAll('.bottom-nav-item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
      });
    });
  }
};

/* --- Ensure voices are loaded for TTS --- */
if ('speechSynthesis' in window) {
  speechSynthesis.onvoiceschanged = () => speechSynthesis.getVoices();
}

/* --- Start the app --- */
document.addEventListener('DOMContentLoaded', () => App.init());
