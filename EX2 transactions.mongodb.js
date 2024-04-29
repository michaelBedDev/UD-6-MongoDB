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

db.customers.drop();
db.createCollection("customers");
db.transactions.drop();
db.createCollection("transactions");

db.customers.insertOne({
    "phone": "032345432134",
    "BusinessType": ["Sell", "Sugar", "Drinks"],
    "Reference": 100,
    "Company": "Coca-Cola"
});

db.getCollection("transactions").insertMany([
    {
        "Id": 100,
        "Name": "John",
        "TransactionId": "tran1",
        "Transaction": [
            {
                "ItemId": "a100",
                "price": 200
            },
            {
                "ItemId": "a110",
                "price": 200
            }
        ],
        "Subscriber": true,
        "Payment": {
            "Type": "Credit-Card",
            "Total": 400,
            "Success": true
        },
        "Note": "1st Complete Record"
    },
    {
        "Id": 101,
        "Name": "Tom",
        "TransactionId": "tran2",
        "Transaction": [
            {
                "ItemId": "a100",
                "price": 200
            },
            {
                "ItemId": "a110",
                "price": 200
            }
        ],
        "Subscriber": true,
        "Payment": {
            "Type": "Debit-Card",
            "Total": 400,
            "Success": true
        },
        "Note": null
    },
    {
        "Id": 102,
        "Name": "Margaret",
        "TransactionId": "tran3",
        "Transaction": [
            {
                "ItemId": "a100",
                "price": 200
            },
            {
                "ItemId": "a110",
                "price": 200
            }
        ],
        "Subscriber": true,
        "Payment": {
            "Type": "Credit-Card",
            "Total": 400,
            "Success": true
        }
    },
    {
        "Id": 103,
        "Name": "Dylan",
        "TransactionId": "tran4",
        "Transaction": [
            {
                "ItemId": "a100",
                "price": 200
            },
            {
                "ItemId": "a110",
                "price": 200
            }
        ],
        "Subscriber": true,
        "Payment": null,
        "Note": "Payment is Null"
    }
]);

//db.transactions.find();
//db.transactions.find({Name: "Tom"},{_id:0});
//db.transactions.find({"Payment.Total": 400},{_id:0});
//db.transactions.find({"Transaction.price":{$gt:400}},{_id:0});
//db.transactions.find({Note: null},{_id:0});
//db.transactions.find().sort({Id:-1});
//db.transactions.distinct("Name");
