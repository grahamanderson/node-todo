// var obj = {
//   name: 'Graham'
// }
// var stringObj = JSON.stringify(obj)
// console.log(typeof stringObj)
// console.log(stringObj)
//
//
// var personString = '{"name":"Andrew", "age": 25}'
// var person = JSON.parse(personString)
// console.log(typeof person)
// console.log(person)

const fs = require('fs')
var path = require('path');

var originalNote = {
  title: 'Some title',
  body: 'My own body'
}

var originalNoteString = JSON.stringify(originalNote)
fs.writeFileSync('playground/notes.json', originalNoteString)

var noteString = JSON.parse(
  fs.readFileSync('playground/notes.json')
)
console.log(typeof noteString, noteString)



//originalNoteString
