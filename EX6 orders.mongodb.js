use('miguelcm');

db.orders.drop();
db.createCollection('orders');

db.orders.insertMany([
    {
      "order": "o1",
      "year": 2022,
      "paid": "Y",
      "cost": {
        "price": 40,
        "currency": "NOK"
      },
      "items": [
        {
          "product": "p1",
          "colours": [
            "blue",
            "black"
          ],
          "quantity": 15
        }
      ],
      "delivery_days": 5
    },
    {
      "order": "o2",
      "year": 2022,
      "paid": "Y",
      "cost": {
        "price": 15,
        "currency": "EUR"
      },
      "items": [
        {
          "product": "p2",
          "colours": [
            "white"
          ],
          "quantity": 4
        },
        {
          "product": "p3",
          "colours": [
            "white",
            "black"
          ],
          "quantity": 1
        }
      ],
      "delivery_days": 4
    },
    {
      "order": "o3",
      "year": 2020,
      "paid": "N",
      "cost": {
        "price": 35,
        "currency": "EUR"
      },
      "items": [
        {
          "product": "p3",
          "colours": [
            "blue",
            "black"
          ],
          "quantity": 4
        }
      ],
      "delivery_days": 4
    },
    {
      "order": "o4",
      "year": 2019,
      "paid": "Y",
      "cost": {
        "price": 18,
        "currency": "NOK"
      },
      "items": [
        {
          "product": "p2",
          "colours": [
            "pink",
            "black"
          ],
          "quantity": 14
        },
        {
          "product": "p4",
          "colours": [
            "white"
          ],
          "quantity": 1
        }
      ],
      "delivery_days": 2
    },
    {
      "order": "o5",
      "year": 2022,
      "paid": "Y",
      "cost": {
        "price": 25,
        "currency": "NOK"
      },
      "items": [
        {
          "product": "p1",
          "quantity": 15
        }
      ],
      "delivery_days": 3
    }
  ]);


//Retrieve all documents in the collection.
//db.orders.find({},{_id:0});

//Retrieve all documents that contain paid orders (the "paid" field is "Y").
//let condition = {'paid': /y/i};
//let options = {_id:0};
//db.orders.find(condition, options);

//Retrieve all documents that contain paid orders and the orders are from before 2020.
//let condition1 = {'paid': 'Y'};
//let condition2 = {'year': {$lt: 2020}};
//db.orders.find({$and: [condition1, condition2]}, {_id:0});

//Retrieve all documents that contain unpaid orders or whose orders are from before 2020.
//let condition1 = {'paid': /n/i};
//let condition2 = {'year': {$lt: 2020}};
//db.orders.find({$or: [condition1, condition2]}, {_id:0});

//Retrieve all documents that contain orders whose price is in NOK.
//db.orders.find({'cost.currency': /nok/i}, {_id:0});

//Retrieve all documents that contain orders whose price is less than 20 NOK.
//db.orders.find({$and: [{'cost.currency': /nok/i},{'cost.price': {$lt:20}}]});

//Retrieve all documents with orders that contain product "p2".
//db.orders.find({'items.product': 'p2'},{_id:0});

//Retrieve all documents with orders that contain products whose quantity is less than 15.
//db.orders.find({'items.quantity': {$lt:15}},{_id:0});

//Retrieve all documents with orders that contain products blue.
//db.orders.find({'items.colours': 'blue'});

//Retrieve order and year of all documents
//db.orders.find({},{'order':1, 'year':1, '_id':0});

//Retrieve order, year and delivery days of documents of year 2022.
//db.orders.find({'year':{$eq: 2022}},{'order':1, 'year':1, 'delivery_days':1, _id:0})
