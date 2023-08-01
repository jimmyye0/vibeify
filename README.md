# vibeify

## About
A live web-application deployed on Heroku that interacts with Spotify's Web API to allow users to gain insights to their Spotify usage. A fun hobby project.

## Languages, Tools, and Libraries/Packages
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

## [Click Here to View the Live Web-Application - may take awhile to load](https://vibeify-1cdb0dbbe555.herokuapp.com/home)

Version 2.0.0 brings a new and reformed UI experience.

![image](https://github.com/lukarh/vibeify/assets/65103724/10e3a8d2-0eab-4eb8-93fe-685569fc5b0e)
![image](https://github.com/lukarh/vibeify/assets/65103724/6ea5917d-ed25-4849-85eb-b7e82f1b72ab)
![image](https://github.com/lukarh/vibeify/assets/65103724/cb027faf-20d7-4c1d-a628-9820f6851dbb)
![image](https://github.com/lukarh/vibeify/assets/65103724/da65c0ca-c082-4c00-bddc-8e75434cbbbe)
![image](https://github.com/lukarh/vibeify/assets/65103724/bda03f9b-ebbf-4288-8055-6643717bd95d)

## Version Log
- v1.0.0 Initial working web-app
- v2.0.0 Reformed UI 
- v3.0.0 Redesigned layout of UI and added new features

## Development

- Code: JavaScript using MERN Stack
- Framework: React.js
- Database: MongoDB
- Back-End: Express.JS, Axios, connect-mongo
- Front-End: Material UI, a React UI component library & NivoCharts
- APIs: Spotify Web API
- Additional: HTML, CSS

## Running the App Locally

This app runs on Node.js and you can find instructions on how to install Node.js on their [website](https://nodejs.org/download/).

After installing Node.js, clone the repository and install the dependencies of the client and server:

`$ cd client` then `$ npm install` then `$ npm start` to run the client

Open `http://localhost:3000` to view the application in your browser.

`$ cd server` then `$ npm install` then `$ nodemon` to run the server

Host the server locally on your computer.

### Application Credentials

This repository does not contain credentials for obvious reasons. To run this app locally, you will have to use your own credentials by registering for Spotify's Web API. Refer to the [Offical Spotify Documentation for Developers](https://developer.spotify.com/).

On the [Spotify Developer's Dashboard](https://developer.spotify.com/dashboard), goto your registered app and register the following Redirect URIs:

- http://localhost:3000/redirect

Once you've registered for Spotify's Developer API, create a .env file in the server folder and put in your following credentials:

`SPOTIFY_CLIENT_ID = "your-spotify-client-id"`

`SPOTIFY_CLIENT_SECRET = "your-spotify-client-secret"`

`SERVER_SECRET_KEY = "your-secret-key"`


