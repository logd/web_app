import React from 'react'
import autoBind from 'react-autobind'
import '../api/notes/notes'
import { SingleFieldSubmit } from '../ui/inputs/single_field_submit'
import NotesListContainer from '../containers/notes_list_container'

export class Homepage extends React.Component {
  constructor(props){
    super(props)
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

    return <div className="app-container">
      <SingleFieldSubmit placeholder="New Note..." handleSubmit={this.handleCreateNote} />
      <div>
        <NotesListContainer />
      </div>
    </div>     
  }
}