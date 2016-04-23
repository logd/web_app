import React from 'react'
import autoBind from 'react-autobind'
import { AppHeaderLayout } from '../layouts/app_header_layout'
import { IconBtn } from '../buttons/icon_btn'


export class NewItemHeader extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      showNewItemForm: false
    }
    autoBind(this)
  }

  showUserMenu(){
   // if(this.data.signedIn){
   //   const menu = <ul className='menu-list'>
   //     <li>{this.data.currentUser.profile.firstName}</li>
   //     <li><a href="/logout">Sign Out</a></li>
   //    </ul>

   //  return <OptionsMenu menu={menu} />
   // }
  
   //  return null
  }


  showNewNoteBtn(){
    // return this.state.showNewNoteForm? 
    //   <button className="icon-btn btn-small" alt="Cancel new note" title="Cancel new note"><i className="material-icons">clear</i></button>
    // :
    //   <IconBtn handleClick={this.toggleNewNoteForm} title="New Note" icon="add" />
  } 
 
  showNewNoteForm(){
    // return this.state.showNewNoteForm?
    //   <SingleFieldSubmit placeholder="New Note..." handleInput={this.handleCreateNote} maxLength={AppLib.notes.title.maxLength} handleOnBlur={this.cancelNewNote} />
    // :
    //   <PageTitle pageTitle={this.setNotesListTitle()} />
  } 

  // toggleNewNoteForm(){
  //   this.setState({ showNewNoteForm: !this.state.showNewNoteForm })
  // } 

  // cancelNewNote(){
  //   this.setState({ showNewNoteForm: false })
  // }

  // handleCreateNote(title) {

  //   if (AppLib.str.isEmpty(title)) { return }
  
  //   Meteor.call('/note/create', title, (err, result) => {
  //     if (!err) {
  //       if (Meteor.isClient) {
  //        Session.set("newNote", true) 
  //       }
  //       FlowRouter.go("noteDetail", {_id: result._id})  
  //     } else {
  //       note.catchValidationException(err)
  //       console.log('there was an error: ' + err.reason)
  //     }
  //   })
  // }


  render() {

    return <AppHeaderLayout />
      
  }
}