# Contractor Website

This is a website that will be built as a model for a music contracting service in which users may submit forms requesting specific types of groups, musical requests, gig info and 
any other relevant information. This site will also contain information about some of the potential contracted musicians that may be hired as well as an overview of 
services.

This project is being built to fulfill the requirements of Code Louisville's JavaScript course and will implement the following features:

## How to use
1. Clone this repository
2. Run `npm install` in repo root directory to install dependencies
3. Run `npm start` or `node index.js` to start the Node server

## Features
### Complete: 
- Create a web server with at least one route and connect to it from your application using ExpressJS 
    - application runs on Express.js
- Create a form and save the values (on click of Submit button) to an external file 
    - HTML form values in `public/request.html` are captured in `public/js/request.js`. This is stored in a `FormData` interface object and sent to server via POST method. The server parses the object and stores it into a database using the npm sqlite3 module.
- Create an array, dictionary or list, populate it with multiple values, retrieve at least one value, and use or display it in your application 
    - A GET request to `/request/orderData` results in the server querying the database for all entries, parsing each entry into an object, then pushing that object onto an array. This array is then sent to the client.
- Read and parse an external file (such as JSON or CSV) into your application and display some data from that in your app 
    - `/request/orderData` GET request involves querying a SQL database and sending the parsed data to the client.
- Create and use a function that accepts two or more values (parameters), calculates or determines a new value based on those inputs, and returns a new value
    - `request.js` `getQuote()` function accepts two parameters and calculates and returns a new value from those inputs in order to generate a monetary quote for the user.

### WIP
- Create 3 or more unit tests for your application (and document how to run them)
    - Implemented using mocha
    - `npm run test` to run unit tests


### Proposed:

- Implement a log that records errors, invalid inputs, or other important events and writes them to a text file


