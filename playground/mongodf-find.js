// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')

var obj = new ObjectID()
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp' , (err, db) => {
  if(err){
    return console.log('Unable to connect to mongodb server')
  }
  console.log('Connected to MongoDB server');

//   db.collection('Todos').find({
//     _id: new ObjectID('5941a0b94475c906a44d3daa')
//   }).toArray().then((docs) => {
//       console.log('Todos')
//       console.log(JSON.stringify(docs, undefined, 2))
//   }, (err) => {
//     console.log('Unable to fetch todos', error);
//   })
// })

// db.collection('Todos').find().count()
//   .then((count) => {
//     console.log(`Todos count: ${count}`)
//     console.log(JSON.stringify(docs, undefined, 2))
// }, (err) => {
//   console.log('Unable to fetch todos', error);
// })
// })

// db.collection('Users').find({name: 'Graham'})
// .count()
//   .then((count) => {
//     console.log(`Todos count: ${count}`)
//     console.log(JSON.stringify(docs, undefined, 2))
// }, (err) => {
//   console.log('Unable to fetch todos', error);
// })
// })

  db.collection('Users').find({name: 'Graham'}).toArray()
      .then((docs) => {
          console.log(JSON.stringify(docs, undefined, 2))
    })

})


// db.close()





// db.collection('Todos').insertOne({
//   text: 'Something to do',
//   completed: false
// }, (err, result) => {
//   if(err) {
//     return console.log('Unable to insert todo', err);
//   }
//
//   console.log(JSON.stringify(result.ops, undefined, 2));
// })
// db.close()
// })
