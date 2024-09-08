# Fudo Challenge

This project is built with React using TypeScript and npm for package management.

### Prerequisites

Before you begin, ensure you have the following installed on your system:

Node.js (+v14)
npm

# Getting Started

Follow these steps to get the project up and running:

### 1. Clone the Repository
```bash
git clone https://github.com/LMHV/challenge_fudo
```

### 2. Move to the Project Directory
```bash
cd challenge_fudo
```

### 3. Install Dependencies
To install all required dependencies, run:

```bash
npm install
```

### 4. Run the Development Server
Start the project in development mode by running:

```bash
npm start
```
This will launch a local server, and you can view the project by navigating to http://localhost:5173 in your browser.

# About the Project

The Fudo Challenge is focused on building a form that creates an account for a social network called DELI. Here's an overview of the key functionalities:

Account Creation: The form submits data to an API endpoint responsible for creating the account.
Email Confirmation: After successfully creating the account, a confirmation email is sent via the Mailgun API.
User Experience:
If everything goes fine, the user is redirected to the Home Page.
In case of an error, an appropriate error message will be displayed on the screen.
