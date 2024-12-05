# Cinema project

### Getting Started

#### Install dependencies:

npm install

#### Run the project:

npm start:

This command uses _concurrently_ to run both the React client and JSON server in parallel:

1. **React client**: Starts on http://localhost:3000
2. **JSON server**: Starts on http://localhost:3001

### Technologies Used :

1. **React + TypeScript** - For building the user interface and ensuring type safety.
2. **SASS** - For styling the application with variables, nesting, and other SASS features.
3. **Classnames** - Utility for conditionally joining CSS class names.
4. **React Router** - For routing and navigation between pages.
5. **Redux Toolkit** - For state management, providing a simplified setup for Redux.
6. **Redux** - Core library for managing application state.
7. **RTK Query** - For data fetching and caching, integrated with Redux Toolkit.
8. **JSON Server** - Mock backend to simulate API requests, running on port 3001.

## Additional Tools:

1. **Concurrently** - Used to start both the React development server and JSON server simultaneously with a single command, making it easier to develop and test the application.

To install _concurrently_:

_- npm install concurrently --save-dev_

2. **icon font**
   _- https://icomoon.io/_

3. **nodemon**  
   _-npm install --save-dev nodemon_
