//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    db.collection('Todos').insertOne({
        text: 'Something to do',
        completed: false
    }, (err, results) => {
        if (err) {
            return console.log('Unable to insert todo', err);
        }

        console.log(JSON.stringify(results.ops, undefined, 2));
    });

    db.collection('Users').insertOne({
        name: 'Alex',
        age: 37,
        location: 'Vilnius'
    }, (err, results) => {
        if (err) {
            return console.log('Unable to insert user', err);
        }

        console.log(JSON.stringify(results.ops, undefined, 2));
    });

    client.close();
});