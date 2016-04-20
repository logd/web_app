import { createContainer } from 'meteor/react-meteor-data'
import { Meteor } from 'meteor/meteor'
import { Notes } from '../api/notes/notes'
import { NoteDetail } from '../pages/note_detail'

export default createContainer((props) => {

	const
	  id = props.id,
	  subscription = Meteor.subscribe('notes.detail', id)

  return {
    subsReady: subscription.ready(),
    note: Notes.findOne({_id: id })
  }

}, NoteDetail)
