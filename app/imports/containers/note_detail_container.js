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
		// console.log("field: ", )
		// const noteFields = {}
		// 
		// noteFields[field] = value
		// note.set(noteFields)

		Meteor.call('/note/update/content', value, (err, result) => {
			if (err) {
				note.catchValidationException(err)
				console.log('there was an error: ' + err.reason)
			}
		})
	}

  return {
    subsReady: subscription.ready(),
    note: Notes.findOne({_id: id }),
    handleUpdates: handleUpdates
  }

}, DetailView)

// handleUpdates(field, value){
	// const
	// 	note = this.data.note,
	// 	noteFields = {}
	//
	// noteFields[field] = value
	// note.set(noteFields)
	//
	// Meteor.call('/note/save', note, (err, result) => {
	// 	if (err) {
	// 		note.catchValidationException(err)
	// 		console.log('there was an error: ' + err.reason)
	// 	}
	// })
// }
