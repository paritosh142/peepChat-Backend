# peepChat

The backend for peepChat is built with Express, Socket.IO, and MongoDB. It handles user authentication, real-time chat functionalities, and admin operations. This server-side application works seamlessly with the peepChat frontend, providing essential API endpoints and WebSocket connections for real-time communication. The application is deployed on Vercel and backend server is deployed on Render and the website can be accessed [here](https://peepchat.vercel.app/).

## Features
- **Real-time Communication**: Manage real-time chat and notifications using Socket.IO..
- **User Authentication**: Secure user login and session management.
- **Database Integration**: MongoDB for persistent data storage.
- **Cloud Storage**: Integration with Cloudinary for media management.
- **API Endpoints**: RESTful API routes for user, chat, and admin functionalities.
## Tech Stack
- **Server Framework**: Express
- **Real-time Communication**: Socket.IO
- **Database**: MongoDB
- **Authentication**: JWT and session management
- **Cloud Storage**: Cloudinary
- **API Requests**: Axios
- **Middleware**: **Helmet** for security, **CORS** for cross-origin requests, **Cookie-parser** for handling cookies
## Setup and Installation
### Prerequisites
Node.js
npm or yarn
MongoDB server
Cloudinary account
### Installation
**Clone the repository**:

```bash 
git clone https://github.com/paritosh142/peepChat.git
cd peepChat
```
Install the dependencies:

```bash
npm install
```
or

```bash
yarn install
```

## Environment Variables
Create a .env file in the root directory and add the following variables:
```bash
env

MONGO_URI=your-mongodb-uri
PORT=your-port-number
CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_API_SECRET=your-cloudinary-api-secret
ADMIN_SECRET_KEY=your-admin-secret-key
CLIENT
```

Running the Application
Start the development server:

```bash
npm run dev
```
or

```bash
yarn dev
```
Open your browser and navigate to http://localhost:3000 to see the application running.

## Usage
- **Login**: Use your credentials to log in.
- **Chat**: Select a chat or group to start messaging.
- **Admin Dashboard**: Navigate to /admin for admin functionalities.
## Project Structure
```arduino
peepChat-Backend
├── config
├── controllers
├── middlewares
├── models
├── routes
├── seeders
├── utils
├── .env
├── app.js
├── package.json
└── README.md
```

## Frontend Repository
The frontend repository for this project is available [here](https://github.com/paritosh142/peepChat-Frontend.git). Make sure to clone and set up the frontend client to fully utilize the functionalities of peepChat.
## License
This project is licensed under the MIT License.
