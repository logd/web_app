import { Mongo } from 'meteor/mongo'
import { Meteor } from 'meteor/meteor'
// import { Astro } from 'meteor/jagi:astronomy'

export const Notes = new Mongo.Collection('notes')

export const NoteSchema = Astro.Class({
	name: 'Note',
	collection: Notes,
	fields: {
    title: {
      type: 'string',
      validator:Validators.and(
        [
          Validators.required(),
          Validators.string()
        ]
      )
    },
    content: {
      type: 'string',
      default: "",
      validator: Validators.and(
        [
          Validators.string()
        ]
      )
    },
    updatedAt: {
      type: 'date',
      validator: Validators.date()
    }
    // ownerId: {
    //   type: 'string' //owner id is not validated because it is never published/sent to the client (and the object returned from the client is what is validated, meaning it would return null)
    // },
  }
})

// ownerId: Meteor.userId(),
// Validators.maxLength(AppLib.notes.content.maxLength),
// Validators.maxLength(AppLib.notes.title.maxLength),

 Meteor.methods({

	'/note/create': (title) => {
		const note = new NoteSchema()
    note.set({
      title: title,
   // ownerId: Meteor.userId(),
      updatedAt: new Date()
    })

    if (note.validate()) {
      note.save()
      return note
    }
    note.throwValidationException()
  },

	  '/note/update/content': (noteParams) => {
			const note = Notes.findOne({_id: noteParams.id })

			note.set({
				content: noteParams.content,
				updatedAt: new Date()
			})
	    if (note.validate()) {
	      note.save()
	      return
	    }
	    note.throwValidationException()
	  },

  '/note/save': (noteFields) => {
		{
			title: "value"
		}
		note.set({
			title: noteFields.title,
	 // ownerId: Meteor.userId(),
			updatedAt: new Date()
		})
    if (note.validate()) {
      note.save()
      return
    }
    note.throwValidationException()
  },

  '/note/delete': (id) => Notes.remove({_id: id})

})
