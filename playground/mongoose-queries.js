const {ObjectID} = require('mongodb')
const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/Todo')
const {User} = require('./../server/models/User')


// var id = '59442b684a8d10fb0f200085'
//
// if(!ObjectID.isValid(id)){
//   console.log('ID not valid')
// }


// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// })


// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todos', todo);
// })

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Id not found')
//   }
//   console.log('Todos', todo);
// }).catch((e) => console.log(e))


//User.findById: 5942ecf716ec57a05a8bf2b8
var id = '5942ecf716ec57a05a8bf2b8'
User.findById(id).then((user) => {
  if(!user){
    return console.log('ID not found');
  }
  console.log(JSON.stringify(user, undefined, 2))
}).catch((e) => console.log(e))
