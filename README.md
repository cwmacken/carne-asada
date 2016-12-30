# Carne Asada Boilerplate
A boilerplate built with all the new fancy JS tools but setup for simple implementation and deployment. A KISS focused framework (as much as one can).

## Getting Started

Cloning: `git clone https://github.com/cwmacken/carne-asada.git`

###Installing Dependencies

**NOTE!** Use Node 6.9.1 or higher and NPM 3.10.8 or higher

check Node and NPM versions

`node -v`

`npm -v`

use [NVM](https://github.com/creationix/nvm) if you need to upgrade

###Install all the things!

`npm install`

### Start the boilerplate

`npm start`

### It's Alive!
Navigate to [http://localhost:9090/](http://localhost:9090/)

## Compiling for Production and Running

Build the production version

`npm run build`

Run production version

`npm run prod`

## My Thoughts Behind Carne Asada

I built this boilerplate because I was constantly frustrated by other boilerplates being just hello world examples, overly complicated, or poorly documented. Building your own boilerplate, doing the research on options, and dealing with the bugs will make you a better dev in the long run.

This project actually started as a [Jquery](https://jquery.com/) and [Riot.js](http://riotjs.com/) project with a Node and Express backend. The original idea was to make a KISS (Keep It Simple Stupid) inspired framework a la [levels.io/](https://levels.io/) but my mentor pushed me strongly to use React and Redux out of fear that I would fall behind the curve (I have been working with React and Redux for the last year or so). While this project has grown and become more complex, the core idea is still there; write your code, deploy your code, and focus on the million other things that make a project/ business successful.

-Conor

## Structure

### Src
This is where the most of your work will be done.

src/assets contains all images, fonts and any other assets that you want to reference throughout your application (kept in separate directories for clarity).

src/components contains all individual components used throughout the application, each component is housed in its own directory containing a .jsx file and any accompanying files (less files for instance).

src/redux contains all redux logic (actions and reducers). The documentation on Redux can be found [here](http://redux.js.org/).

src/index.tpl.html is the base HTML template that main.jsx binds to. Be careful editing this file, as this is a base file of your application.

src/main.jsx, this file contains all your client side routes and creates your redux store. More information on React Router can be found [here](https://github.com/ReactTraining/react-router).

### Routes

routes/index.js, this file establishes all your backend routes. ./routes/index.js is brought in under the /server sub directory; this means that all routes in the routes/index.js have /server/ in their URL. This helps avoid some headaches associated with rendering the views on the client's browser.

### Base files

config.js contains all configurations (API keys, static domains, references that differ between dev and production)

app.js establishes the node/express backend, base level changes should be made here.

.babelrc converts ES2015 to ES5

webpack.config.js and webpack.production.config.js build their respective versions of your app.

## Technologies Used

You should know what you're using so you look smart and can use all the latest terminology to up your nerd-cred.

### Node and Express

The backend server is Node running Express. This combination is the defacto standard and is well documented.

Node Docs [https://nodejs.org/en/](https://nodejs.org/en/)

Express Docs [http://expressjs.com/](http://expressjs.com/)

### NPM

This is what you used to install everything in the getting started section. NPM is awesome and makes your life suck less. Yay!

[https://www.npmjs.com/](https://www.npmjs.com/)

### React

React is the coolest of cool things to use right now. You want to be hip. Basically, instead of one giant JS file and one giant DOM file, you make little components that have just the DOM and JS you need. This is a gross over simplification but it helps.

If you want to read more about what React is and how it is used these links will help: [http://www.funnyant.com/reactjs-what-is-it/](http://www.funnyant.com/reactjs-what-is-it/) and [https://www.quora.com/profile/Pete-Hunt/Posts/Facebooks-React-vs-AngularJS-A-Closer-Look](https://www.quora.com/profile/Pete-Hunt/Posts/Facebooks-React-vs-AngularJS-A-Closer-Look)


React Docs [https://react-bootstrap.github.io/](https://react-bootstrap.github.io/)

### Redux

Redux is the state container for your app. While they are often used closely, React is not Redux and Redux is not React. The best advice I can give is to take a day and build a small React app or two, then go through the Redux docs and add Redux to your already existing React apps.

[http://redux.js.org/](http://redux.js.org/)


### Babel

Babel converts ES6 ( aka ES2015, ES2016,  ES-fancy-hipster-speak ) in ES5 (what your browser knows)

In theory, as browsers adopt ES6 you won't need Babel, but for now your lead dev (or lead dev hiring you) will want you to know ES6... so you're stuck with Babel (or similar).

[https://babeljs.io/](https://babeljs.io/)


### Webpack

Welcome to Webpack hell. Webpack compiles all the little components you wrote into a functioning website. By its nature Webpack will be at risk of odd errors. Enjoy!

[https://webpack.github.io/](https://webpack.github.io/)

### LESS

I'm used to and prefer LESS.

http://lesscss.org/

### Bootstrap

Bootstrap! Everyone loves Bootstrap, unless you hate Bootstrap. Technically, this isn't Bootstrap but rather React-Bootstrap (because Bootstrap uses Jquery and if you mention Jquery in 2016 someone will throw a Blackberry at your head and tell you Yahoo has great security).

React-Bootstrap Docs [https://react-bootstrap.github.io/](https://react-bootstrap.github.io/)

###### Pay attention to the Navbar component and how links are handled

React-Router-Boostrap [https://github.com/react-bootstrap/react-router-bootstrap](https://github.com/react-bootstrap/react-router-bootstrap)

###### Not Needed But Nice To Have

Bootstrap Docs [http://getbootstrap.com/](http://getbootstrap.com/)

### Axios

For making calls to your backend if you grew up on AJAX calls.

Axios [https://github.com/mzabriskie/axios](https://github.com/mzabriskie/axios)

### Firebase

Firebase seems like a nice balance between security and ease of use to stand projects up quickly. So far I'm happy with what I've seen.

Firebase [https://firebase.google.com/](https://firebase.google.com/)


## Helpful Links

Below are some links that I found helpful while building this boilerplate.

### What are Single Page Apps???

http://singlepageappbook.com/goal.html

http://adamsilver.io/articles/the-disadvantages-of-single-page-applications/

http://stackoverflow.com/questions/21862054/single-page-application-advantages-and-disadvantages

https://www.dialogtech.com/blog/technically-speaking/technically-speaking-the-pros-and-cons-of-single-page-applications-spas

https://blog.4psa.com/an-intro-into-single-page-applications-spa/

### Thanks to the creators of these repos, I based a lot of my decisions off the code below

https://github.com/christianalfoni/webpack-express-boilerplate

http://blog.krawaller.se/posts/a-react-redux-firebase-app-with-authentication/

### Understanding Webpacks CLI

https://webpack.github.io/docs/cli.html

### Compiling LESS to CSS for production

https://github.com/webpack/extract-text-webpack-plugin

### Turning a 7.5MB  build into a 823kb build

http://moduscreate.com/optimizing-react-es6-webpack-production-build/
