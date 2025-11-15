# GitHub Profile Finder 🔍

A modern and fast web application for searching and viewing GitHub user profiles along with their repositories.

## 📸 Overview

This project provides a beautiful and user-friendly interface for searching GitHub profiles. Users can search for people by username and view complete profile information including bio, followers, repositories, and other details.

## 🚀 Technologies Used

### Core Technologies
- **[Next.js 16](https://nextjs.org/)** - React framework for server-side rendering and static site generation
- **[React 19](https://react.dev/)** - UI library with React Compiler capability
- **[TypeScript](https://www.typescriptlang.org/)** - For type safety and better developer experience

### UI & Styling
- **[Chakra UI v3](https://www.chakra-ui.com/)** - Modern component library with theming support
- **[Emotion](https://emotion.sh/)** - CSS-in-JS for styling
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Light/dark theme management
- **[React Icons](https://react-icons.github.io/react-icons/)** - Diverse icon collection

### Code Quality
- **[Biome](https://biomejs.dev/)** - Fast linter and formatter for code quality

### APIs Used
This project uses **GitHub REST API v3** to fetch data:

- **`GET /search/users`** - Search users with various filters
- **`GET /users/{username}`** - Get complete user profile information
- **`GET /users/{username}/repos`** - Get list of user's public repositories

📚 [GitHub API Documentation](https://docs.github.com/en/rest)

## ✨ Features

- 🔍 Real-time GitHub user search with debouncing
- 👤 Display complete profile information (avatar, bio, location, followers, following, etc.)
- 📦 List of public repositories with details (stars, forks, programming language)
- 📄 Pagination for repositories
- 🌓 Light and dark mode support
- ⚡ Server-Side Rendering and ISR for improved performance
- ⚡ Streaming rendering for faster page loads
- 🎨 Responsive and beautiful design
- 💾 Data caching for improved speed
- 🐳 Docker support

## 📋 Prerequisites

Before running the project, make sure you have one of the following installed:

### Method 1: Local Execution
- Node.js version 20 or higher
- One of the package managers: pnpm (recommended), npm, or yarn

### Method 2: Docker Execution
- Docker Desktop or Docker Engine
- Docker Compose (optional)

## 🛠️ Installation and Setup

### Method 1: Local Execution

#### 1. Clone the Project
```bash
git clone https://github.com/matintohidi/github-profile-finder.git
cd github-profile-finder
```

#### 2. Install Dependencies

With pnpm (recommended):
```bash
pnpm install
```

With npm:
```bash
npm install
```

With yarn:
```bash
yarn install
```

#### 3. Run the Project in Development Mode
```bash
# With pnpm
pnpm dev

# With npm
npm run dev

# With yarn
yarn dev
```

The project will be available at `http://localhost:3000`.

#### 4. Build and Run Production

Build the project:
```bash
# With pnpm
pnpm build

# With npm
npm run build

# With yarn
yarn build
```

Run the production version:
```bash
# With pnpm
pnpm start

# With npm
npm start

# With yarn
yarn start
```

### Method 2: Docker Execution

#### Prerequisites
⚠️ **Make sure Docker is installed on your system and running.**

To check Docker status:
```bash
docker --version
docker ps
```

#### 1. Clone the Project
```bash
git clone https://github.com/matintohidi/github-profile-finder.git
cd github-profile-finder
```

#### 2. Build the Image
```bash
docker build -t github-profile-finder .
```

#### 3. Run the Container
```bash
docker run -p 3000:3000 github-profile-finder
```

Or using Docker Compose (if you have a docker-compose.yml file):
```bash
docker-compose up
```

The project will be available at `http://localhost:3000`.

#### Stop the Container
```bash
# Find Container ID
docker ps

# Stop Container
docker stop <container-id>
```

## 📁 Project Structure

```
github-profile-finder/
├── src/
│   ├── app/                    # App Router (Next.js 14+)
│   │   ├── (home)/            # Home page and search
│   │   ├── profile/           # User profile pages
│   │   ├── layout.tsx         # Main layout
│   │   └── globals.css        # Global styles
│   ├── components/            # Shared components
│   │   ├── header/            # Site header
│   │   ├── input/             # Input components
│   │   └── ui/                # Chakra UI components
│   ├── configs/               # Settings and configurations
│   ├── interfaces/            # TypeScript Interfaces
│   ├── theme/                 # Chakra UI theme settings
│   └── types/                 # Type Definitions
├── public/                    # Static files
├── Dockerfile                 # Docker configuration
├── next.config.ts             # Next.js configuration
├── tsconfig.json              # TypeScript configuration
├── biome.json                 # Biome configuration
└── package.json               # Dependencies and scripts
```

## 🎯 Available Scripts

```bash
# Run development server
pnpm dev / npm run dev / yarn dev

# Build for production
pnpm build / npm run build / yarn build

# Run production server
pnpm start / npm start / yarn start

# Check code quality (Linting)
pnpm lint / npm run lint / yarn lint

# Format code
pnpm format / npm run format / yarn format
```

## 🌿 Git Strategy and Development

This project uses a simple **Direct to Main** strategy:

- ✅ All changes are pushed directly to the `main` branch
- ✅ No use of Feature Branches
- ✅ Solo Development

### Reasons for Choosing This Strategy:
1. **Small Project Size**: This is a small personal project
2. **Single Developer**: Only one person is working on the project
3. **Simplicity**: No need for the complexities of Git Flow or Feature Branches
4. **Development Speed**: Enables faster development without additional overhead

> **⚠️ Note**: For team projects or larger codebases, using strategies like Git Flow, GitHub Flow, or Trunk-Based Development is recommended.

## 👨‍💻 Author

**Matin Tohidi**

- GitHub: [@matintohidi](https://github.com/matintohidi)

## 🙏 Acknowledgments

- [GitHub API](https://docs.github.com/en/rest) for providing free and public API
- The [Next.js](https://nextjs.org/) team for the amazing framework
- The [Chakra UI](https://chakra-ui.com/) team for beautiful and functional components

---

⭐ If you found this project useful, please give it a star!
