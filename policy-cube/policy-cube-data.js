/**
 * Policy Cube — Location Data
 * ─────────────────────────────────────────────────────────────────────────────
 * Structure:
 *   SURVEY_DATA[locationId] = {
 *     name, state, questions[], officials[]
 *   }
 *
 * Each question:
 *   { text, category, direction }
 *   direction: 1 = Republican-leaning agreement, -1 = Democrat-leaning agreement
 *   category: 'economic' | 'social' | 'environment' | 'criminal_justice' |
 *             'education' | 'healthcare' | 'immigration'
 *
 * Each official:
 *   { name, title, party, scores: { category: value } }
 *   scores are the official's known positions on [-1,1] per category
 *   -1 = fully Democrat, +1 = fully Republican
 *
 * Adding a new location:
 *   1. Add a new key to SURVEY_DATA below
 *   2. Add the location to the LOCATIONS array at the bottom
 *   No other changes needed.
 * ─────────────────────────────────────────────────────────────────────────────
 */

const SURVEY_DATA = {

  // ══════════════════════════════════════════════════════════════════════════
  // MICHIGAN
  // ══════════════════════════════════════════════════════════════════════════
  michigan: {
    name: "Michigan",
    state: true,
    preGauge: [
      { id: 'live', text: "Do you currently live in Michigan?" },
      { id: 'engaged', text: "Do you consider yourself engaged in Michigan politics?" },
      { id: 'vote', text: "Do you vote in local Michigan elections?" },
    ],
    questions: [
      // ── Core questions (shared themes, state framing) ──
      { text: "The state government should expand Medicaid coverage even if it increases the state budget deficit.", category: "healthcare", direction: -1 },
      { text: "Michigan should adopt stricter emissions standards for vehicles sold in the state.", category: "environment", direction: -1 },
      { text: "Public school funding in Michigan should be tied to student performance outcomes.", category: "education", direction: 1 },
      { text: "Michigan should increase the minimum wage beyond the federal level.", category: "economic", direction: -1 },
      { text: "Law enforcement agencies in Michigan should be given more resources and personnel.", category: "criminal_justice", direction: 1 },

      // ── Michigan-specific questions ──
      { text: "Michigan's right-to-work law repeal was the correct decision.", category: "economic", direction: -1 },
      { text: "The state should provide financial incentives to attract electric vehicle manufacturers to Michigan.", category: "economic", direction: -1 },
      { text: "Michigan should enact stricter regulations on PFAS contamination in water supplies.", category: "environment", direction: -1 },
      { text: "Michigan should expand school choice and charter school options.", category: "education", direction: 1 },
      { text: "The state should restrict abortion access beyond current Michigan law.", category: "social", direction: 1 },
      { text: "Michigan should invest more in public transit infrastructure in Detroit and other cities.", category: "economic", direction: -1 },
      { text: "Michigan should cooperate with federal immigration enforcement operations.", category: "immigration", direction: 1 },
      { text: "The state should reform its cash bail system to reduce pretrial incarceration.", category: "criminal_justice", direction: -1 },
      { text: "Michigan should allow more oil and gas drilling in the Great Lakes region.", category: "environment", direction: 1 },
      { text: "Michigan's auto industry should receive state subsidies to compete with foreign manufacturers.", category: "economic", direction: -1 },
    ],
    officials: [
      {
        name: "Gretchen Whitmer",
        title: "Governor",
        party: "Democrat",
        scores: { economic: -0.7, social: -0.8, environment: -0.8, criminal_justice: -0.5, education: -0.4, healthcare: -0.8, immigration: -0.6 }
      },
      {
        name: "Gary Peters",
        title: "U.S. Senator",
        party: "Democrat",
        scores: { economic: -0.6, social: -0.7, environment: -0.7, criminal_justice: -0.4, education: -0.4, healthcare: -0.7, immigration: -0.5 }
      },
      {
        name: "Elissa Slotkin",
        title: "U.S. Senator",
        party: "Democrat",
        scores: { economic: -0.5, social: -0.6, environment: -0.6, criminal_justice: -0.3, education: -0.3, healthcare: -0.6, immigration: -0.4 }
      },
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  // OHIO
  // ══════════════════════════════════════════════════════════════════════════
  ohio: {
    name: "Ohio",
    state: true,
    preGauge: [
      { id: 'live', text: "Do you currently live in Ohio?" },
      { id: 'engaged', text: "Do you consider yourself engaged in Ohio politics?" },
      { id: 'vote', text: "Do you vote in local Ohio elections?" },
    ],
    questions: [
      // ── Core questions ──
      { text: "The state government should expand Medicaid coverage even if it increases the state budget deficit.", category: "healthcare", direction: -1 },
      { text: "Ohio should adopt stricter emissions standards for industrial facilities.", category: "environment", direction: -1 },
      { text: "Public school funding in Ohio should be tied to student performance outcomes.", category: "education", direction: 1 },
      { text: "Ohio should increase the minimum wage beyond the federal level.", category: "economic", direction: -1 },
      { text: "Law enforcement agencies in Ohio should be given more resources and personnel.", category: "criminal_justice", direction: 1 },

      // ── Ohio-specific questions ──
      { text: "Ohio's ban on gender-affirming care for minors was the right policy decision.", category: "social", direction: 1 },
      { text: "Ohio's abortion amendment passed by voters should be upheld without legislative restriction.", category: "social", direction: -1 },
      { text: "Ohio should invest more heavily in coal and natural gas to maintain energy independence.", category: "environment", direction: 1 },
      { text: "Ohio should expand school voucher programs that allow public funds to go to private schools.", category: "education", direction: 1 },
      { text: "Ohio should reform its redistricting process to remove partisan influence.", category: "social", direction: -1 },
      { text: "Ohio should cooperate with federal immigration enforcement operations.", category: "immigration", direction: 1 },
      { text: "The state should invest in infrastructure to address the opioid crisis in rural Ohio.", category: "healthcare", direction: -1 },
      { text: "Ohio should reduce regulations on businesses to attract more manufacturing jobs.", category: "economic", direction: 1 },
      { text: "Ohio should reform mandatory minimum sentencing laws.", category: "criminal_justice", direction: -1 },
      { text: "Ohio should expand Medicaid under the ACA for more low-income residents.", category: "healthcare", direction: -1 },
    ],
    officials: [
      {
        name: "Mike DeWine",
        title: "Governor",
        party: "Republican",
        scores: { economic: 0.5, social: 0.6, environment: 0.3, criminal_justice: 0.6, education: 0.6, healthcare: 0.3, immigration: 0.6 }
      },
      {
        name: "Bernie Moreno",
        title: "U.S. Senator",
        party: "Republican",
        scores: { economic: 0.8, social: 0.9, environment: 0.7, criminal_justice: 0.8, education: 0.8, healthcare: 0.7, immigration: 0.9 }
      },
      {
        name: "Jon Husted",
        title: "U.S. Senator",
        party: "Republican",
        scores: { economic: 0.7, social: 0.7, environment: 0.5, criminal_justice: 0.7, education: 0.7, healthcare: 0.6, immigration: 0.7 }
      },
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  // COLORADO
  // ══════════════════════════════════════════════════════════════════════════
  colorado: {
    name: "Colorado",
    state: true,
    preGauge: [
      { id: 'live', text: "Do you currently live in Colorado?" },
      { id: 'engaged', text: "Do you consider yourself engaged in Colorado politics?" },
      { id: 'vote', text: "Do you vote in local Colorado elections?" },
    ],
    questions: [
      // ── Core questions ──
      { text: "The state government should expand Medicaid coverage even if it increases the state budget deficit.", category: "healthcare", direction: -1 },
      { text: "Colorado should adopt stricter emissions standards beyond federal requirements.", category: "environment", direction: -1 },
      { text: "Public school funding in Colorado should be tied to student performance outcomes.", category: "education", direction: 1 },
      { text: "Colorado should increase the minimum wage beyond the federal level.", category: "economic", direction: -1 },
      { text: "Law enforcement agencies in Colorado should be given more resources and personnel.", category: "criminal_justice", direction: 1 },

      // ── Colorado-specific questions ──
      { text: "Colorado's recreational marijuana legalization has been a net positive for the state.", category: "social", direction: -1 },
      { text: "Federal public lands in Colorado should be transferred to state control.", category: "environment", direction: 1 },
      { text: "Colorado should restrict oil and gas drilling on public lands.", category: "environment", direction: -1 },
      { text: "Colorado's TABOR law limiting tax increases should be kept as-is.", category: "economic", direction: 1 },
      { text: "Colorado should implement universal background checks for all gun sales.", category: "social", direction: -1 },
      { text: "Colorado should limit new housing development to preserve rural character.", category: "economic", direction: 1 },
      { text: "Colorado should maintain its policy of not cooperating with federal immigration detention requests.", category: "immigration", direction: -1 },
      { text: "Colorado should expand its public option health insurance program.", category: "healthcare", direction: -1 },
      { text: "Colorado's ranked-choice voting experiments should be expanded statewide.", category: "social", direction: -1 },
      { text: "Colorado should invest more in wildfire prevention through controlled burns and forest management.", category: "environment", direction: -1 },
    ],
    officials: [
      {
        name: "Jared Polis",
        title: "Governor",
        party: "Democrat",
        scores: { economic: -0.3, social: -0.7, environment: -0.6, criminal_justice: -0.4, education: -0.3, healthcare: -0.7, immigration: -0.6 }
      },
      {
        name: "Michael Bennet",
        title: "U.S. Senator",
        party: "Democrat",
        scores: { economic: -0.5, social: -0.6, environment: -0.7, criminal_justice: -0.3, education: -0.5, healthcare: -0.6, immigration: -0.5 }
      },
      {
        name: "John Hickenlooper",
        title: "U.S. Senator",
        party: "Democrat",
        scores: { economic: -0.4, social: -0.6, environment: -0.7, criminal_justice: -0.3, education: -0.4, healthcare: -0.6, immigration: -0.5 }
      },
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  // FLORIDA
  // ══════════════════════════════════════════════════════════════════════════
  florida: {
    name: "Florida",
    state: true,
    preGauge: [
      { id: 'live', text: "Do you currently live in Florida?" },
      { id: 'engaged', text: "Do you consider yourself engaged in Florida politics?" },
      { id: 'vote', text: "Do you vote in local Florida elections?" },
    ],
    questions: [
      // ── Core questions ──
      { text: "The state government should expand Medicaid coverage even if it increases the state budget deficit.", category: "healthcare", direction: -1 },
      { text: "Florida should adopt stricter emissions standards for businesses.", category: "environment", direction: -1 },
      { text: "Public school funding in Florida should be tied to student performance outcomes.", category: "education", direction: 1 },
      { text: "Florida should increase the minimum wage beyond the federal level.", category: "economic", direction: -1 },
      { text: "Law enforcement agencies in Florida should be given more resources and personnel.", category: "criminal_justice", direction: 1 },

      // ── Florida-specific questions ──
      { text: "Florida's parental rights in education law ('Don't Say Gay') was appropriate legislation.", category: "social", direction: 1 },
      { text: "Florida should expand its school voucher program further.", category: "education", direction: 1 },
      { text: "Florida should take stronger action to protect the Everglades from agricultural runoff.", category: "environment", direction: -1 },
      { text: "Florida's strict anti-immigration enforcement policies are appropriate.", category: "immigration", direction: 1 },
      { text: "Florida should expand Medicaid to cover more low-income residents.", category: "healthcare", direction: -1 },
      { text: "Florida's book banning and curriculum restriction policies are appropriate.", category: "education", direction: 1 },
      { text: "Florida should strengthen coastal protections to address sea level rise.", category: "environment", direction: -1 },
      { text: "Florida should further restrict abortion access beyond current law.", category: "social", direction: 1 },
      { text: "Florida should eliminate property insurance regulation to attract more insurers.", category: "economic", direction: 1 },
      { text: "Florida should reform its stand-your-ground law.", category: "criminal_justice", direction: -1 },
    ],
    officials: [
      {
        name: "Ron DeSantis",
        title: "Governor",
        party: "Republican",
        scores: { economic: 0.7, social: 0.9, environment: 0.5, criminal_justice: 0.8, education: 0.8, healthcare: 0.6, immigration: 0.9 }
      },
      {
        name: "Rick Scott",
        title: "U.S. Senator",
        party: "Republican",
        scores: { economic: 0.8, social: 0.8, environment: 0.6, criminal_justice: 0.8, education: 0.7, healthcare: 0.8, immigration: 0.8 }
      },
      {
        name: "Ashley Moody",
        title: "U.S. Senator (appointed)",
        party: "Republican",
        scores: { economic: 0.7, social: 0.8, environment: 0.5, criminal_justice: 0.8, education: 0.7, healthcare: 0.7, immigration: 0.9 }
      },
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  // FEDERAL
  // ══════════════════════════════════════════════════════════════════════════
  federal: {
    name: "Federal",
    state: false,
    preGauge: [
      { id: 'engaged', text: "Do you consider yourself engaged in national politics?" },
      { id: 'vote', text: "Do you vote in federal elections?" },
    ],
    questions: [
      // ── Federal-level questions across all 7 categories ──
      { text: "The federal government should raise the national minimum wage to $15 per hour or higher.", category: "economic", direction: -1 },
      { text: "The federal government should balance the budget through spending cuts rather than tax increases.", category: "economic", direction: 1 },
      { text: "The United States should pursue stricter federal carbon emissions limits.", category: "environment", direction: -1 },
      { text: "The federal government should withdraw from the Paris Climate Agreement.", category: "environment", direction: 1 },
      { text: "The Affordable Care Act should be expanded rather than repealed.", category: "healthcare", direction: -1 },
      { text: "The federal government should implement a public option or universal healthcare system.", category: "healthcare", direction: -1 },
      { text: "The federal government should increase funding for public K-12 education.", category: "education", direction: -1 },
      { text: "School choice and voucher programs should be expanded at the federal level.", category: "education", direction: 1 },
      { text: "The federal government should reduce the number of undocumented immigrants through mass deportations.", category: "immigration", direction: 1 },
      { text: "The United States should create a pathway to citizenship for undocumented immigrants already here.", category: "immigration", direction: -1 },
      { text: "Federal mandatory minimum sentencing for non-violent drug offenses should be eliminated.", category: "criminal_justice", direction: -1 },
      { text: "Federal law enforcement should have greater powers to fight domestic terrorism.", category: "criminal_justice", direction: 1 },
      { text: "The federal government should restrict abortion access nationwide.", category: "social", direction: 1 },
      { text: "The federal government should protect same-sex marriage through federal legislation.", category: "social", direction: -1 },
      { text: "The federal government should reduce regulation on businesses to stimulate economic growth.", category: "economic", direction: 1 },
    ],
    officials: [
      {
        name: "Donald Trump",
        title: "President",
        party: "Republican",
        scores: { economic: 0.7, social: 0.8, environment: 0.9, criminal_justice: 0.8, education: 0.7, healthcare: 0.7, immigration: 0.95 }
      },
      {
        name: "JD Vance",
        title: "Vice President",
        party: "Republican",
        scores: { economic: 0.6, social: 0.8, environment: 0.8, criminal_justice: 0.7, education: 0.7, healthcare: 0.6, immigration: 0.9 }
      },
    ]
  }
};

// ── Location picker options (order controls display) ──────────────────────────
const LOCATIONS = [
  { id: 'michigan', label: 'Michigan' },
  { id: 'ohio',     label: 'Ohio' },
  { id: 'colorado', label: 'Colorado' },
  { id: 'florida',  label: 'Florida' },
  { id: 'federal',  label: 'Federal (National)' },
];

// ── Category display config ───────────────────────────────────────────────────
const CATEGORIES = {
  economic:         { label: 'Economic / Fiscal',     repLabel: 'Free Market',   demLabel: 'Government Role' },
  social:           { label: 'Social / Cultural',     repLabel: 'Conservative',  demLabel: 'Progressive' },
  environment:      { label: 'Environment',            repLabel: 'Pro-Industry',  demLabel: 'Pro-Environment' },
  criminal_justice: { label: 'Criminal Justice',      repLabel: 'Law & Order',   demLabel: 'Reform' },
  education:        { label: 'Education',              repLabel: 'Choice/Local',  demLabel: 'Public/Federal' },
  healthcare:       { label: 'Healthcare',             repLabel: 'Market-Based',  demLabel: 'Universal Access' },
  immigration:      { label: 'Immigration',            repLabel: 'Enforcement',   demLabel: 'Pathways' },
};
