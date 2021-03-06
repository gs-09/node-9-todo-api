var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');

var {User} = require('./models/user');
var {Todo} = require('./models/todo');

var app = express();
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc) => {
        res.send(doc);
    }, err => {
        res.status(400).send(doc);
    });
});


app.listen(3000, () => {
    console.log('Started on port 3000');
});
// var newTodo = new Todo({text: 'Cook Dinner'});

// newTodo.save().then((doc) => {
//     console.log('Saved todo', doc)
// }, err => {
//     console.log('Unable to save todo');
// });

// var otherTodo = new Todo({
//     text: '   Edit this video  '
// });

// otherTodo.save().then((doc) => {
//     console.log(JSON.stringify(doc), undefined, 2);
// }, err => {
//     console.log('Unable to save other todo', err);
// })

// var User = mongoose.model('User', {
//     email : {
//         type: String,
//         required: true,
//         minlength: 1,
//         trim: true
//     }
// });

// var user = new User({email: 'gurpreet@gmail.com'});

// user.save().then((doc) => {
//     console.log(JSON.stringify(doc), undefined, 2);
// }, err => {
//     console.log('Unable to fetch the data', err);
// });