# Linneas runclub

A one-page website for **Linneas runclub** — a saturday running club with pop music, fika and glitter. Built as a school project to practice HTML, CSS, JavaScript and a Git/GitHub workflow with feature branches and pull requests.

## Features

- Hero landing with brand, headline and call to action
- Sticky navigation with smooth scroll to each section
- About section with show/hide extra info
- Runner portraits, join info, artwork and playlist ideas
- Contact form with client-side validation
- Light / dark theme toggle
- Responsive layout for phone, tablet and desktop
- Mobile menu for smaller screens

## Technologies

- **HTML5** — semantic structure (`header`, `nav`, `main`, `section`, `article`, `footer`)
- **CSS3** — custom properties, Flexbox, CSS Grid, responsive media queries
- **JavaScript** — theme toggle, info toggle, contact form validation, mobile menu
- Google Fonts: *Syne* (display) and *Outfit* (body)

## JavaScript functions

| Feature | What it does |
| --- | --- |
| Theme toggle | Switches between light and dark mode, remembers the choice in `localStorage` |
| Show / hide info | Expands or collapses extra club information |
| Contact form | Checks that name, e-mail and message are filled in, validates e-mail format and shows a confirmation |
| Mobile menu | Opens and closes the navigation on small screens |

## Project structure

```text
my-business-website/
├── index.html
├── style.css
├── script.js
├── README.md
└── images/
```

## How to open locally

1. Clone the repository:

```bash
git clone https://github.com/linneaegner/my-business-website.git
cd my-business-website
```

2. Open `index.html` in your browser, **or** start a simple local server:

```bash
python3 -m http.server 8000
```

3. Visit [http://localhost:8000](http://localhost:8000).

No build tools or package installs are required.

## Git workflow used in this project

Development was split into feature branches and merged to `main` with pull requests:

1. `feature/html-structure`
2. `feature/css-design`
3. `feature/javascript`
4. `feature/final-improvements`
