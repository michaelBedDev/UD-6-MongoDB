use('miguelcm');

db.movies.drop();
db.createCollection("movies");

db.movies.insertMany([
    {
        'title': 'Fight Club',
        'writer': 'Chuck Palahniuk',
        'year': 1999,
        'actors': [
            'Brad Pitt',
            'Edward Norton'
        ]
    },

    {
        'title': 'Mr. & Mrs. Smith',
        'writer': 'Simon Kinberg',
        'year': 2005,
        'actors': [
            'Brad Pitt',
            'Angelina Jolie'
        ]
    },
    {
        'title': 'Pulp Fiction',
        'writer': 'Quentin Tarantino',
        'year': 1994,
        'actors': [
            'John Travolta',
            'Uma Thurman',
            'Samuel L. Jackson'
        ]
    },
    {
        'title': 'The Fellowship of the Ring',
        'writer': 'J .R .R. Tolkien',
        'year': 2001,
        'franchise': 'The Lord of the Rings'
    },
    {
        'title': 'The Two Towers',
        'writer': 'J .R .R. Tolkien',
        'year': 2002,
        'franchise': 'The Lord of the Rings'
    },
    {
        'title': 'The Return of the King',
        'writer': 'J .R .R. Tolkien',
        'year': 2003,
        'franchise': 'The Lord of the Rings'
    },
    {
        'title': 'The Man Who Shot Liberty Valance',
    },
    {
        'title': 'The Avengers: Endgame',
    },

]);

//Get all documents
//db.movies.find({},{_id:0});

//Get all documents with writer set to "J.R.R. Tolkien"
//db.movies.find({writer: 'J .R .R. Tolkien'},{_id:0});

//Get all documents where actors include "Brad Pitt"
//db.movies.find({'actors': 'Brad Pitt'}, { _id: 0 });

//Get all documents with franchise set to "The Lord of the Rings"
//db.movies.find({'franchise' : 'The Lord of the Rings'},{_id:0});

//Get all movies released in the 90s
//db.movies.find({'year': {$gte: 1990, $lt: 2000}},{_id:0});

//Get all movies released before the year 2000 or after 2010
//db.movies.find({ $or: [{year:{$lt: 2000}}, {year:{$gt: 2010}}]},{_id:0});
