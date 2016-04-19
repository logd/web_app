// import { Notes } from './notes'
// import { NoteSchema } from './schema'
// import { Meteor } from 'meteor/meteor'

// Meteor.methods({

// 	'/note/create': (title) => { 
		
// 		const note = new NoteSchema()
//     note.set({
//       title: title,
//       ownerId: Meteor.userId(),
//       updatedAt: new Date()
//     })

//     if (note.validate()) {
      
//       note.save()
//       return note
//     }
//     note.throwValidationException()
//   },

//   '/note/save': (note) => { 
//     if (note.validate()) {
//       note.save()
//       return note
//     }
//     note.throwValidationException()
//   },

//   '/note/delete': (id) => Notes.remove({_id: id})

// })
