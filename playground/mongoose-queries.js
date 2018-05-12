const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

// var id = '5af6b41ebaf22f17eeed85d3';
//
// if (!ObjectID.isValid(id)) return console.log('ID is not valid!');

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log("Todo not found");
//     }
//     console.log('Todo', todo);
// }).catch((e) => console.log(e));


// 5af69f889775e7dee9544988