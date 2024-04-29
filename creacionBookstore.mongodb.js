/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('miguelcm');

db.bookstore.drop();
db.createCollection("bookstore");

db.bookstore.insertMany([
    {
      "title": "Everyday Italian",
      "author": "Giada De Laurentiis",
      "year": 2005,
      "price": 30
    },
    {
      "title": "Harry Potter",
      "author": "J K. Rowling",
      "year": 2005,
      "price": 29.99
    },
    {
      "title": "XQuery Kick Start",
      "author": [
        "James McGovern",
        "Per Bothner",
        "Kurt Cagle",
        "James Linn",
        "Vaidyanathan Nagarajan"
      ],
      "year": 2003,
      "price": 49.99
    },
    {
      "title": "Learning XML",
      "author": "Erik T. Ray",
      "year": 2003,
      "price": 39.95
    }
  ])

  //db.bookstore.distinct("title")
  //db.bookstore.find({price: {$lt:30}},{_id:0})
  //db.bookstore.distinct("title",{price: {$lt:30}})
  //db.bookstore.find({price: {$gt:30}},{_id:0},{title:1}).sort("title");
  //ALTERNATIVE
  //NOT db.bookstore.distinct("title",{price:{$gt:30}}).sort(title:1);
  //db.bookstore.find({year:{$gte:2003,$lte:2004}});
