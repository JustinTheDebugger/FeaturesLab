# FeatLab-Laravel

**FeatLab-Laravel** is a powerful tool that simplifies the creation and management of new features within any applications. Designed to accelerate development, it helps developers quickly generate and integrate custom functionality with ease.

## Features

- **Feature Generation:** Quickly generate new features with a single command.
- **Highly Customizable:** Tailor the tool to suit the unique needs of your project, ensuring flexibility throughout the development cycle.
- **Intuitive Voting System:** Empower users to provide feedback by upvoting or downvoting features, allowing for easy prioritization and interaction.
- **Enhanced Productivity:** Streamline your development workflow and save valuable time by automating the creation and management of new features.

## Demo

Check out the live demo here: 

## Technologies Used

- **Laravel 11:** For building the backend and user interface.
- **Inertia v2.0:** For server-side rendering (SSR) on the VPS server.
- **React with Typescript:** For building and styling the frontend.
- **Server Side Rendering (SSR):** For optimizing performance and enabling SEO.
- **Roles & Permissions Packages:** To implement three different user roles.
- **VPS Server:** For deploying the project on a custom domain.
- **Github:** For setting up CI/CD with GitHub Actions.

## Setup New Working Environment:
1. Install Laravel Herd - https://herd.laravel.com/windows (WAMPSERVER is a bit complicated to upgraded php version, don't have any luck to upgrade to php8.2.27)
2. Install Git - https://git-scm.com/downloads
3. Restart machine
4. Find any Git repository you want to clone (for exmaple: https://github.com/JustinTheDebugger/FeaturesLab.git)
5. Open vscode and "Ctrl+`" on your keyboard to open the terminal (no need to create a folder)
6. Type "git clone " and paste the URL  which you have copied from step 3
7. Type "npm install" to install dependencies 
8. Type "npm run dev" to start project in development mode
9. Type "composer install" to manage dependencies of PHP software
10. Type "php artisan --serve" to run applications

## Setup a Git Project with Remote Repository
1. Ininitialize Git in the project folder: "git init ."
2. Rename local master branch to main: "git branch -M main"
3. Link the project to the remote repository: "git remote add origin https://github.com/JustinTheDebugger/FeaturesLab.git"
4. Add all files to staging area: "git add ."
5. Commit the changes made: 'git commit -m "Initial commit"' 
6. Push codes to the remote repository: "git push origin main"
7. Create a new branch: "git checkout -b feature/branch-name" or "git checkout -b bug-fix/branch-name"

## CI/CD Pipeline with **GitHub Actions**: To reduce organization tasks



 
