# Entertainment Web App

## Description
A web app designed for browsing movies and TV series. The app includes search functionality, as well as filters for movies, TV series, and bookmarked items.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Deployment](#deployment)
- [Author](#author)

## Prerequisites
Before getting started, ensure you have the following installed on your machine:

- **Node.js** (v14.0.0 or higher): [Download Node.js](https://nodejs.org/)
- **npm** (v6.0.0 or higher): Comes with Node.js. Verify with `npm -v`
- **Git** (v2.20.0 or higher): To clone the repository from GitHub. [Download Git](https://git-scm.com/)
- **Vite** (optional for local development, installed via `npm install`)

## Tech Stack

### Frontend
- **React** (v18.3.1): A JavaScript library for building user interfaces.
- **React Router** (v6.26.2): Handles client-side routing.
- **Styled Components** (v6.1.13): Enables styling within components using tagged template literals.
- **React Slick** (v0.30.2): A carousel/slider component for displaying movies and TV series.
- **Slick Carousel** (v1.8.1): Core dependency for `react-slick`.

### Build Tools & Dev Tools
- **Vite** (v5.4.1): A fast build tool for modern web projects.
- **TypeScript** (v5.5.3): Type-safe JavaScript for a better developer experience.
- **ESLint** (v9.9.0): A tool for identifying and fixing linting issues in your code.
- **TypeScript ESLint** (v8.0.1): ESLint plugin for TypeScript code linting.
- **Globals** (v15.9.0): Provides global variables to be used with ESLint.

## Getting Started

### 1. Clone the Repository
First, you need to clone the repository from GitHub:

```bash
git clone https://github.com/ninokvakhadze/entertainment-web-app
```

2.Next step requires install all the dependencies.

```bash
npm install
```

3.To see project in action

```bash
npm run dev

```
## Project Structure

```bash
|--- src
| |--- components # reusable components
| |---|--- index.ts # export all components
| |--- pages
| |---|--- index.ts # export all pages
| |--- styled-components # all components' styles
| |---|--- components # reusable components
| |---|--- GlobalStyle
| |---|--- index.ts # export all components
| |--- vite-env.d.ts # declare all types
| |--- App.tsx # main page
-vercel.json # vercel file to make the routes work properly
-package.json # dependency manager configurations
```

## Deployment

Before every deployment you need to create build file.

```bash
npm run build

```

after this you can use this file to deploy project on server.

## Author

[My LinkedIn Profile](https://www.linkedin.com/in/nino-kvakhadze-654a0a255/)
