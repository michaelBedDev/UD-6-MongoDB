use('miguelcm')

db.dances.drop();
db.createCollection('dances');

db.dances.insertMany([
    {
        "name": "Tango",
        "price": 27,
        "places": 20,
        "start_date": "1/01/2022",
        "end_date": "1/12/2022",
        "teacher": "Roberto Garcia",
        "hall": 1
      },
      {
        "name": "Cha-cha-cha",
        "price": 80,
        "places": 18,
        "start_date": "1/07/2022",
        "end_date": "1/10/2022",
        "teacher": "Miriam Gutiérrez",
        "hall": 1
      },
      {
        "name": "Rock",
        "price": 30,
        "places": 15,
        "start_date": "1/01/2022",
        "end_date": "1/12/2022",
        "teacher": "Laura Mendiola",
        "hall": 1
      },
      {
        "name": "Merengue",
        "price": 75,
        "places": 12,
        "start_date": "1/01/2022",
        "end_date": "1/12/2022",
        "teacher": "Jesús Lozano",
        "hall": 2
      },
      {
        "name": "Salsa",
        "price": 32,
        "places": 10,
        "start_date": "1/01/2022",
        "end_date": "1/12/2022",
        "teacher": "Jesús Lozano",
        "hall": 2
      },
      {
        "name": "Pasodoble",
        "price": 3200,
        "places": 8,
        "start_date": "1/01/2022",
        "end_date": "1/12/2022",
        "teacher": "Miriam Gutierrez",
        "hall": 2
      }
]);



//Show the name of all dances
//db.dances.distinct('name');

//Display the name of all dances where the price is greater than 40
//let condition = {'price' : {$gt: 40}};
//let options = {'name':1, '_id':0};
//db.dances.find(condition, options);

//Display the dances sorted by name
//db.dances.find({}).sort({'name':1});

//Show all information about the dance called Pasodoble
//let condition = {'name': /pasodoble/i};
//db.dances.find(condition, {_id:0});

//Show the name of the dances where the teacher's surname is Lozano
//let condition = {'teacher': /lozano/i};
//let options = {'name':1, '_id':0};
//db.dances.find(condition, options);

//Show the first 3 dances of the collection
//db.dances.find({},{_id:0}).limit(3);
