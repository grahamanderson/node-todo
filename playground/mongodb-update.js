// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')


MongoClient.connect('mongodb://localhost:27017/TodoApp' , (err, db) => {
  if(err){
    return console.log('Unable to connect to mongodb server')
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5941a0b94475c906a44d3daa')
  // }, {
  //   $set: {
  //     completed: false
  //   }
  // }, {
  //     returnOriginal: false
  // }).then((result) => {
  //     console.log(result);
  // })

    db.collection('Users').findOneAndUpdate({
      name: 'Jen'
    }, {
      $set:
      {
        name: 'Graham'
      }
    },{
      $inc:{
        age: 1
      }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    })




  // db.close()
})
