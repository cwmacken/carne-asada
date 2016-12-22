# Carne Asada Boilerplate
A boilerplate built with all the new fancy JS tools but setup for simple implementation and deployment. A KISS focused framework (as much as one can...).

## Getting Started

Cloning: `git clone https://github.com/cwmacken/carne-asada.git`

Installing Dependencies:

`cd carne-asada`

**NOTE!** Use Node 6.9.1 or higher and NPM 3.10.8 or higher

check Node and NPM versions

`node -v`

`npm -v`

use [NVM](https://github.com/creationix/nvm) if you need to upgrade


Install all the things!

`npm install`

Start the boilerplate

`npm start`

Navigate to [http://localhost:9090/](http://localhost:9090/)

## Compiling for Production

Build the production version

`npm run build`

Run production version

`npm run prod`

## Technologies Used

You should know what you're using so you look smart and can use all the latest terms to up your nerd cred.

### Node and Express

The backend server is Node running Express. This combination is the defacto standard and is well documented.

NODE [https://nodejs.org/en/](https://nodejs.org/en/)

Express [http://expressjs.com/](http://expressjs.com/)

### NPM

This is what you used to install everything in the getting started section. NPM is awesome and makes your life suck less. Yay!

NPM [https://www.npmjs.com/](https://www.npmjs.com/)

### React

React is the coolest of cool things to use right now. You want to be hip. Basically instead of one giant JS file and one giant DOM file you make little components that have just the DOM and JS you need. This is a gross over simplification but it helps.

If you want to read more about what React is and how it is used these links will help [http://www.funnyant.com/reactjs-what-is-it/](http://www.funnyant.com/reactjs-what-is-it/) and [https://www.quora.com/profile/Pete-Hunt/Posts/Facebooks-React-vs-AngularJS-A-Closer-Look](https://www.quora.com/profile/Pete-Hunt/Posts/Facebooks-React-vs-AngularJS-A-Closer-Look)


React Docs [https://react-bootstrap.github.io/](https://react-bootstrap.github.io/)

### Redux

Redux is the state container for your app. While they are often used closely React is not Redux and Redux is not React. The best advice I can give you is to take a day and build a small React app or two; then go through the Redux docs and add Redux to your already existing React apps

Redux Docs [http://redux.js.org/](http://redux.js.org/)


### Babel

Babel converts ES6 ( aka ES2015, ES2016,  ES-fancy-hipster-speak ) in ES5 (aka what your browser knows)

In theory as browsers adopt ES6 you wont need Babel, but for now your lead dev (or lead dev hiring you) will want you to know ES6 ..... so you're stuck with Babel (or similar tech)

Babel Docs [https://babeljs.io/](https://babeljs.io/)


### Webpack

Welcome to Webpack hell. Webpack compiles all the little components you wrote into a functioning website. By its nature Webpack will be your undoing, enjoy!

Webpack Docs [https://webpack.github.io/](https://webpack.github.io/)

### Bootstrap

Bootstrap! Everyone loves Bootstrap unless you hate it. Technically this isn't Bootstrap but rather React-Bootstrap (because Bootstrap uses Jquery and if you mention Jquery in 2016 someone will throw a Blackberry at your head and tell Yahoo couldn't possibly fail)

React-Bootstrap Docs [https://react-bootstrap.github.io/](https://react-bootstrap.github.io/)

**Pay attention to the Navbar component and how links are handled**
React-Router-Boostrap [https://github.com/react-bootstrap/react-router-bootstrap](https://github.com/react-bootstrap/react-router-bootstrap)

**Not Needed But Nice To Have**
Bootstrap Docs [http://getbootstrap.com/](http://getbootstrap.com/)





LINKS TO DOCUMENT:

http://singlepageappbook.com/goal.html

http://adamsilver.io/articles/the-disadvantages-of-single-page-applications/

http://stackoverflow.com/questions/21862054/single-page-application-advantages-and-disadvantages

https://www.dialogtech.com/blog/technically-speaking/technically-speaking-the-pros-and-cons-of-single-page-applications-spas

https://blog.4psa.com/an-intro-into-single-page-applications-spa/

https://fb.me/react-devtools


https://firebase.google.com/

http://blog.krawaller.se/posts/a-react-redux-firebase-app-with-authentication/


https://medium.com/google-cloud/how-secure-is-your-firebase-ec4eb882f34b#.8fu394u7e

http://stackoverflow.com/questions/22143257/how-is-my-data-secure-with-firebase

https://github.com/mzabriskie/axios

http://moduscreate.com/optimizing-react-es6-webpack-production-build/

https://webpack.github.io/docs/cli.html

https://github.com/webpack/extract-text-webpack-plugin
