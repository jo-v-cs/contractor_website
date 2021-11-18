// Allow use of 'require' in ES6
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const assert = require('assert');
import { getQuote } from "../public/js/requestFunctions.mjs";
const indexLogic = require('../indexLogic');
var sqlite3 = require('sqlite3').verbose();

let db;

// Dummy sqlite3 db
before(function (){
    db = new sqlite3.Database(':memory:');
});
after(function(){
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

// Test database initialization
describe('Test sqlite3 db initialization', function() {
    let testFields = ['height', 'weight', 'age'];
    it('should create a new table in existing database', function() {
        assert(indexLogic.initDB(db, testFields));
    });
});