# Just Express (with a bunch of node and http). In detail.

No MERN or MEAN... just Express js. For those who've learned a bit about the most awesome node framework, and want more.  
Instructor: **Robert Bunch**
Course Repository:  
https://github.com/robertbunch/justExpress

### What you'll learn:

- Understand the why engineers would want to create an app with Ethereum
- Design, test, and deploy secure Smart Contracts
- Use the latest version of Ethereum development tools (Web3 v1.0)
- Build compelling blockchain applications using the Ethereum Blockchain
- Learn the true purpose and capabilities of Ethereum and Solidity
- See practical examples to comprehend what the blockchain and mining are

### Description

You have some notion of what Node, Express, and http are or you wouldn't be here. Node and back-end JavaScript have taken the world by storm, [SOME BIG COMPANY] moved to node and it changed the world, blah blah blah. One of the first things you're going to learn in any node course is about the Express module. But how much do you really learn about it? How to render a page in one template engine? How to make a get and a post route? Most MEAN and MERN stacks students I've met learned Express in a few breaths and then moved on to MongoDB, MySQL, Angular, React, or whatever was in the rest of the tech stack. What is http anyway? Should I even care? It's easy to get 2 inches deep and find you've accomplished your task, but in fact have no idea why it works or how you'd go further. That, in my opinion, is no good for someone who wants to be a great developer.

I've had a lot of students ask for a course on **just Express js** because they were either overwhelmed when they learned it, or they can't find any detail on it to go further than beginner knowledge. That's what this course is for. We will go through the various pieces of Express in detail so you can know why it behaves the way it does and get the most out of it. Express 5 is currently in alpha, so when it hits beta or full release, and as questions come up, the course will expand accordingly!

**Note:** this course is not a quick path to launch a webapp with Express/Node. You can get that in 10 minutes in many other places. This course is meant to take a longer, deeper look at what Express js actually does.

I've been using Express since V.2, in 2012 and have seen it do just about everything. It is one of my favorite node modules and consistently one of the most downloaded on npm. There are other awesome technologies that patch into Express that get easily missed. This course will naturally lead into other things like websockets, webRTC, etc. Prepare for one of the most awesome node modules on npm!

## Sections

1. Environment Setup (skip if you have node installed already)

2. Before Express... - TCP & HTTP, making an express-less node server
3. Express 101 - Making a basic web sever with Express

4. Express 201 - Middleware and Rendering

5. Express 301 - Req & Res revisited, the router, and the express generator

6. Rendering Project

7. API Project

8. Passport (jwt & local strategy still coming)

9. Best Practices (Coming...)

10. Supplemental - connecting to various DBs (very basic - only for those already familiar with a database)

### Who this course is for:

- Beginner node developers who want to learn Express but overwhelmed by full MERN or MEAN courses
- Beginner node developers who need a review of JUST Express js
- Developers who want to go into the various pieces of Express in a little more depth without having to look at the docs
- Developers interested in using node as a webserver or using web sockets with Express

### Requirements

- You have a working knowledge of JavaScript (Not a ninja, but you should not be brand new).
- You have at least run a Nodejs program before. I will cover some basics, but this is NOT an - intro to node class.
- You have basic command line knowledge (at least capable of navigating and running a program)
- You have a computer capable of running Nodejs.

## Section 1: Introduction

## Section 2: Enviroment Setup (skip if you have node installed already)

- Install Nodejs
- Install VSCode or your favorite code editor

## Section 3: Before Express

### Folder 01: before-express

### 1. How the Internet Works - TCP and UDP

### 2. What is an HTTP request and how does it work?

### 3.

// Install a code server listener  
`npm install -g nodemon`

This is a global dependency, so you can run it anywhere. it will always listen for changes in your files and restart the server automatically  
// To run the code with nodemon just type  
`nodemon expressServer.js`

For convention, Response is called res, and Request is called req

Request or REQ, is all the information sended back from the other computer we are connecting to  
Response or RES, is all the information we send back to the other computer we are connecting to

// Run curl to check the information of an HTTP request, response  
`curl -v locahost:3000`

## Section 4: Express 101

### Folder 02: express101

### 1. Enter Express... the basics

// This initializes the package.json file  
`npm init -y`

// This installs express into the package.json file  
`npm install express --save`

### 2. Basic Routing in Express

https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods

### 3. Serving Static Files in Express

Mounts the specified middleware function or functions at the specified path: the middleware function is executed when the base of the requested path matches path.  
https://expressjs.com/en/5x/api.html#app.use

Serving static files in Express

To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.

https://expressjs.com/en/starter/static-files.html#serving-static-files-in-express

## Section 05: Express 201 - Middleware and Rendering

### Folder 03: express201

### 1. Middleware. (It's all Express really is.)

res.locals

Use this property to set variables accessible in templates rendered with res.render. The variables set on res.locals are available within a single request-response cycle, and will not be shared between requests.

https://expressjs.com/en/5x/api.html#res.locals

### 2. Putting on your Express helmet, and other awesome Express middleware

express.json([options])

This is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.

https://expressjs.com/en/5x/api.html#express.json

express.urlencoded([options])

This is a built-in middleware function in Express. It parses incoming requests with urlencoded payloads and is based on body-parser.

https://expressjs.com/en/5x/api.html#express.urlencoded

Production Best Practices: Security

Use Helmet

Helmet can help protect your app from some well-known web vulnerabilities by setting HTTP headers appropriately.

https://expressjs.com/en/advanced/best-practice-security.html#use-helmet

https://helmetjs.github.io/

`npm i helmet --save`

### 3. Responding with JSON

res.json([body])

Sends a JSON response. This method sends a response (with the correct content-type) that is the parameter converted to a JSON string using JSON.stringify().

https://expressjs.com/en/api.html#res.json

// Problems with security with helmet while using json  
// comment the helmet library so you can continue to use json
https://stackoverflow.com/questions/63643775/content-security-policy-the-page-s-settings-blocked-the-loading-of-a-resource-a

### 4. Wiring up Express with a view engine

app.set(name, value)

Assigns setting name to value. You may store any value that you want, but certain names can be used to configure the behavior of the server. These special names are listed in the app settings table.  
https://expressjs.com/en/api.html#app.set

// Install EJS template engine  
`npm install ejs --save`  
`npm install hbs --save`  
`npm install pug --save`

### 5. Helmet Note

If you get "Refused to load the script..." in the next lecture, you need to tell Helmet to not load the contentSecurityPolicy like so:

```
    app.use(helmet({
        contentSecurityPolicy: false,
    }));
```

Helmet is great, but it can be a little over zealous at times :)

### 6. Template Engines

- EJS https://ejs.co/
- HandleBars https://handlebarsjs.com/
- Jade/Pug https://pugjs.org/

## Section 06: Express 301 - Rq & Res revisited, the router, and the express generator

### Folder 04: express301

### 1. Getting data from the request object - forms and cookies

cookie-parser:  
https://www.npmjs.com/package/cookie-parser  
`npm i cookie-parser --save`

### 2. Sending files, and headers already sent!

res.download(path [, filename] [, options] [, fn])  
https://expressjs.com/en/4x/api.html#res.download

### 3. The Router

express.Router([options])  
https://expressjs.com/en/4x/api.html#express.router

Router  
A router object is an isolated instance of middleware and routes. You can think of it as a “mini-application,” capable only of performing middleware and routing functions. Every Express application has a built-in app router.  
https://expressjs.com/en/4x/api.html#router

### 4. The Express Generator

Express application generator  
Use the application generator tool, express-generator, to quickly create an application skeleton.  
https://expressjs.com/en/starter/generator.html#express-application-generator

Starter fullstack template engine EJS, with no global install using NPX  
`npx express-generator --view=ejs myAppEJS`

You can run the application generator with the npx command (available in Node.js 8.2.0).  
`npx express-generator`  
For earlier Node versions, install the application generator as a global npm package and then launch it:  
`npm install -g express-generator`  
To check there it was installed in a linux machine  
`which express`  
To uninstall a global dependency

```
npm uninstall -g <package-name>
# example
npm uninstall -g webpack
```

Creates a new directory, with an App.js, Routes folder with routes  
A public folder, and all the stuff almost like ready to use

```
express myNewExpressSite
cd myNewExpressSite
npm install
nodemon
```

### Folder 05: myNewExpressSite

Creates boilderplate express app with EJS template engine  
`express ejsSite --view-ejs`

### 5. STOP - Checklist Update and Short Review

We have 2 app.get:

1. app.get(name)
   Returns the value of name app setting, where name is one of the strings in the app settings table.  
   https://expressjs.com/en/4x/api.html#app.get

2. app.get(path, callback [, callback ...])  
   Routes HTTP GET requests to the specified path with the specified callback functions.  
   https://expressjs.com/en/4x/api.html#app.get.method

### 6. Don't fear the HTTP headers!!

**Most Important**

res.set(field [, value])  
Sets the response’s HTTP header field to value. To set multiple fields at once, pass an object as the parameter.

```
res.set('Content-Type', 'text/plain')

res.set({
  'Content-Type': 'text/plain',
  'Content-Length': '123',
  ETag: '12345'
})
```

1. Cache-Control  
   The Cache-Control HTTP header field holds directives (instructions) — in both requests and responses — that control caching in browsers and shared caches (e.g. Proxies, CDNs).  
   https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control

2. req.fresh
   When the response is still “fresh” in the client’s cache true is returned, otherwise false is returned to indicate that the client cache is now stale and the full response should be sent.  
   https://expressjs.com/en/5x/api.html#req.fresh

3. req.stale
   Indicates whether the request is “stale,” and is the opposite of req.fresh.  
   https://expressjs.com/en/5x/api.html#req.stale

4. req.accepts(types)
   Checks if the specified content types are acceptable, based on the request’s Accept HTTP header field. The method returns the best match, or if none of the specified content types is acceptable, returns false (in which case, the application should respond with 406 "Not Acceptable").  
   https://expressjs.com/en/5x/api.html#req.accepts
5. res.append(field [, value])
   res.append() is supported by Express v4.11.0+
   Appends the specified value to the HTTP response header field. If the header is not already set, it creates the header with the specified value. The value parameter can be a string or an array.  
   https://expressjs.com/en/5x/api.html#res.append

## Section 07: Starter Project - Movie Fan App

### Folder 06: movieFanSite

API key and link for the next lecture

API key: 1fb720b97cc13e580c2c35e1138f90f8ElfGod

If you want to get your own (or this stops working), sign up here: https://www.themoviedb.org/documentation/api?language=en-US

API Docs: https://developers.themoviedb.org/3/getting-started/introduction

Starter files: https://github.com/ridiculous-inc/justExpress/tree/master/starterFiles/movieAppProj1

```
const apiBaseUrl = 'http://api.themoviedb.org/3';
const nowPlayingUrl = `${apiBaseUrl}/movie/now_playing?api_key=${apiKey}`;
const imageBaseUrl = 'http://image.tmdb.org/t/p/w300';
```

### 1. Adding the request module

https://www.npmjs.com/package/request
`npm i request`

Create account and get API key

1. https://www.themoviedb.org
2. Create an account
3. Go to the Developers Section, https://developers.themoviedb.org/4/getting-started/authorization
4. Go to the Settings API, https://www.themoviedb.org/settings/api
5. Fill out the information and that's it!

## Section 08: Project - Building an API

Nothing added here

## Section 09: Supplemental: Passport

### 1. Passport and the github Strategy

Intro to Passport:  
https://www.passportjs.org/  
https://www.npmjs.com/package/passport  
`npm i passport`

https://www.passportjs.org/concepts/authentication/middleware/

passport-github:  
https://www.passportjs.org/packages/passport-github2/  
`npm install passport-github2`

Register a new OAuth application  
https://github.com/settings/applications/new
