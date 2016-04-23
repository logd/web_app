import { createContainer } from 'meteor/react-meteor-data'
import { NewItemHeader }  from '../forms/new_item_header'

export default createContainer(() => {
    //TODO - pass in user data into this container
	const handleCreateNote = (title) => {

    // TODO: add check for empty and move this to the container
    // I think this entire page is unneded, can just be handled in the container if (AppLib.str.isEmpty(title)) { return }
  
    Meteor.call('/note/create', title, (err, result) => {
      if (!err) {
        // if (Meteor.isClient) {
        //  Session.set("newNote", true) 
        // }
        // FlowRouter.go("noteDetail", {_id: result._id})
        // console.log('note: ' + result._id)
      } else {
        // note.catchValidationException(err)
        console.log('there was an error: ' + err.reason)
      }
    })
  }
 
  return {
    handleCreateNote
  }


}, NewItemHeader)
