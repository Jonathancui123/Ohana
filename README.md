# Paste Pal


A simple to use pastebin with a modern interface and chrome integration.

## About

Built with React and Node.js  

View it live at [pastepal.ca](https://pastepal.ca).

## Setup
First, clone the repo. Then install dependencies:
```
cd server
npm i 
cd ../client
npm i 
```
In /server, create a file named ".env" that defines "DATABASE_URI" for the MongoDB connection

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
