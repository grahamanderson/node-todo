// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')


MongoClient.connect('mongodb://localhost:27017/TodoApp' , (err, db) => {
  if(err){
    return console.log('Unable to connect to mongodb server')
  }
  console.log('Connected to MongoDB server');

  // Delete Many
  // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
  //   console.log(result)
  // })

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
  //   console.log(result)
  // })

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result)
  // })

  // db.collection('Users').deleteMany({name: 'Graham'})
  //   .then((result) => {
  //       console.log(result)
  // })

  db.collection('Users').findOneAndDelete({
    _id: ObjectID("5941a58e9fe4510cf3d0eebb")})
    .then((result) => {
        console.log(JSON.stringify(result,undefined,2))
  })


  // db.close()
})
