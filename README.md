# Civic Nexus — Frontend

Public-facing website for the Civic Nexus political insight and research platform.
Hosted on GitHub Pages, connected to a private Railway backend.

## What is Civic Nexus?

Civic Nexus is an open educational platform offering political alignment tools, social insight tests, and data-driven research resources. It is independently built, nonpartisan, and free to use.

---

## Project Structure

```
/
├── index.html                  — Splash screen (auto-redirects to home)
├── home.html                   — Main landing page
├── splash-styles.css           — Splash screen styles
│
├── Civic-Cube/                 — Political compass test
│   ├── test.html               — Main test page
│   ├── styles.css              — Test styles
│   ├── script.js               — Quiz logic, scoring, 3D graph
│   ├── Explanation/
│   │   ├── explanation.html    — Ideology explanations
│   │   └── explanation-styles.css
│   └── FAQ/
│       ├── faq.html            — Frequently asked questions
│       └── faq-styles.css
│
├── Auth/
│   ├── login.html              — Sign in page
│   └── signup.html             — Create account page
│
├── Donate/
│   └── donate.html             — Donation page (GoFundMe + Crypto)
│
└── SRC/
    ├── logo.png                — Logo (light mode)
    └── logo_white.png          — Logo (dark mode)
```

---

## Tools & Features

### Civic Cube Political Compass
A three-dimensional political alignment test mapping ideology across three axes:
- **Economic (X)** — Left (Socialist) ↔ Right (Capitalist)
- **Authority (Y)** — Reformist ↔ Traditionalist
- **Adherence (Z)** — Relativistic ↔ Principled

Results are plotted on an interactive 3D graph powered by Plotly. Anonymous result submission feeds the research dataset. Logged-in users have their results saved to their account.

### Authentication
Zero-knowledge challenge/response login — passwords are SHA-256 hashed client-side before transmission. The server never receives or stores plaintext passwords. Sessions are managed with JWT tokens stored in `sessionStorage`.

### Donations
Supports GoFundMe and cryptocurrency (via NowPayments). Donation events are optionally logged to the backend when a user interacts with the donate page.

---

## Design System

All pages share a unified design language:

- **Fonts:** Playfair Display (headings) + DM Sans (body)
- **Palette:** Violet — `#5B21B6` → `#8B5CF6` → `#A78BFA`
- **Components:** Glassmorphism cards, frosted sticky header, ambient background orbs
- **Dark mode:** Fully supported across all pages, persisted via `localStorage`
- **Responsive:** Mobile, tablet, and desktop layouts on all pages

---

## Backend Connection

The frontend connects to a private FastAPI backend hosted on Railway.

Every API request includes an `X-API-Key` header for identification. This is a **public key** — it identifies the client but is not a secret. Actual user data is protected by JWT tokens.

To update the API base URL or public key, search for these constants in the relevant files:

```javascript
const API_BASE   = 'https://your-railway-url.up.railway.app';
const CN_API_KEY = 'your_public_key_here';
```

Files that contain API calls:
- `Auth/login.html` — challenge + login
- `Auth/signup.html` — register
- `Civic-Cube/test.html` — anonymous result submission
- `Donate/donate.html` — donation logging (no key needed, no fetch calls currently)

---

## Local Development

No build step required — this is a static site. Just open any HTML file in a browser or serve with any static file server:

```bash
# Python
python3 -m http.server 8080

# Node
npx serve .
```

Note: API calls will fail locally unless you also have the backend running locally and update `API_BASE` to `http://localhost:8000`.

---

## Deployment

The site is hosted on **GitHub Pages** from the public frontend repo. Any push to `main` is live immediately — no build pipeline needed.

Make sure the following are set correctly before pushing:
- `API_BASE` points to the live Railway URL in all three files above
- `CN_API_KEY` contains your `CN_PUBLIC_KEY` value from Railway Variables
- Logo paths use relative references (`../SRC/` or `../../SRC/`) depending on subfolder depth

---

## License

AGPL-3.0 — see `LICENSE` for details.
