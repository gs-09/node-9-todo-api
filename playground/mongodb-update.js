// const MongoClient = require('mongodb').MongoClient;
const{MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to mongodb server');
    }

    const db = client.db('TodoApp');
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5bc4a0f1957beedb80304d81')
    // },{
    //     $set : {
    //         completed: true
    //     }
    // },{
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log('Unable to update the document', err);
    // });

    db.collection('Users').findOneAndUpdate({
        name: 'Amarjit singh'
    },{
        $set : {
            name: 'Amarjeet Singh'
        },
        $inc: {
            age: 1
        }
    },{
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    }, err => {
        console.log('Unable to update the document', err);
    });
});