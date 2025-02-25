# vibeify

## About
A live web-application deployed on Heroku that interacts with Spotify's Web API to allow users to gain insights to their Spotify usage. A fun hobby project.

## Languages, Tools, and Libraries/Packages
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD) ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white) ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)

## [Click Here to View the Live Web-Application - may take awhile to load](https://vibeify-1cdb0dbbe555.herokuapp.com/home)

Version 2.0.0 brings a new and reformed UI experience.

![image](https://github.com/lukarh/vibeify/assets/65103724/10e3a8d2-0eab-4eb8-93fe-685569fc5b0e)
![image](https://github.com/lukarh/vibeify/assets/65103724/c86ed7f6-9273-4843-ad04-9711b0c037f6)
![image](https://github.com/lukarh/vibeify/assets/65103724/8a7a0d90-4d06-4644-9507-70968c1bb417)
![image](https://github.com/lukarh/vibeify/assets/65103724/c14aadff-1868-4c9b-90d9-016179213de1)
![image](https://github.com/lukarh/vibeify/assets/65103724/199c1f15-3de0-438b-9260-0cebff80d426)

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


