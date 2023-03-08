# Sendbird-project

This is a project showing the capabilities of the sendbird UIKit for React. This app builds the sendbird chat system and adds a feature where certain words are flagged as profanity. These words are:
- lettuce
- broccoli
- cabbage

When anyone sends messages containing any of these words, the message gets flagged. When a message is flagged, two things happen:
- The word itself is replaced with asterisks (*)
- A warning notification pops up.

## Important things to keep in mind
- This project has two parts. The webapp and the server.
- I chose yarn as the package manager for my project.
- After cloning the repo, be sure to go into each subfolder and type ```yarn add``` or ```npm install``` to add all the packages.
- The main webapp is build completely built using the sendbird UIKit.
- The server is built using express.
- The webapp is on port 3000 and the server is on port 3001.
- Other third party apps are also used for this project. The most important of these being ngrok - to host the backend.

## Running the project
- Download ngrok and set it up (https://dashboard.ngrok.com/get-started/setup).
- Run the ngrok executable and type the following command 
```ngrok http https://localhost:<SERVER_PORT)NO>```. This creates a tunnel by building a temporary url that can be for the webhook.
- Copy the following URL that looks like https://1e33-49-37-157-34.in.ngrok.io and add it to the webhooks section of the sendbird site followed by `/webhooks/sendbird`.
- Create two terminals and go into the directories of each of the subfolders.
- Run the server by running `node .\server.js`.
- Run the webapp by running `yarn start`.

### ngrok
Per the site, ngrok is a simplified API-first ingress-as-a-service that adds connectivity, security, and observability to your apps with no code changes. I used its feature to create a temporary http URL that tunnels into the localhost since the sendbird webhooks do not accept websockets and adding the localhost directly is not an option.

### socket.io
Socket.IO is a library that enables low-latency, bidirectional and event-based communication between a client and a server. I used socket.io to send the data received by the server to the front of the application.