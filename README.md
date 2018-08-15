# About

This project consists of a backend and a frontend, both written in TypeScript. The backend is a simple script that responds to websocket connections with a random string of 80,000 characters. The frontend is a basic HTML page with a button that you can click to draw on a canvas based on the data from the server.

# Prerequisites

You must have websocketd installed locally. Follow [the instructions here](https://github.com/joewalnes/websocketd).

You must also have Node 8.1+ installed.

# Running the project

    # Clone the repo
    git clone https://github.com/stevenmusumeche/muscle-ash-limousine.git

    # Install dependencies (only TypeScript and a web server)
    npm install

    # Compile TypeScript, then run the server and client
    npm run start

The frontend client will be available at http:/localhost:8081/. The backend will be listening for websocket connections on http://localhost:8080.
