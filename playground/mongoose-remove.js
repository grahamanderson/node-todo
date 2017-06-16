const {ObjectID} = require('mongodb')
const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/Todo')
const {User} = require('./../server/models/User')

// Todo.remove({}).then((result) => {
//   console.log(result);
// })

// Todo.findOneAndRemove

Todo.findByIdAndRemove('594450fccface0cb2d27a117').then((todo) => {
  console.log(todo);
})


Todo.findOneAndRemove({_id:'594450fccface0cb2d27a117'}).then((todo) => {
  console.log(todo);
})
