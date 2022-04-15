# Just Express (with a bunch of node and http). In detail.

No MERN or MEAN... just Express js. For those who've learned a bit about the most awesome node framework, and want more.  
Instructor: **Robert Bunch**
Course Repository:  
https://github.com/robertbunch/justExpress

### What you'll learn:

- Express. That's (mostly) all we cover so when you finish, you'll know it!
- Operate that Express Server as a REST API
- Understand the basics of HTTP and the request/response cycle
- Set up an Express server that can do anything Express can do!
- Use that Express Server to render your front-end web pages with EJS, PUG, & handlebars

### Description

You have some notion of what Node, Express, and http are or you wouldn't be here. Node and back-end JavaScript have taken the world by storm, [SOME BIG COMPANY] moved to node and it changed the world, blah blah blah. One of the first things you're going to learn in any node course is about the Express module. But how much do you really learn about it? How to render a page in one template engine? How to make a get and a post route? Most MEAN and MERN stacks students I've met learned Express in a few breaths and then moved on to MongoDB, MySQL, Angular, React, or whatever was in the rest of the tech stack. What is http anyway? Should I even care? It's easy to get 2 inches deep and find you've accomplished your task, but in fact have no idea why it works or how you'd go further. That, in my opinion, is no good for someone who wants to be a great developer.

I've had a lot of students ask for a course on just Express js because they were either overwhelmed when they learned it, or they can't find any detail on it to go further than beginner knowledge. That's what this course is for. We will go through the various pieces of Express in detail so you can know why it behaves the way it does and get the most out of it. Express 5 is currently in alpha, so when it hits beta or full release, and as questions come up, the course will expand accordingly!

Note: this course is not a quick path to launch a webapp with Express/Node. You can get that in 10 minutes in many other places. This course is meant to take a longer, deeper look at what Express js actually does.

I've been using Express since V.2, in 2012 and have seen it do just about everything. It is one of my favorite node modules and consistently one of the most downloaded on npm. There are other awesome technologies that patch into Express that get easily missed. This course will naturally lead into other things like websockets, webRTC, etc. Prepare for one of the most awesome node modules on npm!

### Who this course is for:

Beginner node developers who want to learn Express but overwhelmed by full MERN or MEAN courses
Beginner node developers who need a review of JUST Express js
Developers who want to go into the various pieces of Express in a little more depth without having to look at the docs
Developers interested in using node as a webserver or using web sockets with Express

### Requirements

- You have a working knowledge of JavaScript (Not a ninja, but you should not be brand new).
- You have at least run a Nodejs program before. I will cover some basics, but this is NOT an intro to node class.
- You have basic command line knowledge (at least capable of navigating and running a program)
- You have a computer capable of running Nodejs.

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

### Folder 03: express202

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
