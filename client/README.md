# Getting Started with the Ebait client

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## API connection

The adress and port of the server need to be added to the .env file. See the .env.sample file for tne correct variable names.

## Authentication

The authentication is handled with Auth0. [An account can be made here.](https://auth0.com/)

The domain and client ID need to be added to the .env file. See the .env.sample file for tne correct variable names.

## Image hosting

Image hosting is done through cloudinary. [An account can be made here.](https://cloudinary.com/)

The domain and client ID need to be added to the .env file. See the .env.sample file for tne correct variable names.

The app does not delete images from the cloudinary storage. 

## Available Scripts

In the project directory, you can run:

### `gulp populateComponents`

Will create react functional components in any empty js files in the component directory, using the file name as the component name.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

There are currently no tests written for this app.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.


