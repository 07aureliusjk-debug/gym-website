// =============================================
// FORGEFIT — Main Application Logic
// =============================================

// State
const state = {
  age: null,
  bodyType: null,
  goal: null,
  level: null,
  days: null,
  currentStep: 1
};

// =============================================
// NAVIGATION
// =============================================

function startAssessment() {
  document.getElementById('hero').classList.add('hidden');
  document.getElementById('assessment').classList.remove('hidden');
  updateProgress(1);
  window.scrollTo(0, 0);
}

function nextStep(step) {
  const currentStepEl = document.getElementById(`step${state.currentStep}`);
  const nextStepEl = document.getElementById(`step${step}`);
  
  if (!currentStepEl || !nextStepEl) return;
  
  currentStepEl.classList.remove('active');
  nextStepEl.classList.add('active');
  state.currentStep = step;
  updateProgress(step);
  window.scrollTo(0, 0);
}

function updateProgress(step) {
  const total = 5;
  const pct = ((step - 1) / (total - 1)) * 100;
  document.getElementById('progressBar').style.setProperty('--progress', pct + '%');
  document.getElementById('progressLabel').textContent = `Step ${step} of ${total}`;
}

function restartAssessment() {
  // Reset state
  state.age = null;
  state.bodyType = null;
  state.goal = null;
  state.level = null;
  state.days = null;
  state.currentStep = 1;

  // Reset UI selections
  document.querySelectorAll('.age-btn, .body-btn, .goal-btn, .level-btn, .day-btn').forEach(btn => btn.classList.remove('selected'));
  document.querySelectorAll('.next-btn').forEach(btn => btn.disabled = true);

  // Back to step 1
  document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
  document.getElementById('step1').classList.add('active');
  updateProgress(1);

  // Show assessment
  document.getElementById('results').classList.add('hidden');
  document.getElementById('assessment').classList.remove('hidden');
  window.scrollTo(0, 0);
}

// =============================================
// SELECTION HANDLERS
// =============================================

function selectAge(btn, age) {
  document.querySelectorAll('.age-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  state.age = age;
  document.getElementById('nextBtn1').disabled = false;
}

function selectBody(btn, type) {
  document.querySelectorAll('.body-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  state.bodyType = type;
  document.getElementById('nextBtn2').disabled = false;
}

function selectGoal(btn, goal) {
  document.querySelectorAll('.goal-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  state.goal = goal;
  document.getElementById('nextBtn3').disabled = false;
}

function selectLevel(btn, level) {
  document.querySelectorAll('.level-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  state.level = level;
  document.getElementById('nextBtn4').disabled = false;
}

function selectDays(btn, days) {
  document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  state.days = days;
  document.getElementById('nextBtn5').disabled = false;
}

// =============================================
// PROGRAM GENERATION
// =============================================

function generateProgram() {
  document.getElementById('assessment').classList.add('hidden');
  document.getElementById('loading').classList.remove('hidden');
  window.scrollTo(0, 0);

  // Animate loading steps
  const loadingSteps = ['ls1', 'ls2', 'ls3', 'ls4', 'ls5'];
  loadingSteps.forEach((id, i) => {
    setTimeout(() => {
      const el = document.getElementById(id);
      el.classList.remove('pending');
      el.classList.add('active');
      el.textContent = el.textContent.replace('⏳', '✅');
      
      if (id !== 'ls1') {
        const prev = document.getElementById(loadingSteps[i - 1]);
        if (prev) prev.classList.remove('active');
      }
    }, i * 500);
  });

  // Show results after delay
  setTimeout(() => {
    document.getElementById('loading').classList.add('hidden');
    document.getElementById('results').classList.remove('hidden');
    buildResults();
    launchConfetti();
    window.scrollTo(0, 0);
  }, 3200);
}

// =============================================
// PROGRAM LOOKUP
// =============================================

function getProgram() {
  const goal = state.goal || 'general';
  const body = state.bodyType || 'mesomorph';
  const level = state.level || 'beginner';

  try {
    const goalData = PROGRAMS[goal];
    if (!goalData) return DEFAULT_PROGRAM;
    
    const bodyData = goalData[body] || goalData[Object.keys(goalData)[0]];
    if (!bodyData) return DEFAULT_PROGRAM;
    
    const levelData = bodyData[level] || bodyData[Object.keys(bodyData)[0]];
    if (!levelData) return DEFAULT_PROGRAM;
    
    return levelData;
  } catch (e) {
    return DEFAULT_PROGRAM;
  }
}

// =============================================
// BUILD RESULTS UI
// =============================================

function buildResults() {
  const program = getProgram();

  // Emoji and summary
  const goalEmojis = {
    lose_fat: '🔥', build_muscle: '💪', tone: '✨',
    endurance: '🏃', strength: '🏋️', general: '⚡'
  };
  const bodyNames = { ectomorph: 'Ectomorph', mesomorph: 'Mesomorph', endomorph: 'Endomorph' };
  const goalNames = {
    lose_fat: 'Lose Fat', build_muscle: 'Build Muscle', tone: 'Tone Up',
    endurance: 'Endurance', strength: 'Raw Strength', general: 'General Fitness'
  };
  const levelNames = { beginner: 'Beginner', intermediate: 'Intermediate', advanced: 'Advanced' };
  const ageNames = { teen: 'Teen (13–17)', young: 'Young Adult (18–25)', adult: 'Adult (26–39)', midlife: 'Mid-Life (40–54)', senior: 'Senior (55+)' };

  document.getElementById('resultEmoji').textContent = goalEmojis[state.goal] || '💪';
  document.getElementById('resultSummary').textContent = `${program.name} — ${program.description}`;

  // Profile cards
  const profileData = [
    { icon: '🎂', label: 'Age Group', value: ageNames[state.age] || 'Adult' },
    { icon: '💪', label: 'Body Type', value: bodyNames[state.bodyType] || 'Mesomorph' },
    { icon: '🎯', label: 'Goal', value: goalNames[state.goal] || 'General Fitness' },
    { icon: '📊', label: 'Level', value: levelNames[state.level] || 'Beginner' },
    { icon: '📅', label: 'Days/Week', value: (state.days || 3) + ' Days' }
  ];

  document.getElementById('profileCards').innerHTML = profileData.map(p => `
    <div class="profile-card">
      <span class="pc-icon">${p.icon}</span>
      <div class="pc-label">${p.label}</div>
      <div class="pc-value">${p.value}</div>
    </div>
  `).join('');

  // Schedule
  buildSchedule(program);

  // Workout tabs + content
  buildWorkout(program);

  // Movement guides
  buildMovements(program);

  // Tips
  buildTips();
}

function buildSchedule(program) {
  const dayNames = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  const split = program.split || [];
  const days = state.days || 3;

  // Build 7-day split from program data
  const grid = document.getElementById('scheduleGrid');
  grid.innerHTML = split.map((label, i) => {
    const isRest = label.toLowerCase().includes('rest');
    return `
      <div class="schedule-day ${isRest ? 'rest' : 'active'}">
        <div class="sday-name">${dayNames[i]}</div>
        <div class="sday-label">${isRest ? '😴 Rest' : label}</div>
      </div>
    `;
  }).join('');
}

function buildWorkout(program) {
  const workouts = program.workouts || {};
  const tabs = Object.keys(workouts);

  const tabsEl = document.getElementById('workoutTabs');
  const contentEl = document.getElementById('workoutContent');

  tabsEl.innerHTML = tabs.map((name, i) => `
    <button class="workout-tab ${i === 0 ? 'active' : ''}" onclick="switchTab(this, 'panel${i}')">${name}</button>
  `).join('');

  contentEl.innerHTML = tabs.map((name, i) => `
    <div class="workout-panel ${i === 0 ? 'active' : ''}" id="panel${i}">
      <div class="exercise-list">
        ${workouts[name].map((ex, j) => buildExerciseItem(ex, j)).join('')}
      </div>
    </div>
  `).join('');
}

function buildExerciseItem(ex, index) {
  return `
    <div class="exercise-item" onclick="toggleExercise(this)">
      <div class="ex-num">${index + 1}</div>
      <div class="ex-info">
        <div class="ex-name">${ex.name}</div>
        <div class="ex-meta">🎯 ${ex.muscles}</div>
      </div>
      <div class="ex-sets">
        <strong>${ex.sets}</strong>
        <span>Sets × ${ex.reps}</span>
      </div>
      <div class="ex-expand">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>
      </div>
    </div>
    <div class="ex-details">
      💡 <strong>Coaching Tip:</strong> ${ex.tip || 'Focus on controlled movement and proper form throughout.'}
    </div>
  `;
}

function switchTab(btn, panelId) {
  document.querySelectorAll('.workout-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.workout-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(panelId).classList.add('active');
}

function toggleExercise(el) {
  const details = el.nextElementSibling;
  el.classList.toggle('expanded');
  details.classList.toggle('open');
}

function buildMovements(program) {
  const movementKeys = program.movements || Object.keys(MOVEMENT_GUIDES).slice(0, 6);
  const grid = document.getElementById('movementGrid');

  grid.innerHTML = movementKeys.map(key => {
    const m = MOVEMENT_GUIDES[key];
    if (!m) return '';
    return `
      <div class="movement-card">
        <div class="mc-header">
          <span class="mc-icon">${m.icon}</span>
          <div>
            <div class="mc-title">${m.name}</div>
            <div class="mc-muscle">${m.muscle}</div>
          </div>
        </div>
        <div class="mc-body">
          <ol class="mc-steps">
            ${m.steps.map((step, i) => `
              <li>
                <span class="step-num">${i + 1}</span>
                <span>${step}</span>
              </li>
            `).join('')}
          </ol>
          <div class="mc-tips">
            <strong>Pro Tip</strong>
            ${m.tip}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function buildTips() {
  const grid = document.getElementById('tipsGrid');
  const generalTips = TIPS_DATA.general || [];
  const goalTips = TIPS_DATA[state.goal] || [];
  const ageTips = TIPS_DATA[state.age] || [];

  const allTips = [...generalTips, ...goalTips, ...ageTips].slice(0, 8);

  grid.innerHTML = allTips.map(tip => `
    <div class="tip-card">
      <span class="tip-icon">${tip.icon}</span>
      <h4>${tip.title}</h4>
      <p>${tip.text}</p>
    </div>
  `).join('');
}

// =============================================
// CONFETTI
// =============================================

function launchConfetti() {
  const container = document.getElementById('confetti');
  const colors = ['#ff4d00', '#ff7a33', '#f5c518', '#00e676', '#448aff', '#fff'];
  const shapes = ['■', '●', '▲', '★', '◆'];

  for (let i = 0; i < 60; i++) {
    const piece = document.createElement('div');
    piece.style.cssText = `
      position: absolute;
      top: -20px;
      left: ${Math.random() * 100}%;
      font-size: ${8 + Math.random() * 14}px;
      color: ${colors[Math.floor(Math.random() * colors.length)]};
      animation: confettiFall ${2 + Math.random() * 3}s ${Math.random() * 2}s ease-in forwards;
      pointer-events: none;
      z-index: 0;
    `;
    piece.textContent = shapes[Math.floor(Math.random() * shapes.length)];
    container.appendChild(piece);
  }

  setTimeout(() => { container.innerHTML = ''; }, 6000);
}
