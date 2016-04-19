import React from 'react'
import autoBind from 'react-autobind'
// import { Meteor } from 'meteor/meteor'
import '../api/notes/notes'

// import { Session } from 'meteor/session'
// import { FlowRouter } from 'meteor/kadira:flow-router'
import { SingleFieldSubmit } from '../ui/inputs/single_field_submit'

export class Homepage extends React.Component {
  constructor(props){
    super(props)
    // this.state = {
    //   showNewNoteForm: false
    // }
    autoBind(this)
  }
  handleCreateNote(title) {

    // if (AppLib.str.isEmpty(title)) { return }
  
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

  render() {

    return <div className="app-container"><SingleFieldSubmit placeholder="New Note..." handleSubmit={this.handleCreateNote} /></div>
      
  }
}

   // <SingleFieldSubmit placeholder="New Note..." handleInput={this.handleCreateNote} maxLength={AppLib.notes.title.maxLength} handleOnBlur={this.cancelNewNote} />