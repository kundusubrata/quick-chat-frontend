# Real-Time Chat Application - Frontend

This repository contains the frontend for a real-time chat application. The application provides an intuitive user interface for authentication, chat group management, and real-time messaging. Built using Next.js and TypeScript, it integrates seamlessly with the backend API.

---

## Features

- Responsive and user-friendly design.
- User authentication via Google using NextAuth.js.
- Real-time chat functionality.
- Integration with the backend API for group and message management.

---

## Screenshots

![quick-chat homepage](/client/public/images/quick-chat-homepage.png)
![quick-chat dashboard](/client/public/images/quick-chat-dashboard.png)
![quick-chat chatpage](/client/public/images/quick-chat-chatpage.png)

## Tech Stack

- **Framework**: Next.js
- **Language**: TypeScript
- **UI**: Tailwind CSS
- **Authentication**: NextAuth.js
- **Real-time Communication**: Socket.IO

---

## Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v16 or higher)

---

## Local Setup

Follow these steps to set up the frontend application locally:

1. Clone the Repository
	```
	git clone <repository-url>
	cd client
	```
2. Install Dependencies
	```
	npm install
	```
3. Configure Environment Variables
	Create a `.env` file in the root directory and set the following:
	```
	NEXTAUTH_URL=http://localhost:3000
	NEXTAUTH_SECRET=
	NEXT_PUBLIC_APP_URL=http://localhost:3000
	NEXT_PUBLIC_BACKEND_URL=http://localhost:8000
	GOOGLE_CLIENT_ID=
	GOOGLE_CLIENT_SECRET=
	```
4. Run the Development Server
	```
	npm run dev
	```
	The application will be available at http://localhost:3000.

## Production URL

The application is deployed at:  
[https://quick-chat-frontend-lilac.vercel.app/](https://quick-chat-frontend-lilac.vercel.app/)

----------

## Development Notes

-   **Port**: The frontend runs on port `3000` by default.
-   Ensure the backend server is running at http://localhost:8000 to test API integrations.

----------

## Contributions

Feel free to contribute by submitting issues or pull requests. Follow best practices for code quality and documentation.
