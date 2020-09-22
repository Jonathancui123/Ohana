# Ohana

No programmer left behind! Simple real-time collaboration for whiteboarding and code editing in any language of your choice. Practice coding with friends with the visual aid of a whiteboard.

View it live at [itsohana.com](https://itsohana.com).

## About

Built with React and Node.js  

## Setup
First, clone the repo. Then install dependencies:
```
cd server
npm i 
cd ../client
npm i 
```
In development, create a file named ".env" in /client that defines the firebase configuration. They will be available upon creating a new firebase real-time-database. The following environment variables are needed in the .env file:

REACT_APP_apiKey="",
REACT_APP_authDomain="",
REACT_APP_databaseURL="",
REACT_APP_projectId="",
REACT_APP_storageBucket="",
REACT_APP_messagingSenderId="",
REACT_APP_appId=""


To start the server for development on port 80, in /server:
```
node server.js
```
In a separate terminal, navigate to /client:
```
npm start
```
The react client will be on port 3000. 

The app is available on http://localhost:3000


## Things we've learned


- React cannot render onto textarea  
- MongoDB documentation  
- Explored methods for saving and retrieving files
