# Contractor Website

This is a website that will be built as a model for a music contracting service in which users may submit forms requesting specific types of groups, musical requests, gig info and 
any other relevant information. This site will also contain information about some of the potential contracted musicians that may be hired as well as an overview of 
services.

This project is being built to fulfill the requirements of Code Louisville's JavaScript course and will implement the following features:

## How to use
1. Clone this repository
2. Run `npm install` in repo root directory to install dependencies
3. Run `'npm start'` or `'node index.js'` to start the Node server

## Features
### Complete: 
- Create a web server with at least one route and connect to it from your application using ExpressJS 
    - application run on Express.js
- Create a form and save the values (on click of Submit button) to an external file 
    - implemented with sqlite3 npm module
- Create an array, dictionary or list, populate it with multiple values, retrieve at least one value, and use or display it in your application 
    - Order data retrieved from SQL database stored in array before being sent to client
- Read and parse an external file (such as JSON or CSV) into your application and display some data from that in your app 
    - READ functionality through '/request/orderData' route
- Create and use a function that accepts two or more values (parameters), calculates or determines a new value based on those inputs, and returns a new value
    - Quote data field for orders generated from a function that accepts two parameters and calculates a new value

### WIP



### Proposed:

- Implement a log that records errors, invalid inputs, or other important events and writes them to a text file
- Create 3 or more unit tests for your application (and document how to run them)

