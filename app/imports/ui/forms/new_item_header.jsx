import React from 'react'
import autoBind from 'react-autobind'
import { AppHeaderLayout } from '../layouts/app_header_layout'
import { IconBtn } from '../buttons/icon_btn'


export class NewItemHeader extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      addingItem: false
    }
    autoBind(this)
  }

  //TOGGLE STATE
  toggleAddingItem(){
    this.setState({ addingItem: !this.state.addingItem })
  }

  //HEADER LEFT
  addItemBtn(){
    let icon, title;

    if(this.state.addingItem){
      icon="clear"
      title="Cancel"
    } else {
      icon="add"
      title="Add Note"
    }

    return <IconBtn
            icon={icon}
            title={title}
            handleClick={this.toggleAddingItem}
           />
  }

  //HEADER CENTER

  showNewNoteForm(){
    // return this.state.showNewNoteForm?
    //   <SingleFieldSubmit placeholder="New Note..." handleInput={this.handleCreateNote} maxLength={AppLib.notes.title.maxLength} handleOnBlur={this.cancelNewNote} />
    // :
    //   <PageTitle pageTitle={this.setNotesListTitle()} />
  }

    showUserMenu(name){
   // if(this.data.signedIn){
   //   const menu = <ul className='menu-list'>
   //     <li>{this.data.currentUser.profile.firstName}</li>
   //     <li><a href="/logout">Sign Out</a></li>
   //    </ul>

   //  return <OptionsMenu menu={menu} />
   // }
  
   //  return null
  }


  render() {

    return <AppHeaderLayout headerLeft={this.addItemBtn()} />
      
  }
}


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


    // return this.state.showForm? 
    //   <IconBtn handleClick={this.toggleNewItemForm} title="Cancel adding new note" icon="clear" />
    // :
    //   <IconBtn handleClick={this.toggleNewItemForm} title="New Note" icon="add" />