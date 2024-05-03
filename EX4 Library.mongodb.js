use('miguelcm');

db.library.drop();
db.createCollection('library');

db.library.insertMany([

            {
              "_id": 1,
              "title": "TCP/IP Illustrated",
              "author": {
                "surname": "Stevens",
                "name": "W."
              },
              "publisher": "Addison-Wesley",
              "price": 65.95
            },
            {
              "_id": 2,
              "title": "Advan Programming for Unix environment",
              "author": {
                "surname": "Stevens",
                "name": "W."
              },
              "publisher": "Addison-Wesley",
              "price": 65.95
            },
            {
              "_id": 3,
              "title": "Data on the Web",
              "author": [
                {
                  "surname": "Abiteboul",
                  "name": "Serge"
                },
                {
                  "surname": "Buneman",
                  "name": "Peter"
                },
                {
                  "surname": "Suciu",
                  "name": "Dan"
                }
              ],
              "publisher": "Morgan Kaufmann publishers",
              "price": 39.95
            },
            {
              "_id": 4,
              "title": "Economics of Technology for Digital TV",
              "editor": {
                "surname": "Gerbarg",
                "name": "Darcy",
                "membership": "CITI"
              },
              "publisher": "Kluwer Academic publishers",
              "price": 129.95
            }
          ]);


//db.library.find({});

//Search the titles of books whose author surname is 'Stevens'.
//let stevens = {'author.surname': 'Stevens'};
//db.library.find(stevens, {'title': 1, '_id': 0});

//Search the books whose price is greater than 20 euros.
//db.library.find({'price': {$gt: 20}});

//Search the books whose title contains the word Web.
//db.library.find({'title': /Web/});

//Search the books whose title contains the word Web or the word TV.
//db.library.find({$or: [{'title': /Web/}, {'title': /TV/}]});
//db.library.find({$or: [{'title': {$regex: /web/i} }, {'title':{ $regex: /tv/i} }]});

//Search the books whose title contains the word Web or the word TV (case insensitive)
//db.library.find({$or: [{'title': /Web/i}, {'title': /TV/i}]});

//Search the books whose title length is greater than 20 characters
//db.library.find({$where : 'this.title.length > 20'});
//db.library.find({$expr: {$gt: [{$strLenCP: '$title'}, 20]}});

//Search the books whose price is 39.95, 65.95 or 80.95
//db.library.find({$or: [{'price':{$eq: 39.95} },{'price':{$eq: 65.95}},{'price':{$eq: 80.95}}]});
//db.library.find({'price': {$in: [39.95, 65.95, 80.95]}})
