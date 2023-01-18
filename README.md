# Ebaits

A marketplace for baitbuilders


## Getting Started with the server


Run the server/index.js file in node. Then just install all the dependencies til it stops crashing. So far I had:

`npm i express`

`npm i mongoose`

`npm i cors `

Then add your values to a /server/.env file (checkout .env.sample) and you should be good.

### Database

In order for this server to function you must have MongodDB installed and running on your system.

For more info: [Installing MongoDB](https://www.mongodb.com/docs/manual/installation/)

The database connecting port as well as the name of your database must be entered in the .env file. See the .env.sample file for tne correct variable names.

## Getting Started with the Ebait client

Go to the client directory. Run

`npm i`

 then 
 
 `npm i @auth0/auth0-react`

Then add your values to a /client/.env file (checkout .env.sample) and run

`npm start`

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### API connection

The adress and port of the server need to be added to the .env file. See the .env.sample file for tne correct variable names.

### Authentication

The authentication is handled with Auth0. [An account can be made here.](https://auth0.com/)

The domain and client ID need to be added to the .env file. See the .env.sample file for tne correct variable names.

### Image hosting

Image hosting is done through cloudinary. [An account can be made here.](https://cloudinary.com/)

The domain and client ID need to be added to the .env file. See the .env.sample file for tne correct variable names.

The app does not delete images from the cloudinary storage.

## Scripts

### `gulp populateComponents`

Will create react functional components in any empty js files in the component directory, using the file name as the component name.


