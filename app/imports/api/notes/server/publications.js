import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check'
import { Notes } from '../notes'

const
  notesListFields = {
    title: 1,
    updatedAt: 1
  },
  noteDetailFields = {
  	title: 1,
    content: 1
  }

Meteor.publish('notes.all', function() {
  return Notes.find({}, { fields: notesListFields})
})

Meteor.publish('notes.detail', function(id) {
	check(id, String)

  return Notes.find({_id: id }, { fields: noteDetailFields })
})
