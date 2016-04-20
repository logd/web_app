import { createContainer } from 'meteor/react-meteor-data'
import { Meteor } from 'meteor/meteor'
import { Notes } from '../api/notes/notes'
import { List }  from '../ui/lists/list'

export default createContainer(() => {

	Meteor.subscribe('notes.all')

  return {
    collection: Notes.find({}, {sort: { updatedAt: -1 }}).fetch()
  }

}, List)
