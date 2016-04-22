import { createContainer } from 'meteor/react-meteor-data'
import { Meteor } from 'meteor/meteor'
import { Notes } from '../api/notes/notes'
import { DetailView } from '../pages/detail_view'

export default createContainer((props) => {

	const
	  id = props.id,
		subscription = Meteor.subscribe('notes.detail', id),
		note = subscription.ready()? Notes.findOne({ _id: id }) : null

	const handleUpdates = (field, value) => {
		const params = {}
		params[field] = value

		if (subscription.ready()) {
			note.set(params)

			Meteor.call('/note/save', note, (err, result) => {
			  if (err) {
				  note.catchValidationException(err)
				  console.log('there was an error: ' + err.reason)
			  }
		  })
		}
	}

  return {
    subsReady: subscription.ready(),
    note: note,
    handleUpdates: handleUpdates
  }

}, DetailView)
