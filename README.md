# Eggsactly

This web app is an independant project designed to deepen my understanding of the MERN stack.

## About this repository

The `backend/` is a barebone Express (NodeJS and Sequelize for db access) server and the `frontend/` has been generated with `npx create-react-app frontend --template typescript` so ReactJS and Typescript. 

## Context

The idea is to provide a mobile web app gathering various methods to cook eggs, displayed in a user-friendly interface. Even though the UI is responsive, it was designed for a mobile phone which is the device that is generally used for timers and recipe when cooking.

## Usage

1. Start the API. (Run the following commands within the `backend` folder)

   a. Install the dependencies

   ```bash
   npm install
   ```

   b. Run the HTTP server (will start on port `8000`)

   ```bash
   npm run dev
   ```

2. Start the React app  (Run the following commands within the `front-end` folder)

    a. Install the dependencies

   ```bash
   npm install
   ```

   b. Run the application (will start on port `3000`)

   ```bash
   npm start
   ```
