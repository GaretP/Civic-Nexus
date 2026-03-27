const questions = [
  // Section 1: Property & Production
  { text: "The government should own and operate, even partially, key industries.", axis: "economic", direction: -1 },
  { text: "The people who do the work should have more economic claim to a company's output than the people who own it.", axis: "economic", direction: -1 },
  { text: "Workers should be able to own a share of the company they work for.", axis: "economic", direction: -1 },
  { text: "Nationalizing major corporations is sometimes necessary to protect public interests.", axis: "economic", direction: -1 },
  { text: "Markets free from government intervention produce better outcomes for society than centrally planned economies.", axis: "economic", direction: 1 },
  { text: "Excessive corporate profit is often a sign of exploitation.", axis: "economic", direction: 1 },
  { text: "It's wrong to allow private ownership of most the land and natural resources.", axis: "economic", direction: -1 },
  { text: "Competition between private companies drives more economic progress compared to large corporations.", axis: "economic", direction: 1 },
  { text: "Collective ownership of a business, such as through shareholders, is a fairer way to manage economic output than sole private ownership.", axis: "economic", direction: -1 },
  { text: "Individuals should be free to accumulate as much property or capital as they can, without restriction favoring collective or corporate ownership.", axis: "economic", direction: 1 },

  // Section 2: Wealth & Redistribution
  { text: "A fair society must include some form of forced wealth redistribution.", axis: "economic", direction: -1 },
  { text: "People who earn more should pay proportionally higher taxes.", axis: "economic", direction: -1 },
  { text: "Universal basic income would do more harm than good.", axis: "economic", direction: 1 },
  { text: "Accumulating extreme personal wealth is incompatible with a just society.", axis: "economic", direction: -1 },
  { text: "Wealthy individuals contribute more to society through investment and job creation than they cost it.", axis: "economic", direction: 1 },
  { text: "Social welfare programs often discourage personal responsibility.", axis: "economic", direction: 1 },
  { text: "Economic inequality is an unavoidable outcome of a fair society.", axis: "economic", direction: 1 },
  { text: "Public services like education and healthcare should be free, or subsidized, for everyone.", axis: "economic", direction: -1 },
  { text: "Heavily taxing inherited wealth is a necessary step toward fairness.", axis: "economic", direction: -1 },
  { text: "Society functions best when individuals retain most of their earnings, choosing donations over taxation.", axis: "economic", direction: 1 },

  // Section 3: Law & Order
  { text: "Maintaining law and order should be the government's top priority.", axis: "authority", direction: 1 },
  { text: "Protesting should never require government approval.", axis: "authority", direction: -1 },
  { text: "Harsh punishments should be used to deter crime.", axis: "authority", direction: 1 },
  { text: "True change most often comes from challenging power directly.", axis: "authority", direction: -1 },
  { text: "Civil liberties should be limited during times of crisis.", axis: "authority", direction: 1 },
  { text: "A society without strong authority will inevitably collapse.", axis: "authority", direction: 1 },
  { text: "People who break the law deserve to be punished, regardless of their reasons.", axis: "authority", direction: 1 },
  { text: "Police and military should be trusted to act in the public's interest without civilian oversight.", axis: "authority", direction: 1 },
  { text: "Civil disobedience is more patriotic than obedience.", axis: "authority", direction: -1 },
  { text: "No single entity, government or otherwise, should hold unchecked authority over others.", axis: "authority", direction: -1 },

  // Section 4: Power & Rebellion
  { text: "Disobeying unjust laws is not only acceptable — it's necessary.", axis: "authority", direction: -1 },
  { text: "The state has the right to use force to protect its stability.", axis: "authority", direction: 1 },
  { text: "Violent resistance is sometimes justified against oppressive regimes.", axis: "authority", direction: -1 },
  { text: "Surveillance is a necessary tool for national security.", axis: "authority", direction: 1 },
  { text: "Decentralized communities are better at governing themselves than large states.", axis: "authority", direction: -1 },
  { text: "Citizens, not governments, should be the final check on those in power.", axis: "authority", direction: -1 },
  { text: "Revolutionary movements are essential to correcting historic injustices.", axis: "authority", direction: -1 },
  { text: "Most institutions are designed to protect those already in power.", axis: "authority", direction: -1 },
  { text: "Dissent is acceptable only when expressed within legal boundaries.", axis: "authority", direction: 1 },
  { text: "Without strong authority structures, society defaults to chaos and self-interest.", axis: "authority", direction: 1 },

  // Section 5: Faith & Morality
  { text: "Some moral truths are universal, regardless of culture or era.", axis: "adherence", direction: 1 },
  { text: "Society needs an objective moral framework to function.", axis: "adherence", direction: 1 },
  { text: "Morality is subjective and varies too much to be enforced by law.", axis: "adherence", direction: -1 },
  { text: "People should be free to live according to their conscience, even if it clashes with social norms.", axis: "adherence", direction: -1 },
  { text: "It's dangerous to separate moral values from public policy.", axis: "adherence", direction: 1 },
  { text: "A society that loses its moral foundation is bound to decay.", axis: "adherence", direction: 1 },
  { text: "Ethics should be grounded in utility, not tradition.", axis: "adherence", direction: -1 },
  { text: "Children need to be taught objective moral values to become good citizens.", axis: "adherence", direction: 1 },
  { text: "Institutions that preserve cultural and moral heritage play a vital role in society.", axis: "adherence", direction: 1 },
  { text: "Progress means questioning the values we've inherited, even if it makes people uncomfortable.", axis: "adherence", direction: -1 },

  // Section 6: Tradition & Progress
  { text: "Traditions should be preserved.", axis: "adherence", direction: 1 },
  { text: "Rapid cultural change often causes more harm than good.", axis: "adherence", direction: 1 },
  { text: "Society should move past outdated beliefs, no matter how sacred they once were.", axis: "adherence", direction: -1 },
  { text: "Inherited cultural knowledge is more reliable than newly formed social ideas.", axis: "adherence", direction: 1 },
  { text: "Modern values have improved society more than traditional ones did.", axis: "adherence", direction: -1 },
  { text: "Religion should adapt to fit modern norms, not the other way around.", axis: "adherence", direction: -1 },
  { text: "Cultural heritage should never limit personal freedom.", axis: "adherence", direction: -1 },
  { text: "The decline of traditional institutions is a sign of progress.", axis: "adherence", direction: -1 },
  { text: "Moral relativism has undermined the strength of our communities.", axis: "adherence", direction: 1 },
  { text: "Traditional thinking leads to stagnation.", axis: "adherence", direction: -1 }
];

const sectionTitles = [
  "Property & Production",
  "Wealth & Redistribution",
  "Law & Order",
  "Power & Rebellion",
  "Faith & Morality",
  "Tradition & Progress"
];

// ── Book Recommendations ──────────────────────────────────────────────────────
// Affiliate tag: civicnexus-20
// Two books per axis — shown based on which side the user scores toward.
// Two books per axis — shown based on which side the user scores toward.

const BOOK_DATA = {
  economic: {
    positive: {
      title:  'Capitalism and Freedom',
      author: 'Milton Friedman',
      blurb:  'The classic case for economic liberty and limited government intervention.',
      url:    'https://amzn.to/4uRtzq3',
    },
    negative: {
      title:  'Market Socialism: The Debate Among Socialists',
      author: 'A. J. Rees',
      blurb:  'A rigorous exploration of socialist market models and collective ownership.',
      url:    'https://amzn.to/4v5lP46',
    },
  },
  authority: {
    positive: {
      title:  'On Tyranny: Twenty Lessons from the Twentieth Century',
      author: 'Timothy Snyder',
      blurb:  "A sharp warning about authoritarian drift drawn from history's hardest lessons.",
      url:    'https://amzn.to/3NpsLIp',
    },
    negative: {
      title:  'The Political Philosophy of Poststructuralist Anarchism',
      author: 'Todd May',
      blurb:  'A philosophical case for decentralised power and the rejection of hierarchy.',
      url:    'https://amzn.to/3NmljOc',
    },
  },
  adherence: {
    positive: {
      title:  'Bowling Alone: The Collapse and Revival of American Community',
      author: 'Robert D. Putnam',
      blurb:  'On the erosion of civic life and the enduring importance of shared commitment.',
      url:    'https://amzn.to/3NZAE7q',
    },
    negative: {
      title:  'The Lonely Crowd: A Study of the Changing American Character',
      author: 'David Riesman',
      blurb:  'A landmark study of how social conformity and inner-direction shape identity.',
      url:    'https://amzn.to/4t7y5PJ',
    },
  },
};

function buildBookRecommendations(x, y, z) {
  const picks = [
    x >= 0 ? BOOK_DATA.economic.positive   : BOOK_DATA.economic.negative,
    y >= 0 ? BOOK_DATA.authority.positive  : BOOK_DATA.authority.negative,
    z >= 0 ? BOOK_DATA.adherence.positive  : BOOK_DATA.adherence.negative,
  ];

  const axisLabels = ['Economic', 'Authority', 'Adherence'];

  const cards = picks.map((book, i) => `
    <a href="${book.url}" target="_blank" rel="noopener sponsored"
       style="display:flex;align-items:flex-start;gap:12px;padding:14px 16px;
              background:var(--glass-bg);backdrop-filter:blur(12px);
              border:1px solid var(--glass-border);border-radius:14px;
              text-decoration:none;color:inherit;
              box-shadow:0 2px 10px var(--glass-shadow);
              transition:border-color 0.2s,transform 0.2s;">
      <div style="flex-shrink:0;width:36px;height:36px;border-radius:10px;
                  background:linear-gradient(135deg,var(--violet-mid),var(--violet-core));
                  display:flex;align-items:center;justify-content:center;">
        <svg viewBox="0 0 16 16" fill="none" stroke="white" stroke-width="1.4"
             stroke-linecap="round" stroke-linejoin="round" width="16" height="16">
          <path d="M3 2h8a1 1 0 011 1v11l-4.5-2L3 14V3a1 1 0 011-1z"/>
        </svg>
      </div>
      <div style="flex:1;min-width:0;">
        <div style="font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;
                    color:var(--violet-core);margin-bottom:2px;">${axisLabels[i]}</div>
        <div style="font-weight:700;font-size:13px;color:var(--text-dark);
                    white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${book.title}</div>
        <div style="font-size:12px;color:var(--text-muted);margin-top:1px;">${book.author}</div>
        <div style="font-size:12px;color:var(--text-muted);margin-top:4px;line-height:1.4;">${book.blurb}</div>
      </div>
      <svg viewBox="0 0 12 12" fill="none" stroke="var(--violet-core)" stroke-width="1.5"
           stroke-linecap="round" stroke-linejoin="round" width="12" height="12" style="flex-shrink:0;margin-top:4px;">
        <path d="M1 6h10M7 2l4 4-4 4"/>
      </svg>
    </a>
  `).join('');

  return `
    <div style="margin-top:32px;padding-top:24px;border-top:1px solid var(--glass-border);">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:14px;">
        <span style="font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;
                     color:var(--text-muted);">Further Reading</span>
        <span style="font-size:11px;color:var(--text-muted);opacity:0.6;">· affiliate links</span>
      </div>
      <div style="display:flex;flex-direction:column;gap:10px;">
        ${cards}
      </div>
    </div>
  `;
}


const answerScores = {
  "agree": 1,
  "somewhat_agree": 0.5,
  "somewhat_disagree": -0.5,
  "disagree": -1
};

let sectionIndex = 0;
let responses = [];

// ── Active question set (full or short) ──────────────────────────────────────
// activeQuestions is what the test actually uses — either all 60 or 30 sampled.
// Scoring always normalises by axis count so results are comparable either way.
let activeQuestions = questions;
let activeSectionTitles = sectionTitles;
let isShortMode = false;

// ── Seeded shuffle — consistent per session so refresh doesn't reshuffle ─────
function seededShuffle(arr, seed) {
  const a = [...arr];
  let s = seed;
  for (let i = a.length - 1; i > 0; i--) {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    const j = Math.abs(s) % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildShortTest(seed) {
  const short = [];
  for (let s = 0; s < 6; s++) {
    const section = questions.slice(s * 10, s * 10 + 10);
    const sampled = seededShuffle(section, seed + s).slice(0, 5);
    short.push(...sampled);
  }
  return short; // 30 questions, 5 per section, section structure preserved
}

// ── Version picker ────────────────────────────────────────────────────────────
function showVersionPicker() {
  const container = document.getElementById("quiz");
  container.innerHTML = `
    <div class="question-box" style="text-align:center; padding: 32px 24px;">
      <h2 style="margin-bottom:8px;">Choose Your Test Version</h2>
      <p style="margin-bottom:28px; color:var(--text-muted, #6B6494); font-size:15px;">
        Select how many questions you'd like to answer.
      </p>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; max-width:480px; margin:0 auto 20px;">

        <div id="versionFull" onclick="selectVersion('full')"
          style="cursor:pointer; padding:24px 16px; border-radius:16px;
                 border:2px solid rgba(139,92,246,0.2);
                 background:rgba(255,255,255,0.5);
                 backdrop-filter:blur(10px);
                 transition:all 0.2s ease;">
          <div style="font-family:'Playfair Display',serif; font-size:1.5rem; font-weight:700;
                      background:linear-gradient(135deg,#7C3AED,#A78BFA);
                      -webkit-background-clip:text; -webkit-text-fill-color:transparent;
                      background-clip:text; margin-bottom:6px;">60</div>
          <div style="font-weight:600; font-size:14px; margin-bottom:4px;">Full Test</div>
          <div style="font-size:12px; color:var(--text-muted, #6B6494);">~10–15 minutes<br>Most accurate</div>
        </div>

        <div id="versionShort" onclick="selectVersion('short')"
          style="cursor:pointer; padding:24px 16px; border-radius:16px;
                 border:2px solid rgba(139,92,246,0.2);
                 background:rgba(255,255,255,0.5);
                 backdrop-filter:blur(10px);
                 transition:all 0.2s ease;">
          <div style="font-family:'Playfair Display',serif; font-size:1.5rem; font-weight:700;
                      background:linear-gradient(135deg,#7C3AED,#A78BFA);
                      -webkit-background-clip:text; -webkit-text-fill-color:transparent;
                      background-clip:text; margin-bottom:6px;">30</div>
          <div style="font-weight:600; font-size:14px; margin-bottom:4px;">Short Test</div>
          <div style="font-size:12px; color:var(--text-muted, #6B6494);">~5 minutes<br>Less accurate</div>
        </div>

      </div>

      <div id="shortDisclaimer" style="display:none; margin:0 auto 20px; max-width:420px;
           padding:12px 16px; border-radius:12px;
           background:rgba(139,92,246,0.08);
           border:1px solid rgba(139,92,246,0.2);
           font-size:13px; color:var(--text-muted, #6B6494); line-height:1.5;">
        ⚠ The short test randomly samples 5 questions from each section. Results are less precise
        than the full test and may not fully capture nuanced ideological positions.
        For research submissions, the full test is recommended.
      </div>

      <button id="beginBtn" onclick="beginTest()" disabled
        style="opacity:0.4; cursor:not-allowed; max-width:200px; margin:0 auto;">
        Begin Test
      </button>
    </div>
  `;
}

let selectedVersion = null;

function selectVersion(version) {
  selectedVersion = version;

  // Update card styles
  const fullCard  = document.getElementById('versionFull');
  const shortCard = document.getElementById('versionShort');
  const disclaimer = document.getElementById('shortDisclaimer');
  const beginBtn   = document.getElementById('beginBtn');

  const activeStyle   = 'border-color: #8B5CF6; background: rgba(139,92,246,0.12); box-shadow: 0 4px 16px rgba(139,92,246,0.2);';
  const inactiveStyle = 'border-color: rgba(139,92,246,0.2); background: rgba(255,255,255,0.5); box-shadow: none;';

  if (version === 'full') {
    fullCard.style.cssText  += activeStyle;
    shortCard.style.cssText += inactiveStyle;
    disclaimer.style.display = 'none';
  } else {
    shortCard.style.cssText += activeStyle;
    fullCard.style.cssText  += inactiveStyle;
    disclaimer.style.display = 'block';
  }

  beginBtn.disabled = false;
  beginBtn.style.opacity = '1';
  beginBtn.style.cursor  = 'pointer';
}

function beginTest() {
  if (!selectedVersion) return;

  isShortMode = selectedVersion === 'short';

  if (isShortMode) {
    // Generate a seed from session — consistent if page refreshes
    let seed = parseInt(localStorage.getItem('civiccube-short-seed'));
    if (!seed) {
      seed = Math.floor(Math.random() * 1000000);
      localStorage.setItem('civiccube-short-seed', seed);
    }
    activeQuestions = buildShortTest(seed);
    // Short test sections are still 6 but 5 questions each
    activeSectionTitles = sectionTitles;
  } else {
    activeQuestions = questions;
    activeSectionTitles = sectionTitles;
  }

  localStorage.setItem('civiccube-mode', selectedVersion);
  sectionIndex = 0;
  responses = [];
  showSection();
}

document.addEventListener("DOMContentLoaded", () => {
  const savedResponses = localStorage.getItem("civiccube-responses");
  const savedIndex     = localStorage.getItem("civiccube-sectionIndex");
  const savedMode      = localStorage.getItem("civiccube-mode");

  // Restore mode if mid-test
  if (savedMode) {
    isShortMode = savedMode === 'short';
    if (isShortMode) {
      const seed = parseInt(localStorage.getItem('civiccube-short-seed')) || 0;
      activeQuestions = buildShortTest(seed);
    }
  }

  if (savedResponses) {
    responses = JSON.parse(savedResponses);
  }

  if (savedIndex !== null) {
    sectionIndex = parseInt(savedIndex);
    const sectionSize = isShortMode ? 5 : 10;
    if (sectionIndex * sectionSize >= activeQuestions.length) {
      calculateResults();
      return;
    }
    // Mid-test resume — skip picker
    if (savedMode) {
      showSection();
      return;
    }
  }

  // Fresh start — show version picker
  showVersionPicker();
});

function retakeTest() {
  responses = [];
  sectionIndex = 0;
  isShortMode = false;
  activeQuestions = questions;
  selectedVersion = null;

  localStorage.removeItem("civiccube-responses");
  localStorage.removeItem("civiccube-sectionIndex");
  localStorage.removeItem("civiccube-mode");
  localStorage.removeItem("civiccube-short-seed");

  showVersionPicker();
  document.getElementById("quiz").scrollIntoView({ behavior: 'smooth' });
}

function showSection() {
  const container  = document.getElementById("quiz");
  const sectionSize = isShortMode ? 5 : 10;
  const start = sectionIndex * sectionSize;
  const end   = start + sectionSize;
  const sectionQuestions = activeQuestions.slice(start, end);

  const sectionTitle = activeSectionTitles[sectionIndex];
  const totalSections = Math.ceil(activeQuestions.length / sectionSize);

  let html = `
    <span style="font-size:11px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;color:var(--violet-core);display:block;margin-bottom:6px;">
      Section ${sectionIndex + 1} of ${totalSections}
    </span>
    <h2 style="font-family:'Playfair Display',serif;font-size:1.3rem;font-weight:700;color:var(--text-dark);margin-bottom:20px;">${sectionTitle}</h2>
  `;

  sectionQuestions.forEach((q, i) => {
    const index = start + i;
    html += `
      <div class="question-box">
        <div class="question-num">Question ${index + 1}</div>
        <div class="question-text">${q.text}</div>
        <div class="answer-set">
          ${createAnswerOption(index, 'agree', 'Agree', responses[index])}
          ${createAnswerOption(index, 'somewhat_agree', 'Somewhat Agree', responses[index])}
          ${createAnswerOption(index, 'somewhat_disagree', 'Somewhat Disagree', responses[index])}
          ${createAnswerOption(index, 'disagree', 'Disagree', responses[index])}
        </div>
      </div>
    `;
  });

  html += `
    <div style="display:flex;justify-content:space-between;gap:10px;margin-top:8px;">
      ${sectionIndex > 0
        ? '<button class="btn-back" onclick="prevSection()">← Back</button>'
        : '<div></div>'
      }
      <button onclick="nextSection()">Next Section →</button>
    </div>
  `;

  container.innerHTML = html;

  const answeredCount = responses.filter(r => r !== undefined && r !== null).length;
  const progress = (Math.min(answeredCount, activeQuestions.length) / activeQuestions.length) * 100;
  document.getElementById("progress-bar").style.width = `${progress}%`;
  const progressText = document.getElementById("progress-text");
  if (progressText) progressText.textContent = `${Math.round(progress)}%`;
}

function createAnswerOption(index, choice, label, currentResponse) {
  const selectedClass = currentResponse === choice ? 'selected' : '';
  return `
    <div class="answer-option ${selectedClass}"
         onclick="submitAnswer(${index}, '${choice}', this)">
      <span class="answer-text">${label}</span>
    </div>
  `;
}

function calculateResults() {
  document.getElementById("progress-bar").style.width = "100%";
  const progressText = document.getElementById("progress-text");
  if (progressText) progressText.textContent = "100%";

  let x = 0, y = 0, z = 0;

  for (let i = 0; i < activeQuestions.length; i++) {
    const q     = activeQuestions[i];
    const score = answerScores[responses[i]] * q.direction;
    if (q.axis === "economic")   x += score;
    else if (q.axis === "authority") y += score;
    else if (q.axis === "adherence") z += score;
  }

  x = x / activeQuestions.filter(q => q.axis === "economic").length;
  y = y / activeQuestions.filter(q => q.axis === "authority").length;
  z = z / activeQuestions.filter(q => q.axis === "adherence").length;

  const resultBox = document.getElementById("quiz");
  resultBox.innerHTML = '<div style="text-align:center;padding:40px;"><div class="spinner"></div><p>Loading results...</p></div>';
  const label = getIdeologyLabel(x, y, z);
  const examples = {
    'Realist Socialism': 'A form of socialism that embraces group ownership and collective welfare but recognizes the need for authority, central planning, and often coercive power to achieve and maintain its vision.',
    'Progressivism': 'A political orientation that emphasizes reform, social advancement, and the active correction of perceived injustices. It sees society as improvable through the pursuit of a more equitable future.',
    'Utopian Socialism': 'A visionary form of socialism that imagines a perfect, harmonious society built on cooperation, equality, and shared ownership—often without the use of force, class struggle, or state control.',
    'Corporatism': 'A form of socialist organization in which society is divided into functional groups—such as industries, labor unions, religious institutions, and professions—that are granted formal authority to govern themselves within their sphere.',
    'Conservatism': 'A political philosophy focused on preserving long-standing institutions, cultural norms, and moral traditions. It emphasizes order, continuity, and inherited wisdom over social experimentation or forced progress.',
    'Anarchism': 'A political philosophy that rejects all centralized authority, coercive hierarchy, and imposed systems of control. It emphasizes individual autonomy, voluntary association, and decentralized organization.',
    'Libertarianism': 'A political philosophy that champions individual liberty, personal responsibility, and the absolute right to private ownership. It opposes state intervention in both economic and personal life, favoring voluntary contracts, self-regulation, and minimal to zero government.',
    'Liberalism': 'A political philosophy that prioritizes individual rights, equality under law, and regulated markets—while supporting an active role for the state in enforcing civil protections and shaping social outcomes. It values pluralism and reform, often resisting rigid moral or cultural traditions.'
  };

const html = `
  <span style="font-size:11px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;color:var(--violet-core);display:block;margin-bottom:8px;">Your Results</span>
  <h2 style="font-family:'Playfair Display',serif;font-size:1.6rem;font-weight:900;color:var(--text-dark);margin-bottom:4px;">${label}</h2>
  ${isShortMode ? `<p style="font-size:13px;color:var(--violet-core);margin-bottom:16px;display:inline-flex;align-items:center;gap:6px;background:rgba(139,92,246,0.08);padding:5px 12px;border-radius:8px;border:1px solid var(--glass-border);">⚠ Short test — results are approximate.</p>` : ''}

  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:20px 0;">
    <div style="background:var(--glass-bg);backdrop-filter:blur(12px);border:1px solid var(--glass-border);border-radius:14px;padding:16px;text-align:center;box-shadow:0 2px 12px var(--glass-shadow);">
      <div style="font-family:'Playfair Display',serif;font-size:1.4rem;font-weight:700;color:var(--violet-core);">${x >= 0 ? '+' : ''}${x.toFixed(2)}</div>
      <div style="font-size:11px;font-weight:600;color:var(--text-muted);margin-top:3px;letter-spacing:1px;text-transform:uppercase;">Economic</div>
    </div>
    <div style="background:var(--glass-bg);backdrop-filter:blur(12px);border:1px solid var(--glass-border);border-radius:14px;padding:16px;text-align:center;box-shadow:0 2px 12px var(--glass-shadow);">
      <div style="font-family:'Playfair Display',serif;font-size:1.4rem;font-weight:700;color:var(--violet-core);">${y >= 0 ? '+' : ''}${y.toFixed(2)}</div>
      <div style="font-size:11px;font-weight:600;color:var(--text-muted);margin-top:3px;letter-spacing:1px;text-transform:uppercase;">Authority</div>
    </div>
    <div style="background:var(--glass-bg);backdrop-filter:blur(12px);border:1px solid var(--glass-border);border-radius:14px;padding:16px;text-align:center;box-shadow:0 2px 12px var(--glass-shadow);">
      <div style="font-family:'Playfair Display',serif;font-size:1.4rem;font-weight:700;color:var(--violet-core);">${z >= 0 ? '+' : ''}${z.toFixed(2)}</div>
      <div style="font-size:11px;font-weight:600;color:var(--text-muted);margin-top:3px;letter-spacing:1px;text-transform:uppercase;">Adherence</div>
    </div>
  </div>

  <div class="result-description">
    <span style="font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--violet-core);display:block;margin-bottom:8px;">What this means</span>
    ${examples[label] || 'No historical context available for this quadrant.'}
  </div>

  <div style="display:flex;gap:12px;margin-top:24px;flex-wrap:wrap;">
    <button onclick="retakeTest()" class="btn-back" style="width:auto;margin:0;">
      ↺ Retake Test
    </button>
    <button onclick="openShareForm()" style="width:auto;margin:0;">
      Share Your Results →
    </button>
  </div>

  ${buildBookRecommendations(x, y, z)}
`;
  
  resultBox.classList.add("fade-out");
  setTimeout(() => {
    resultBox.innerHTML = html;
    resultBox.classList.remove("fade-out");
    resultBox.classList.add("fade-in");
    setTimeout(() => resultBox.classList.remove("fade-in"), 300);
    
  // Plot 3D point
  plot3D(x, y, z);
}, 1500);

  openSharePrompt(x, y, z, label);
}

function getIdeologyLabel(x, y, z) {
  // Z-axis: Principled (z > 0) vs Relativistic (z <= 0)
  // Maps to the Adherence axis — Principled = strong moral framework, Relativistic = context-dependent ethics
  const quadrant = `${x < 0 ? 'Left' : 'Right'},${y > 0 ? 'Authoritarian' : 'Anarchist'},${z > 0 ? 'Principled' : 'Relativistic'}`;
  const map = {
    'Left,Authoritarian,Principled':    'Realist Socialism',
    'Left,Authoritarian,Relativistic':  'Progressivism',
    'Left,Anarchist,Principled':        'Utopian Socialism',
    'Left,Anarchist,Relativistic':      'Corporatism',
    'Right,Authoritarian,Principled':   'Conservatism',
    'Right,Authoritarian,Relativistic': 'Liberalism',
    'Right,Anarchist,Principled':       'Libertarianism',
    'Right,Anarchist,Relativistic':     'Anarchism'
  };
  return map[quadrant] || 'Unclassified Position';
}

function submitAnswer(index, choice, button) {
  responses[index] = choice;

  const buttons = button.parentElement.querySelectorAll('.answer-option');
  buttons.forEach(btn => btn.classList.remove('selected'));

  button.classList.add('selected');

  // Save to localStorage
  localStorage.setItem("civiccube-responses", JSON.stringify(responses));
}

function nextSection() {
  const sectionSize = isShortMode ? 5 : 10;
  const start = sectionIndex * sectionSize;
  const end   = start + sectionSize;
  const unanswered = activeQuestions.slice(start, end).some((_, i) => !responses[start + i]);

  if (unanswered) {
    alert("Please answer all questions in this section before continuing.");
    return;
  }

  sectionIndex++;
  localStorage.setItem("civiccube-sectionIndex", sectionIndex);
  if (sectionIndex * sectionSize < activeQuestions.length) {
    showSection();
    document.getElementById("quiz").scrollIntoView({ behavior: 'smooth' });
  } else {
    calculateResults();
  }
}

function prevSection() {
  if (sectionIndex > 0) {
    sectionIndex--;
    localStorage.setItem("civiccube-sectionIndex", sectionIndex);
    showSection();
    document.getElementById("quiz").scrollIntoView({ behavior: 'smooth' });
  }
}

function plot3D(x, y, z) {
  // Make graph section visible first
  const graphSection = document.getElementById("graph-section");
  graphSection.style.display = "block";

  // Clear any existing chart
  const graph = document.getElementById("graph");
  graph.innerHTML = "";
  
  const ideology = getIdeologyLabel(x, y, z);
  
  const colorMap = {
    'Realist Socialism': '#9c27b0',
    'Progressivism': '#e91e63',
    'Utopian Socialism': '#f44336',
    'Corporatism': '#ff9800',
    'Conservatism': '#3f51b5',
    'Anarchism': '#00bcd4',
    'Libertarianism': '#4caf50',
    'Liberalism': '#03a9f4'
  };

  const pointColor = colorMap[ideology] || '#999999';

  const ideologyPoint = {
    type: 'scatter3d',
    mode: 'markers+text',
    x: [x],
    y: [y],
    z: [z],
    text: [ideology],
    textposition: 'top center',
    textfont: { size: 11, color: pointColor },
    marker: {
      size: 12,
      color: pointColor,
      symbol: 'circle',
      line: { color: '#ffffff', width: 2 }
    },
    name: ideology
  };

  const regionDefinitions = [
  {
    name: 'Realist Socialism', color: '#9c27b0',
    vertices: [
      [-1, -1, -1], [0, -1, -1], [0, 0, -1], [-1, 0, -1],
      [-1, -1, 0], [0, -1, 0], [0, 0, 0], [-1, 0, 0]
    ]
  },
  {
    name: 'Conservatism', color: '#3f51b5',
    vertices: [
      [0, -1, -1], [1, -1, -1], [1, 0, -1], [0, 0, -1],
      [0, -1, 0], [1, -1, 0], [1, 0, 0], [0, 0, 0]
    ]
  },
  {
    name: 'Liberalism', color: '#00bcd4',
    vertices: [
      [0, -1, 0], [1, -1, 0], [1, 0, 0], [0, 0, 0],
      [0, -1, 1], [1, -1, 1], [1, 0, 1], [0, 0, 1]
    ]
  },
  {
    name: 'Progressivism', color: '#e91e63',
    vertices: [
      [-1, -1, 0], [0, -1, 0], [0, 0, 0], [-1, 0, 0],
      [-1, -1, 1], [0, -1, 1], [0, 0, 1], [-1, 0, 1]
    ]
  },
  {
    name: 'Utopian Socialism', color: '#f44336',
    vertices: [
      [-1, 0, -1], [0, 0, -1], [0, 1, -1], [-1, 1, -1],
      [-1, 0, 0], [0, 0, 0], [0, 1, 0], [-1, 1, 0]
    ]
  },
  {
    name: 'Libertarianism', color: '#4caf50',
    vertices: [
      [0, 0, -1], [1, 0, -1], [1, 1, -1], [0, 1, -1],
      [0, 0, 0], [1, 0, 0], [1, 1, 0], [0, 1, 0]
    ]
  },
  {
    name: 'Anarchism', color: '#03a9f4',
    vertices: [
      [0, 0, 0], [1, 0, 0], [1, 1, 0], [0, 1, 0],
      [0, 0, 1], [1, 0, 1], [1, 1, 1], [0, 1, 1]
    ]
  },
  {
    name: 'Corporatism', color: '#ff9800',
    vertices: [
      [-1, 0, 0], [0, 0, 0], [0, 1, 0], [-1, 1, 0],
      [-1, 0, 1], [0, 0, 1], [0, 1, 1], [-1, 1, 1]
    ]
  }
];

  const faces = [
    [0, 1, 2], [0, 2, 3], // bottom
    [4, 5, 6], [4, 6, 7], // top
    [0, 1, 5], [0, 5, 4], // front
    [2, 3, 7], [2, 7, 6], // back
    [1, 2, 6], [1, 6, 5], // right
    [0, 3, 7], [0, 7, 4]  // left
  ];

  const regionMeshes = regionDefinitions.map(region => {
    const x = region.vertices.map(v => v[0]);
    const y = region.vertices.map(v => -v[1]);
    const z = region.vertices.map(v => -v[2]);

    const i = [], j = [], k = [];
    faces.forEach(tri => {
      i.push(tri[0], tri[0], tri[0]);
      j.push(tri[1], tri[1], tri[1]);
      k.push(tri[2], tri[2], tri[2]);
    });

    return {
      type: 'mesh3d',
      x, y, z,
      i, j, k,
      color: region.color,
      opacity: 0.08,
      name: region.name,
      showlegend: true
    };
  });

  const gridLines = {
    type: 'scatter3d',
    mode: 'lines',
    x: [], y: [], z: [],
    line: {
      color: 'rgba(0,0,0,0.2)',
      width: 2,
      dash: 'dash'
    },
    showlegend: false,
    hoverinfo: 'skip'
  };

  const bounds = [-1, 0, 1];
  for (let xi = 0; xi < bounds.length; xi++) {
    for (let yi = 0; yi < bounds.length; yi++) {
      gridLines.x.push(bounds[xi], bounds[xi], null);
      gridLines.y.push(bounds[yi], bounds[yi], null);
      gridLines.z.push(-1, 1, null);

      gridLines.x.push(bounds[xi], bounds[xi], null);
      gridLines.y.push(-1, 1, null);
      gridLines.z.push(bounds[yi], bounds[yi], null);

      gridLines.x.push(-1, 1, null);
      gridLines.y.push(bounds[xi], bounds[xi], null);
      gridLines.z.push(bounds[yi], bounds[yi], null);
    }
  }

  const data = [...regionMeshes, ideologyPoint, gridLines];

  const layout = {
    margin: { l: 0, r: 0, b: 0, t: 0 },
    legend: {
      orientation: 'h',
      y: -0.2
    },
    scene: {
      xaxis: { title: 'Economic' },
      yaxis: { title: 'Authority' },
      zaxis: { title: 'Adherence' }
    }
  };

  // WebGL check — Firefox high-security mode blocks WebGL which Plotly 3D needs
  function hasWebGL() {
    try {
      const canvas = document.createElement('canvas');
      return !!(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
    } catch(e) { return false; }
  }

  if (!hasWebGL()) {
    graph.innerHTML = `
      <div style="padding:24px;text-align:center;background:rgba(139,92,246,0.08);border:1px solid rgba(139,92,246,0.2);border-radius:16px;">
        <p style="font-weight:600;color:#8B5CF6;margin-bottom:8px;">3D Graph Unavailable</p>
        <p style="font-size:14px;color:#6B6494;">Your browser's security settings are blocking WebGL, which is required for the 3D chart.<br>
        Try lowering your browser security level or opening in a different browser to see the graph.</p>
        <p style="font-size:13px;margin-top:12px;color:#6B6494;">
          <strong>Your position:</strong> Economic ${x.toFixed(2)} &nbsp;·&nbsp; Authority ${y.toFixed(2)} &nbsp;·&nbsp; Adherence ${z.toFixed(2)}
        </p>
      </div>`;
    return;
  }

  Plotly.newPlot('graph', data, layout);

  // Attach Download Button handler
  const downloadBtn = document.getElementById("downloadBtn");
  if (downloadBtn) {
    downloadBtn.onclick = function () {
      Plotly.downloadImage('graph', {
        format: 'png',
        filename: 'civic_cube_result',
        height: 600,
        width: 800,
        scale: 2
      });
    };
  }
 }


