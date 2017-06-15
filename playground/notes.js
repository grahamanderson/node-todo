// console.log('starting notes')
//
// var addNote = (title, body) => {
//   var notes = []
//   var note=
// }

const fs = require('fs')

var notes = [ {"title":"horse"},
              {"title": "chicken"},
              {"title" : "bird"},
              {"title" : "cow"},
              {"title": "cat"},
              {"title" : "bird"}
            ]

var addNote = (title) => {
  var note = {title}


  var duplicateNotes = notes.filter((note) => note.title === title)
  console.log('duplicateNotes',duplicateNotes)
  //notes.push(note)
}

addNote('bird')


// if (duplicatesNotes.length === 0) {
//   notes.push(note)
//   fs.writeFileSync('notes-data.json', JSON.stringify(notes))
// }

// console.log(duplicateNotes.len)
