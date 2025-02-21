# Assignment 11 - Artifact Management App

## Project Overview

This is a full-stack MERN application for managing artifacts. Users can add, update, delete, and like artifacts. Authentication is handled using Firebase, and data is stored in MongoDB.

## 🚀 Features

- User authentication (Firebase)
- Add, update, and delete artifacts
- Like button functionality
- Private routes for authentication-protected pages
- Responsive UI with React
- Express.js server with MongoDB database

## 🛠️ Technologies Used

### Client-Side (Frontend)

- React.js
- React Router
- Tailwind CSS
- Firebase Authentication
- Context API
- Lottie Animations

### Server-Side (Backend)

- Node.js
- Express.js
- MongoDB
- JWT Authentication

## 📂 File Structure

### Client-Side (`src/`)

- **Pages/**: Contains different pages such as Home, Login, Register, MyArtifacts, LikedArtifacts, UpdateArtifact, etc.
- **Components/**: Shared components like Navbar, Footer, Artifact Card, etc.
- **Contexts/**: Context API setup for global state management.
- **Firebase/**: Firebase configuration file.
- **assets/Lottie/**: Lottie JSON animations.

### Server-Side

The backend handles API requests and database operations.

- Routes for authentication, artifacts, and user operations.
- Uses MongoDB for data storage.
- Implements JWT for secure API calls.

## Installation and Setup

### Prerequisites

- Node.js & npm installed
- MongoDB setup
- Firebase project created

### Clone the Repositories

```sh
# Clone the client repo
git clone https://github.com/AlaminIbneFaruk/Assignment_11.git

# Clone the server repo
git clone https://github.com/AlaminIbneFaruk/Assignment-11-Server.git
```

### Install Dependencies

#### Client Side

```sh
cd Assignment_11
npm install
```

#### Server Side

```sh
cd Assignment-11-Server
npm install
```

### Environment Variables

Create a `.env` file in the server directory with:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### Running the Application

#### Start the Server

```sh
npm run server
```

#### Start the Client

```sh
npm start
```

## Deployment

- The client is deployed at: [Firebase Hosting](https://assignment-11-62e47.web.app)
- The server is hosted on Vercel
- Live link: https\://assignment-11-62e47.web.app/

## Contributing

Pull requests are welcome but for major changes, please open an issue first to discuss what you’d like to change.

## License

MIT License

