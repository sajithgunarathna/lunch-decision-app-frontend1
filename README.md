# Lunch Decision App - React Frontend

## Overview

The **Lunch Decision App** frontend is a React-based web application that facilitates group lunch decisions by allowing users to create sessions, suggest restaurants, and vote for their preferred options. This frontend interacts with the Spring Boot backend to manage user sessions and restaurant suggestions.

## Features

- **User Registration**: Sign up new users.
- **User Authentication**: Login existing users.
- **Session Management**: Create or join lunch decision sessions.
- **Restaurant Suggestions**: Add and view restaurant suggestions within a session.
- **Session Conclusion**: End a session and view the picked restaurant.

## Technologies Used

- **React 18**: A JavaScript library for building user interfaces.
- **React Router DOM**: For routing within the application.
- **Axios**: For making HTTP requests to the backend.
- **React Hooks**: For state and effect management.
- **CSS**: For styling components.

## Prerequisites

- **Node.js**: Ensure you have Node.js installed (version 16 or later is recommended).
- **npm**: Node Package Manager, usually comes with Node.js.

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/sajithgunarathna/lunch-decision-app-frontend1.git
cd lunch-decision-app-frontend

Install Dependencies
Install the necessary npm packages:

bash
Copy code
npm install
Run the Application
Start the React development server:

bash
Copy code
npm start
This will start the application on http://localhost:3000.

Available Scripts
In the project directory, you can run:

npm start: Runs the app in the development mode.
npm test: Launches the test runner in the interactive watch mode.
npm run build: Builds the app for production to the build folder.
npm run eject: Removes the single build dependency from your project.
Project Structure
php
Copy code
lunch-decision-app-frontend/
│
├── public/
│   ├── index.html         # Main HTML template
│   └── ...
│
├── src/
│   ├── components/        # Reusable components
│   ├── pages/             # Pages representing different views
│   ├── services/          # Axios configuration and API services
│   ├── App.js             # Main application component
│   ├── index.js           # Main entry point
│   └── ...
│
└── package.json           # Project metadata and dependencies
Important Files and Directories
src/components: Contains reusable React components.
src/pages: Contains the main pages of the application (e.g., Home, Session, Login).
src/services: Contains the Axios configuration and services for API calls.
src/App.js: The main component that sets up routes and renders the app.
src/index.js: The entry point that renders the React app to the DOM.
API Endpoints
The frontend communicates with the backend via several API endpoints. Below are some of the key endpoints:

User Registration: POST /api/users
User Login: POST /login (handled by Spring Security in the backend)
Create Session: POST /api/sessions
Join Session: POST /api/sessions/{sessionId}/user/{userId}
Add Restaurant: POST /api/restaurants/session/{sessionId}/user/{userId}
End Session: POST /api/sessions/{sessionId}/end
Refer to the backend README for detailed API documentation.

Environment Variables
The application can be configured using environment variables. Create a .env file in the root directory and add your variables:

arduino
Copy code
REACT_APP_API_URL=http://localhost:8080
Make sure to restart the development server after modifying the .env file.

Deployment
Build for Production
To create a production build, run:

bash
Copy code
npm run build
This will create an optimized build in the build directory.

Deploying to a Static Server
After building, you can deploy the build directory to any static file server. For example, using Nginx or Apache.

Deploying to GitHub Pages
To deploy to GitHub Pages, follow these steps:

Update the homepage field in package.json with your repository URL:

json
Copy code
"homepage": "https://your-username.github.io/lunch-decision-app-frontend",
Install the gh-pages package:

bash
Copy code
npm install gh-pages --save-dev
Add the following scripts to your package.json:

json
Copy code
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
Deploy the app:

bash
Copy code
npm run deploy
This will deploy your build directory to GitHub Pages.

License
This project is licensed under the MIT License. See the LICENSE file for more details.

Contact
For any questions, support, or contributions, please contact:

Email: [sajith.gunarathna@gmail.com.com]
GitHub: sajithgunarathna
