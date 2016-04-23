//TODO: this seems identical to new_item_header

import React from 'react'
import autoBind from 'react-autobind'
import { AppHeaderLayout } from '../layouts/app_header_layout'
import { IconBtn } from '../buttons/icon_btn'
import { PageTitle } from '../content/page_title'

export class EditableTitleHeader extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      editingTitle: false
    }
    autoBind(this)
  }

  //TOGGLE STATE
  toggleEditingTitle(){
    this.setState({ editingTitle: !this.state.editingTitle })
  }

  //HEADER LEFT
  // addItemBtn(){
  //   let icon, title;

  //   if(this.state.addingItem){
  //     icon="clear"
  //     title="Cancel"
  //   } else {
  //     icon="add"
  //     title="Add Note"
  //   }

  //   return <IconBtn
  //           icon={icon}
  //           title={title}
  //           handleClick={this.toggleAddingItem}
  //          />
  // }

  //HEADER CENTER
  // toggleForm(){
  //   return this.state.addingItem?
  //     <SingleFieldSubmit
  //      placeholder="New Note..."
  //      handleSubmit={this.props.handleCreateNote}
  //      handleOnBlur={this.toggleAddingItem} />
  //   :
  //     <PageTitle />
  // }

  render() {

    return <AppHeaderLayout
             // headerLeft={this.addItemBtn()}
             // headerCenter={this.toggleForm()}
           />
      
  }
}

    // showUserMenu(name){
   // if(this.data.signedIn){
   //   const menu = <ul className='menu-list'>
   //     <li>{this.data.currentUser.profile.firstName}</li>
   //     <li><a href="/logout">Sign Out</a></li>
   //    </ul>

   //  return <OptionsMenu menu={menu} />
   // }  
   //  return null
  // }