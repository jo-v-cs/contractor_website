// Allow use of 'require' in ES6
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const assert = require('assert');
import { getQuote } from "../public/js/requestFunctions.mjs";
var sqlite3 = require('sqlite3').verbose();

// Dummy sqlite3 db
beforeEach(function (){
    let db = new sqlite3.Database(':memory:');
    db.run(`CREATE TABLE 
    IF NOT EXISTS orders(
        id INTEGER PRIMARY KEY,
        name TEXT,
        email TEXT,
        genre TEXT,
        numPlayers TEXT,
        duration TEXT,
        quote TEXT)`);
});
afterEach(function(){
    db.run(`DROP TABLE orders`);
});


// Test getQuote()
describe('Test request.getQuote()', function() {
    it('should exist', function() {
        assert(getQuote);
    });
    it('should return a number', function() {
        assert(typeof(getQuote(2,5)) === "number");
    });
    it('should return an accurate quote value', function() {
        assert.equal(50, getQuote(1,1));
        assert.equal(600, getQuote(3, 4));
    });
});

// Test database query
describe('Test sqlite3 query', function() {
    it('should ')
});