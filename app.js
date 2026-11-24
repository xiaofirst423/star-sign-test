(() => {
  'use strict';

  const byId = (id) => document.getElementById(id);
  const viewNames = ['cover', 'zodiac', 'quiz', 'result'];
  const views = Object.fromEntries(viewNames.map((name) => [name, byId('view-' + name)]));
  const bgLayers = [byId('bg-photo-a'), byId('bg-photo-b')];
  let activeBgIndex = 0;
  let currentBgSrc = 'assets/scenes/autumn-street-original.jpg';
  let bgRequestId = 0;

  const chapterCount = byId('chapter-count');
  const quizCard = byId('quiz-card');
  const quizDots = byId('quiz-dots');
  const optionList = byId('option-list');
  const previousButton = byId('previous-btn');
  const rulesButton = byId('rules-btn');
  const rulesNote = byId('rules-note');
  const rulesControl = byId('rules-control');

  const imageCache = new Map();
  const storyPhotos = [
    ['sun', 72],
    ['cloud', 60],
    ['dawn-drizzle', 62],
    ['rain', 76],
    ['second-sip-tea', 53],
    ['wind', 49],
    ['sunbreak', 60],
    ['copper-breeze', 65],
  ];
  const resultPhotoPositions = {
    'moon-rain': 70,
    'harbor-fog': 67,
    'violet-breeze': 64,
    'warm-roof-cloud': 55,
    snow: 67,
    sunshower: 70,
    sunbreak: 65,
  };

  const state = {
    view: 'cover',
    zodiac: null,
    question: 0,
    answers: [],
  };
  let advanceTimer = null;

  function span(className, text) {
    const element = document.createElement('span');
    element.className = className;
    element.textContent = text;
    return element;
  }

  function button(className, text) {
    const element = document.createElement('button');
    element.type = 'button';
    element.className = className;
    element.textContent = text;
    return element;
  }

  function photoPath(weather) {
    return 'assets/scenes/' + weather + '.webp';
  }

  function storyPhoto(index) {
    return storyPhotos[index] ?? [CHAPTERS[QUESTIONS[index].chapter].weather, 58];
  }

  function preloadImage(path, highPriority = false) {
    const existing = imageCache.get(path);
    if (existing) return existing;

    const loader = new Promise((resolve) => {
      const img = new Image();
      if (highPriority) img.fetchPriority = 'high';
      img.decoding = 'async';

      let retried = false;
      img.onload = () => {
        if (typeof img.decode === 'function') {
          img.decode().catch(() => {}).finally(() => resolve(true));
        } else {
          resolve(true);
        }
      };
      img.onerror = () => {
        if (!retried) {
          retried = true;
          setTimeout(() => {
            img.src = path + (path.includes('?') ? '&' : '?') + 'retry=1';
          }, 250);
          return;
        }
        imageCache.delete(path);
        resolve(false);
      };
      img.src = path;
    });

    imageCache.set(path, loader);
    return loader;
  }

  function applyBgLayer(layer, path, position, mode) {
    if (layer.getAttribute('src') !== path) layer.src = path;
    layer.dataset.mode = mode;
    if (mode === 'scene' || mode === 'zodiac') {
      layer.style.setProperty('--photo-position', position + '%');
    } else {
      layer.style.removeProperty('--photo-position');
    }
  }

  function setBackground(path, position = 58, mode = 'scene') {
    const reqId = ++bgRequestId;
    const currentLayer = bgLayers[activeBgIndex];

    if (currentBgSrc === path) {
      applyBgLayer(currentLayer, path, position, mode);
      return;
    }

    preloadImage(path, true).then((loaded) => {
      if (reqId !== bgRequestId) return;
      const nextIndex = 1 - activeBgIndex;
      const nextLayer = bgLayers[nextIndex];
      applyBgLayer(nextLayer, path, position, mode);

      if (!loaded) {
        // Still set src directly so browser can render if reachable later
        nextLayer.src = path;
      }

      requestAnimationFrame(() => {
        if (reqId !== bgRequestId) return;
        nextLayer.classList.add('is-active');
        currentLayer.classList.remove('is-active');
        activeBgIndex = nextIndex;
        currentBgSrc = path;
      });
    });
  }

  function warmStoryAssets() {
    preloadImage(photoPath('zodiac-night'));
    for (const [weather] of storyPhotos) {
      preloadImage(photoPath(weather));
    }
  }

  function showParagraphs(id, paragraphs) {
    byId(id).replaceChildren(...paragraphs.map((text) => {
      const paragraph = document.createElement('p');
      paragraph.textContent = text;
      return paragraph;
    }));
  }

  function renderDots() {
    if (quizDots.children.length !== QUESTIONS.length) {
      quizDots.replaceChildren(...QUESTIONS.map(() => span('ios-dot', '')));
    }
    for (const [idx, dot] of [...quizDots.children].entries()) {
      dot.classList.toggle('is-current', idx === state.question);
      dot.classList.toggle('is-done', idx < state.question);
    }
  }

  function renderZodiacs() {
    const grid = byId('zodiac-grid');
    const choices = ZODIACS.map((zodiac, index) => {
      const choice = button('zodiac-tile', '');
      choice.style.setProperty('--i', String(index));
      const glyph = span('zodiac-glyph', zodiac.symbol + '\uFE0E');
      glyph.setAttribute('aria-hidden', 'true');
      const details = span('zodiac-details', '');
      details.append(span('zodiac-name', zodiac.name), span('zodiac-dates', zodiac.dates));
      const arrow = span('zodiac-arrow', '›');
      arrow.setAttribute('aria-hidden', 'true');
      choice.append(glyph, details, arrow);
      choice.addEventListener('click', () => {
        state.zodiac = zodiac;
        goToQuestion(state.question);
      });
      return choice;
    });
    grid.append(...choices);
  }

  function renderJourney() {
    const path = byId('journey-path');
    const journey = byId('journey');
    journey.hidden = state.view === 'cover' || state.view === 'result';
    if (journey.hidden) {
      path.replaceChildren();
      return;
    }

    const items = [];
    if (state.zodiac && state.view !== 'zodiac') {
      const zodiacStep = document.createElement('li');
      const link = button('journey-link', state.zodiac.symbol + '\uFE0E ' + state.zodiac.name);
      link.setAttribute('aria-label', '返回重选星座（当前：' + state.zodiac.name + '）');
      link.addEventListener('click', () => showView('zodiac'));
      zodiacStep.append(link);
      items.push(zodiacStep);
    }

    const currentStep = document.createElement('li');
    let currentLabel = '选择星座';
    if (state.view === 'quiz') currentLabel = (state.question + 1) + ' / ' + QUESTIONS.length;
    if (state.view === 'result') currentLabel = '窗边短笺';
    const current = span('journey-current', currentLabel);
    current.setAttribute('aria-current', 'step');
    currentStep.append(current);
    items.push(currentStep);

    path.replaceChildren(...items);
  }

  function showView(name) {
    clearTimeout(advanceTimer);
    advanceTimer = null;
    setRulesOpen(false);
    state.view = name;
    for (const [key, section] of Object.entries(views)) section.hidden = key !== name;
    document.body.dataset.view = name;

    if (name === 'cover') {
      setBackground('assets/scenes/autumn-street-original.jpg', 50, 'cover');
    }

    if (name === 'zodiac') {
      setBackground(photoPath('zodiac-night'), 50, 'zodiac');
      for (const [index, choice] of [...byId('zodiac-grid').children].entries()) {
        if (state.zodiac === ZODIACS[index]) choice.setAttribute('aria-current', 'true');
        else choice.removeAttribute('aria-current');
      }
    }

    if (name === 'quiz') renderQuestion();
    if (name === 'result') renderResult();
    renderJourney();
    views[name].querySelector('h1, h2')?.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  function goToQuestion(index) {
    state.question = index;
    showView('quiz');
  }

  function renderQuestionProgress() {
    const current = state.question + 1;
    chapterCount.textContent = '第 ' + current + ' 幕，共 ' + QUESTIONS.length + ' 幕';
    previousButton.hidden = state.question === 0;
    renderDots();
  }

  function setPressed(group, selected) {
    for (const [idx, choice] of [...group.children].entries()) {
      const isSelected = choice === selected;
      choice.setAttribute('aria-pressed', String(isSelected));
      const badge = choice.querySelector('.option-letter');
      if (badge) badge.textContent = isSelected ? '✓' : 'ABCD'[idx];
    }
  }

  function renderQuestion() {
    const index = state.question;
    const question = QUESTIONS[index];

    byId('chapter-name').textContent = '第' + '一二三四五六七八'[index] + '幕 · ' + question.scene;
    byId('story-prompt').textContent = question.prompt;
    byId('question-title').textContent = question.question;

    const [weather, position] = storyPhoto(index);
    setBackground(photoPath(weather), position, 'scene');
    renderQuestionProgress();

    quizCard.classList.remove('is-entering');
    void quizCard.offsetWidth;
    quizCard.classList.add('is-entering');

    optionList.replaceChildren(...question.options.map((option, optionIndex) => {
      const isSelected = state.answers[index] === optionIndex;
      const choice = button('option-choice', '');
      choice.style.setProperty('--i', String(optionIndex));
      const badge = span('option-letter', isSelected ? '✓' : 'ABCD'[optionIndex]);
      badge.setAttribute('aria-hidden', 'true');
      choice.append(badge, span('option-text', option.text));
      choice.setAttribute('aria-pressed', String(isSelected));

      choice.addEventListener('click', (event) => {
        if (advanceTimer !== null || event.detail > 1) return;
        state.answers[index] = optionIndex;
        setPressed(optionList, choice);
        advanceTimer = setTimeout(() => {
          advanceTimer = null;
          if (index === QUESTIONS.length - 1) showView('result');
          else goToQuestion(index + 1);
        }, 260);
      });
      return choice;
    }));

    if (index + 1 < QUESTIONS.length) {
      preloadImage(photoPath(storyPhoto(index + 1)[0]), true);
    }

    if (index === QUESTIONS.length - 1 && state.zodiac) {
      for (const optionIndex of question.options.keys()) {
        const answers = [...state.answers];
        answers[index] = optionIndex;
        const result = getOutcome(state.zodiac, '', answers);
        preloadImage(photoPath(result.weather), true);
      }
    }
  }

  function renderResult() {
    const { zodiac, answers } = state;
    const result = getOutcome(zodiac, '', answers);
    const weatherTitle = result.weatherName.startsWith('窗外')
      ? result.weatherName
      : '窗外 · ' + result.weatherName;

    byId('result-weather-tag').textContent = result.weatherTag || '南门外 · 窗边随想';
    byId('result-weather').textContent = weatherTitle;
    byId('result-temp').textContent = result.temperature + '°C';
    byId('result-scene-note').textContent = result.scene;
    showParagraphs('result-verdict', result.verdictParagraphs || [result.verdict]);

    views.result.dataset.weather = result.weather;
    setBackground(photoPath(result.weather), resultPhotoPositions[result.weather] ?? 60, 'scene');

    const sheet = byId('result-sheet');
    sheet.classList.remove('is-entering');
    void sheet.offsetWidth;
    sheet.classList.add('is-entering');
  }

  function restart() {
    Object.assign(state, {
      zodiac: null,
      question: 0,
      answers: [],
    });
    showView('cover');
  }

  byId('brand-btn').addEventListener('click', () => {
    if (state.view !== 'cover') showView('cover');
  });

  byId('start-btn').addEventListener('click', () => {
    warmStoryAssets();
    showView('zodiac');
  });

  previousButton.addEventListener('click', () => {
    if (state.question > 0) goToQuestion(state.question - 1);
  });

  byId('result-back-btn').addEventListener('click', () => goToQuestion(QUESTIONS.length - 1));
  byId('restart-btn').addEventListener('click', restart);

  function setRulesOpen(open) {
    rulesNote.hidden = !open;
    rulesButton.setAttribute('aria-expanded', String(open));
  }

  rulesButton.addEventListener('click', () => setRulesOpen(rulesNote.hidden));
  document.addEventListener('click', (event) => {
    if (!rulesNote.hidden && !rulesControl.contains(event.target)) setRulesOpen(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape' || rulesNote.hidden) return;
    setRulesOpen(false);
    rulesButton.focus({ preventScroll: true });
  });

  renderZodiacs();
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(warmStoryAssets);
  } else {
    setTimeout(warmStoryAssets, 300);
  }
})();
