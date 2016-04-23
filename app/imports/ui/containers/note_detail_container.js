import { createContainer } from 'meteor/react-meteor-data'
import { Meteor } from 'meteor/meteor'
// import { Tracker } from 'meteor/tracker'
import { Notes } from '../../api/notes/notes'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { EditableTitleHeader } from '../forms/editable_title_header'
import { NoteContent } from '../pages/note_content'

//NEXT: Get route data from AppContainer and pass it down

const handleUpdates = (field, value) => {
	const params = {}
	params[field] = value

	if (subReady()) {
		note.set(params)
		Meteor.call('/note/save', note, (err, result) => {
		  if (err) {
			  note.catchValidationException(err)
			  console.log('there was an error: ' + err.reason)
		  }
	  })
	}
}

const noteContainer = (layout) => createContainer((props) => {

	const
	  subscription = Meteor.subscribe('notes.detail', props.id),
	  subReady = subscription.ready(),
	  note = subReady? Notes.findOne({ _id: props.id }) : null

	  return {
	  	subReady: subscription.ready(),
	    note: note,
	    handleUpdates
	  }
	}, layout)

export const NoteTitleContainer = noteContainer(EditableTitleHeader)
export const NoteContentContainer = noteContainer(NoteContent)


// export const NoteTitleContainer = createContainer((props) => {
//    id    = props.id,
//    route = FlowRouter.getRouteName(),
//    note = () => subReady(id, route)? Notes.findOne({ _id: id }) : null

//   return {
//     handleUpdates
//   }
// }, EditableTitleHeader)


// export const NoteContentContainer = createContainer((props) => {
// 	   id    = props.id,
//    route = FlowRouter.getRouteName(),
//    note = () => subReady(id, route)? Notes.findOne({ _id: id }) : null


//   return {
//   	subReady: subReady(),
//     note: note,
//     handleUpdates
//   }
// }, NoteContent)






