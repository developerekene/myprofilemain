# Ekenedilichukwu Portfolio Website

**Live Site:** [https://ekenedilichukwu.com](https://ekenedilichukwu.com)

---

## Table of Contents

- [Project Overview](#project-overview)  
- [Features](#features)  
- [Technologies Used](#technologies-used)  
- [Project Structure](#project-structure)  
- [Getting Started](#getting-started)  
- [Future Improvements](#future-improvements)  
- [License](#license)  

---

## Project Overview

This is the personal portfolio website of **Ekenedilichukwu Okoli**, a Senior Software Engineer and Tech Educator. The website is designed to showcase his projects, mentoring tracks, professional experience, educational background, and contact details.  

The website emphasizes **clarity, modularity, and modern design**, built to be fully responsive across devices.

---

## Features

### Hero Section
- Welcome message with motivational quote.
- Social media links: LinkedIn, Facebook, Github, YouTube.
- Styled with primary branding color (#E64A19).

### Navigation
- Responsive navbar with logo and primary links.
- “More” dropdown for secondary links like Books, Mentoring, and Podcast.
- "Let's Talk" call-to-action button linking to contact page.

### About Section
- Detailed bio and professional experience.
- Core technologies and specializations.
- Education and founder journey.
- Interactive modal to show full professional experience.

### Projects Section
- **Featured Projects** with images, description, tech stack, role, and features.
- **All Projects** list with status: Architectural Designs, Ongoing Development, On Production.
- Project categories with icons for AI, Backend, and Mobile.

### Mentoring Section
- Upcoming and past mentoring sessions.
- Mentoring tracks with sessions and details.
- Session join buttons and interactive cards.

### Contact Section
- Contact information with email, phone, and location.
- Interactive contact form for messaging.
- Styled buttons with primary color.

### Footer
- Privacy Policy and Terms & Conditions links, individually styled.

---

## Technologies Used

- **Frontend:** React.js, React Native (for mobile components), TypeScript  
- **Styling:** Tailwind CSS, Responsive Design  
- **Icons:** react-icons  
- **State Management:** React Hooks (useState, useEffect)  
- **Backend Services:** Firebase, Node.js  
- **Hosting / Live:** [https://ekenedilichukwu.com](https://ekenedilichukwu.com)

---

## Project Structure
/App
├─ /UI
│ ├─ /Components
│ │ ├─ NavbarNew.tsx
│ │ ├─ Container.tsx
│ │ └─ Footer.tsx
│ ├─ /Pages
│ │ ├─ Home.tsx
│ │ ├─ AboutEkene.tsx
│ │ ├─ ProjectsScreen.tsx
│ │ ├─ MentoringScreen.tsx
│ │ └─ ContactScreen.tsx
├─ /Redux
│ └─ Store.ts
├─ App.tsx
└─ index.tsx


---

## Getting Started

### Prerequisites
- Node.js >= 18.x
- npm >= 9.x or yarn >= 1.22.x

### Installation
```bash
# Clone the repository
git clone https://github.com/developerekene/portfolio.git

# Navigate into project folder
cd portfolio

# Install dependencies
npm install
# or
yarn install

# Start development server
npm start
# or
yarn start


Future Improvements

Add animations and micro-interactions to hero and project cards.

Integrate CMS for dynamic project updates.

Add multilingual support for global accessibility.

Implement unit tests using Jest and React Testing Library.

License

This project is open source and available under the MIT License
.

Ekenedilichukwu Okoli – https://ekenedilichukwu.com