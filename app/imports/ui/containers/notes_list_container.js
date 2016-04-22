import { createContainer } from 'meteor/react-meteor-data'
import { Meteor } from 'meteor/meteor'
import { Notes } from '../../api/notes/notes'
import { List }  from '../lists/list'

export default createContainer(() => {

	Meteor.subscribe('notes.all')

	const handleCreateNote = (title) => {

    // TODO: add check for empty and move this to the container
    // I think this entire page is unneded, can just be handled in the container if (AppLib.str.isEmpty(title)) { return }
  
    Meteor.call('/note/create', title, (err, result) => {
      if (!err) {
        // if (Meteor.isClient) {
        //  Session.set("newNote", true) 
        // }
        // FlowRouter.go("noteDetail", {_id: result._id})  
      } else {
        // note.catchValidationException(err)
        console.log('there was an error: ' + err.reason)
      }
    })
  }

  return {
    collection: Notes.find({}, {sort: { updatedAt: -1 }}).fetch(),
    handleCreateNote: handleCreateNote
  }

}, List)
