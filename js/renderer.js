/*
 * RENDERER.JS — Renders lessons from data into the DOM
 * Handles: phases, lesson cards, modal content
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
            <span class="phase-progress-text">${pct}%</span>
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
  renderModal(lesson) {
    const done = Progress.isCompleted(lesson.id);
    const skillBadges = (lesson.skills || []).map(s => {
      const labels = {listening:'🎧 Nghe', speaking:'🗣️ Nói', vocabulary:'📚 Từ vựng', reading:'📖 Đọc'};
      return `<span class="modal-meta-item">${labels[s] || s}</span>`;
    }).join('');

    const vocabRows = (lesson.vocabulary || []).map(v =>
      `<tr>
        <td class="vocab-en">${v.en}</td>
        <td>${v.vi}</td>
        <td class="vocab-phonetic">${v.phonetic || ''}</td>
      </tr>`
    ).join('');

    const phraseItems = (lesson.phrases || []).map(p =>
      `<div class="phrase-item">
        <div class="phrase-en">${p.en}</div>
        <div class="phrase-vi">→ ${p.vi}</div>
      </div>`
    ).join('');

    const objectiveItems = (lesson.objectives || []).map(o =>
      `<div class="objective-item">${o}</div>`
    ).join('');

    const activityItems = (lesson.practice || []).map(a =>
      `<div class="activity-item"><span class="activity-icon">▸</span>${a}</div>`
    ).join('');

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
        <h3 class="modal-section-title">📚 Từ Vựng Chính</h3>
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
  }
};

/* --- Progress Tracking (localStorage) --- */
const Progress = {
  KEY: 'english_nurse_progress',

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
    else data[id] = Date.now();
    localStorage.setItem(this.KEY, JSON.stringify(data));
    return !!data[id];
  },

  getStats() {
    const all = this.getAll();
    const allLessons = this.getAllLessonIds();
    const completed = allLessons.filter(id => !!all[id]).length;
    return { completed, total: allLessons.length, pct: allLessons.length ? Math.round((completed / allLessons.length) * 100) : 0 };
  },

  getAllLessonIds() {
    const ids = [];
    [DAILY_ENGLISH, MEDICAL_ENGLISH].forEach(section => {
      section.phases.forEach(phase => {
        phase.lessons.forEach(l => ids.push(l.id));
      });
    });
    return ids;
  }
};
