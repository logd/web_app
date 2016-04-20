import { Meteor } from 'meteor/meteor'
import { Notes } from '../notes'

const publishedFields = {
  title: 1,
  updatedAt: 1
}

Meteor.publish('notes.all', function privateNotes() {
  return Notes.find({}, { fields: publishedFields})
})
