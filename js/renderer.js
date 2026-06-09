/*
 * RENDERER.JS — Renders lessons from data into the DOM
 * Handles: phases, lesson cards, modal content, dashboard, search, TTS
 */

const Renderer = {
  /* Render all phases for a section */
  renderSection(data, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = data.phases.map(phase => this.renderPhase(phase, data.color)).join('');
  },

  /* Render a single phase block */
  renderPhase(phase, color) {
    const lessons = phase.lessons || [];
    const completed = lessons.filter(l => Progress.isCompleted(l.id)).length;
    const pct = lessons.length ? Math.round((completed / lessons.length) * 100) : 0;

    return `
      <div class="phase-block reveal" data-phase="${phase.id}">
        <div class="phase-header phase-header-${color}" onclick="App.togglePhase('${phase.id}')">
          <span class="phase-icon">${phase.icon}</span>
          <div class="phase-info">
            <div class="phase-name">${phase.name}</div>
            <div class="phase-meta">
              <span>⏱ ${phase.duration}</span>
              <span>📖 ${lessons.length} bài học</span>
              <span>✅ ${completed}/${lessons.length} hoàn thành</span>
            </div>
          </div>
          <div class="phase-progress-wrap">
            <div class="phase-progress-bar">
              <div class="phase-progress-fill phase-progress-fill-${color}" style="width:${pct}%"></div>
            </div>
            <span class="phase-progress-text" data-target="${pct}">0%</span>
          </div>
          <div class="phase-toggle">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </div>
        </div>
        <div class="phase-lessons" id="phase-${phase.id}">
          ${lessons.map((l, i) => this.renderLessonCard(l, color, i)).join('')}
        </div>
      </div>`;
  },

  /* Render a single lesson card */
  renderLessonCard(lesson, color, index) {
    const done = Progress.isCompleted(lesson.id);
    const skillBadges = (lesson.skills || []).map(s => {
      const labels = {listening:'🎧 Nghe', speaking:'🗣️ Nói', vocabulary:'📚 Từ vựng', reading:'📖 Đọc'};
      return `<span class="skill-badge skill-badge-${s}">${labels[s] || s}</span>`;
    }).join('');

    return `
      <div class="lesson-card lesson-card-${color} ${done ? 'completed' : ''}"
           onclick="App.openLesson('${lesson.id}')"
           data-lesson-id="${lesson.id}"
           data-search-text="${(lesson.title + ' ' + lesson.titleEn + ' ' + lesson.description).toLowerCase()}"
           style="transition-delay:${index * 0.06}s">
        <div class="lesson-card-top">
          <span class="lesson-icon">${lesson.icon}</span>
          <div>
            <div class="lesson-number">Bài ${lesson.id.replace(/[a-z]/g,'')}</div>
            <div class="lesson-title">${lesson.title}</div>
            <div class="lesson-title-en">${lesson.titleEn}</div>
          </div>
        </div>
        <div class="lesson-desc">${lesson.description}</div>
        <div class="lesson-footer">
          <div class="lesson-skills">${skillBadges}</div>
          <span class="lesson-duration">⏱ ${lesson.duration}</span>
        </div>
      </div>`;
  },

  /* Render modal content for a lesson */
  renderModal(lesson, sectionColor) {
    const done = Progress.isCompleted(lesson.id);
    const skillBadges = (lesson.skills || []).map(s => {
      const labels = {listening:'🎧 Nghe', speaking:'🗣️ Nói', vocabulary:'📚 Từ vựng', reading:'📖 Đọc'};
      return `<span class="modal-meta-item">${labels[s] || s}</span>`;
    }).join('');

    const vocabRows = (lesson.vocabulary || []).map(v =>
      `<tr>
        <td class="vocab-en"><div class="vocab-en-cell"><span>${v.en}</span><button class="tts-btn" onclick="event.stopPropagation();App.speak('${v.en.replace(/'/g,"\\'")}');" title="Phát âm">🔊</button></div></td>
        <td>${v.vi}</td>
        <td class="vocab-phonetic">${v.phonetic || ''}</td>
      </tr>`
    ).join('');

    const phraseItems = (lesson.phrases || []).map(p =>
      `<div class="phrase-item">
        <div class="phrase-header">
          <div class="phrase-en">${p.en}</div>
          <button class="tts-btn" onclick="event.stopPropagation();App.speak('${p.en.replace(/'/g,"\\'")}');" title="Phát âm">🔊</button>
        </div>
        <div class="phrase-vi">→ ${p.vi}</div>
      </div>`
    ).join('');

    const objectiveItems = (lesson.objectives || []).map(o =>
      `<div class="objective-item">${o}</div>`
    ).join('');

    const activityItems = (lesson.practice || []).map(a =>
      `<div class="activity-item"><span class="activity-icon">▸</span>${a}</div>`
    ).join('');

    // Set modal color class
    const modal = document.querySelector('.modal');
    if (modal) {
      modal.classList.remove('modal-daily', 'modal-medical');
      if (sectionColor) modal.classList.add('modal-' + sectionColor);
    }

    return `
      <div class="modal-header-icon">${lesson.icon}</div>
      <div class="modal-lesson-number">Bài ${lesson.id.replace(/[a-z]/g,'')}</div>
      <h2 class="modal-title">${lesson.title}</h2>
      <div class="modal-title-en">${lesson.titleEn}</div>
      <div class="modal-meta">
        <span class="modal-meta-item">⏱ ${lesson.duration}</span>
        ${skillBadges}
      </div>
      <p class="modal-description">${lesson.description}</p>

      ${objectiveItems ? `
      <div class="modal-section">
        <h3 class="modal-section-title">🎯 Mục Tiêu Bài Học</h3>
        <div class="objectives-list">${objectiveItems}</div>
      </div>` : ''}

      ${vocabRows ? `
      <div class="modal-section">
        <h3 class="modal-section-title">📚 Từ Vựng Chính <button class="tts-btn" onclick="event.stopPropagation();App.speakAllVocab('${lesson.id}');" title="Phát âm tất cả">🔊</button></h3>
        <table class="vocab-table">
          <thead><tr><th>English</th><th>Tiếng Việt</th><th>Phát Âm</th></tr></thead>
          <tbody>${vocabRows}</tbody>
        </table>
      </div>` : ''}

      ${phraseItems ? `
      <div class="modal-section">
        <h3 class="modal-section-title">💬 Mẫu Câu Quan Trọng</h3>
        <div class="phrases-list">${phraseItems}</div>
      </div>` : ''}

      ${activityItems ? `
      <div class="modal-section">
        <h3 class="modal-section-title">✏️ Hoạt Động Luyện Tập</h3>
        <div class="activities-list">${activityItems}</div>
      </div>` : ''}

      ${lesson.tip ? `
      <div class="modal-tip">
        <span class="modal-tip-icon">💡</span>
        <span><strong>Mẹo:</strong> ${lesson.tip}</span>
      </div>` : ''}

      <div class="modal-actions">
        <button class="btn-complete ${done ? 'is-completed' : ''}" onclick="App.toggleComplete('${lesson.id}')">
          ${done ? '✓ Đã Hoàn Thành' : '☐ Đánh Dấu Hoàn Thành'}
        </button>
      </div>`;
  },

  /* Render dashboard (Item 6) */
  renderDashboard(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const stats = Progress.getStats();
    const dailyStats = Progress.getSectionStats(DAILY_ENGLISH);
    const medicalStats = Progress.getSectionStats(MEDICAL_ENGLISH);
    const streak = Progress.getStreak();
    const nextLesson = Progress.getNextLesson();

    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (stats.pct / 100) * circumference;

    const nextLessonHtml = nextLesson ? `
      <div class="dashboard-next" onclick="App.openLesson('${nextLesson.id}')">
        <span class="dashboard-next-icon">${nextLesson.icon}</span>
        <div class="dashboard-next-info">
          <div class="dashboard-next-label">Bài tiếp theo</div>
          <div class="dashboard-next-title">${nextLesson.title}</div>
        </div>
        <span class="dashboard-next-arrow">→</span>
      </div>` : '';

    container.innerHTML = `
      <div class="dashboard reveal">
        <div class="dashboard-ring">
          <svg viewBox="0 0 100 100">
            <defs>
              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#6366f1"/>
                <stop offset="50%" stop-color="#8b5cf6"/>
                <stop offset="100%" stop-color="#a855f7"/>
              </linearGradient>
            </defs>
            <circle class="dashboard-ring-bg" cx="50" cy="50" r="${radius}"/>
            <circle class="dashboard-ring-fill" cx="50" cy="50" r="${radius}"
              stroke-dasharray="${circumference}"
              stroke-dashoffset="${offset}"
              style="--circumference:${circumference};--dash-offset:${offset}"/>
          </svg>
          <div class="dashboard-ring-text">
            <span class="dashboard-ring-pct" data-target="${stats.pct}">0%</span>
            <span class="dashboard-ring-label">Hoàn thành</span>
          </div>
        </div>
        <div class="dashboard-details">
          <div class="dashboard-stat">
            <div class="dashboard-stat-label">Bài đã học</div>
            <div class="dashboard-stat-value"><span class="stat-accent">${stats.completed}</span> / ${stats.total}</div>
          </div>
          <div class="dashboard-stat">
            <div class="dashboard-stat-label">🔥 Streak</div>
            <div class="dashboard-stat-value"><span class="stat-accent">${streak}</span> ngày</div>
          </div>
          <div class="dashboard-progress-row">
            <div class="dashboard-progress-item">
              <span class="dp-label" style="color:var(--daily-color)">🌍 Đời Thường</span>
              <div class="dp-bar"><div class="dp-fill dp-fill-daily" style="width:${dailyStats.pct}%"></div></div>
              <span class="dp-text">${dailyStats.completed}/${dailyStats.total}</span>
            </div>
            <div class="dashboard-progress-item">
              <span class="dp-label" style="color:var(--medical-color)">🏥 Chuyên Ngành</span>
              <div class="dp-bar"><div class="dp-fill dp-fill-medical" style="width:${medicalStats.pct}%"></div></div>
              <span class="dp-text">${medicalStats.completed}/${medicalStats.total}</span>
            </div>
          </div>
          ${nextLessonHtml}
        </div>
      </div>`;
  },

  /* Render search bar (Item 5) */
  renderSearchBar(containerId, placeholder) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const existingSearch = container.querySelector('.search-container');
    if (existingSearch) return; // already rendered

    const searchHtml = `
      <div class="search-container">
        <span class="search-icon">🔍</span>
        <input type="text" class="search-input" placeholder="${placeholder}" data-section="${containerId}">
        <button class="search-clear" title="Xóa">×</button>
      </div>`;
    container.insertAdjacentHTML('afterbegin', searchHtml);
  }
};

/* --- Progress Tracking (localStorage) --- */
const Progress = {
  KEY: 'english_nurse_progress',
  STREAK_KEY: 'english_nurse_streak',

  getAll() {
    try { return JSON.parse(localStorage.getItem(this.KEY)) || {}; }
    catch { return {}; }
  },

  isCompleted(id) {
    return !!this.getAll()[id];
  },

  toggle(id) {
    const data = this.getAll();
    if (data[id]) delete data[id];
    else {
      data[id] = Date.now();
      this.updateStreak();
    }
    localStorage.setItem(this.KEY, JSON.stringify(data));
    return !!data[id];
  },

  getStats() {
    const all = this.getAll();
    const allLessons = this.getAllLessonIds();
    const completed = allLessons.filter(id => !!all[id]).length;
    return { completed, total: allLessons.length, pct: allLessons.length ? Math.round((completed / allLessons.length) * 100) : 0 };
  },

  getSectionStats(sectionData) {
    const all = this.getAll();
    const ids = [];
    sectionData.phases.forEach(phase => {
      phase.lessons.forEach(l => ids.push(l.id));
    });
    const completed = ids.filter(id => !!all[id]).length;
    return { completed, total: ids.length, pct: ids.length ? Math.round((completed / ids.length) * 100) : 0 };
  },

  getAllLessonIds() {
    const ids = [];
    [DAILY_ENGLISH, MEDICAL_ENGLISH].forEach(section => {
      section.phases.forEach(phase => {
        phase.lessons.forEach(l => ids.push(l.id));
      });
    });
    return ids;
  },

  getNextLesson() {
    const all = this.getAll();
    for (const section of [DAILY_ENGLISH, MEDICAL_ENGLISH]) {
      for (const phase of section.phases) {
        for (const lesson of phase.lessons) {
          if (!all[lesson.id]) return lesson;
        }
      }
    }
    return null;
  },

  updateStreak() {
    const now = new Date();
    const todayStr = now.toISOString().split('T')[0];
    let streakData;
    try { streakData = JSON.parse(localStorage.getItem(this.STREAK_KEY)) || {}; }
    catch { streakData = {}; }

    if (streakData.lastDate === todayStr) return; // already logged today

    const yesterday = new Date(now);
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split('T')[0];

    if (streakData.lastDate === yesterdayStr) {
      streakData.count = (streakData.count || 0) + 1;
    } else {
      streakData.count = 1;
    }
    streakData.lastDate = todayStr;
    localStorage.setItem(this.STREAK_KEY, JSON.stringify(streakData));
  },

  getStreak() {
    try {
      const data = JSON.parse(localStorage.getItem(this.STREAK_KEY)) || {};
      const today = new Date().toISOString().split('T')[0];
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toISOString().split('T')[0];
      // Only count if last activity was today or yesterday
      if (data.lastDate === today || data.lastDate === yesterdayStr) {
        return data.count || 0;
      }
      return 0;
    } catch { return 0; }
  }
};
