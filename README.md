# Just Express (with a bunch of node and http). In detail.

No MERN or MEAN... just Express js. For those who've learned a bit about the most awesome node framework, and want more.
Instructor: **Robert Bunch**
Course Repository:  
https://github.com/robertbunch/justExpress

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

## Section 1: Iintroduction

## Section 2: Enviroment Setup (skip if you have node installed already)

- Install Nodejs
- Install VSCode or your favorite code editor

## Section 3: Before Express

### 1. How the Internet Works - TCP and UDP

### 2. What is an HTTP request and how does it work?

### 3.

// Install a code server listener  
`npm install -g nodemon`

// To run the code with nodemon just type
`nodemon expressServer.js`

This is a global dependency, so you can run it anywhere. it will always listen for
changes in your files and restart the server automatically

For convention, Response is called res, and Request is called req

Request or REQ, is all the information sended back from the other computer we are connecting to
Response or RES, is all the information we send back to the other computer we are connecting to

// Run curl to check the information of an HTTP request, response
`curl -v locahost:3000`
