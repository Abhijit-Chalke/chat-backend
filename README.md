# Let's Chat Backend

Backend service for **Let's Chat**, a real-time messaging application built with NestJS and Socket.IO.

## Features

* User authentication
* Real-time messaging with WebSockets
* Chat room management
* Message broadcasting
* REST APIs
* Scalable NestJS architecture

## Tech Stack

* NestJS
* TypeScript
* Socket.IO
* Node.js
* JWT Authentication
* PostgreSQL / MongoDB (update as applicable)

## Getting Started

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file in the project root:

```env
PORT=3000
JWT_SECRET=your-secret-key
DATABASE_URL=your-database-url
FRONTEND_URL=http://localhost:5173
```

### Run the Application

Development:

```bash
npm run start:dev
```

Production:

```bash
npm run build
npm run start:prod
```

The server will start on:

```text
http://localhost:3000
```

## Scripts

```bash
npm run start
npm run start:dev
npm run build
npm run start:prod
npm run test
npm run test:e2e
npm run test:cov
```

## Project Structure

```text
src/
├── auth/
└── main.ts
```

## Description

Let's Chat Backend powers real-time communication using Socket.IO and NestJS. It provides authentication, messaging APIs, and WebSocket events for seamless chat experiences.

## License

MIT
