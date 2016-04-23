import { createContainer } from 'meteor/react-meteor-data'
import { Meteor } from 'meteor/meteor'
import { Notes } from '../../api/notes/notes'
import { List }  from '../lists/list'

const sub = Meteor.subscribe('notes.all')

export default createContainer(() => {

  return {
    collection: Notes.find({}, {sort: { updatedAt: -1 }}).fetch()
  }

}, List)
