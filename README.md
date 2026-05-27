# Assignment 2 – React Components Practice

## Description
5 reusable React components demonstrating props, state, and dynamic rendering.

## Components

| Component | File | Key Features |
|-----------|------|--------------|
| **Header** | `Header.jsx` | Responsive navbar, active link state, mobile hamburger menu |
| **Footer** | `Footer.jsx` | Brand, nav links, social icons, dynamic copyright year |
| **Card** | `Card.jsx` | Project card with like toggle state, featured variant, tech badges |
| **Button** | `Button.jsx` | 4 variants, 3 sizes, disabled/loading states, icon support, ripple effect |
| **Form** | `Form.jsx` | Dynamic fields via props, client-side validation, success state |

## Project Structure
```
assignment2_react_components/
├── public/index.html
├── src/
│   ├── App.jsx             ← Showcases all 5 components
│   ├── App.css
│   └── components/
│       ├── Header.jsx / Header.css
│       ├── Footer.jsx / Footer.css
│       ├── Card.jsx   / Card.css
│       ├── Button.jsx / Button.css
│       └── Form.jsx   / Form.css
└── package.json
```

## How to Run
```bash
npm install
npm start
```
Then open http://localhost:3000
