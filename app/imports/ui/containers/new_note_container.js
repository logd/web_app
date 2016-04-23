import { createContainer } from 'meteor/react-meteor-data'
import { FlowRouter } from 'meteor/kadira:flow-router'
import { NewItemHeader }  from '../forms/new_item_header'

const handleCreateNote = (title) => {

  // TODO: add check for empty and move this to the container  
  Meteor.call('/note/create', title, (err, result) => {
    if (!err) {
      // if (Meteor.isClient) {
      //  Session.set("newNote", true) 
      // }
      FlowRouter.go("noteDetail", {_id: result._id})
      // console.log('note: ' + result._id)
    } else {
      // note.catchValidationException(err)
      console.log('there was an error: ' + err.reason)
    }
  })
}

export const NewNoteContainer = createContainer(() => {
  return {
    handleCreateNote
  }
}, NewItemHeader)

