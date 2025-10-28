## TicketZen
A ticket management application built with react as part of a hackathon Stage 2 challenge.

## Overview
- **implementation includes:**
- Landing page with hero section and feature highlights
- User authentication (signup/login)
- Complete ticket management system (CRUD operations)
- Real-time statistics dashboard
- Responsive design with Tailwind CSS
- localStorage-based data persistence

## Features

### Authentication
- User signup with email and password validation
- Secure login with session management
- Password validation (minimum 6 characters)
- Email format validation

### Ticket Management
- **Create** - Add new tickets with title, description, priority, and status
- **Read** - View all tickets with filtering by status
- **Update** - Edit existing ticket details
- **Delete** - Remove tickets from the system
- **Filter** - View tickets by status (Open, In Progress, Closed)

### Dashboard
- Total ticket count
- Open tickets count
- In-progress tickets count
- Closed tickets count
- Quick ticket creation form
- Ticket list with edit/delete actions

### Design
- Modern dark theme with cyan and blue accents
- Animated hero section with wavy background
- Decorative circular elements
- Smooth transitions and hover effects
- Fully responsive (mobile, tablet, desktop)
- Max-width 1440px container

## Tech Stack

### React Version
- **Framework**: React 18
- **Build Tool**: Vite
- **Routing**: React Router v6
- **Styling**: Tailwind CSS
- **State Management**: React Hooks (useState, useEffect)
- **Validation**: Schema-based validation


## Project Structure

- react/                        # React version (alternative)
-  ├── src/
-  │   ├── main.jsx
-      ├── App.jsx
-      ├── index.css
-      ├── pages/
-      ├── components/
-      └── utils/
-   └── vite.config.js

├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md

## Setup Instructions
---

### React Version

**Prerequisites:**
- Node.js 16+ and npm

**Installation:**
- clone https://github.com/Muashef/HNG13-Stage2.git
- cd Ticket-App
- npm install
- npm run dev

- Open `http://localhost:5173` in your browser
