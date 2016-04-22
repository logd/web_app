import { FlowRouter } from 'meteor/kadira:flow-router'
import React from 'react'
import { mount } from 'react-mounter'

//COMPONENTS
import AppContainer from '../containers/app_container'
// import { Homepage } from './homepage'
import NotesListContainer from '../containers/notes_list_container'
import NoteContentContainer from '../containers/note_content_container'


FlowRouter.route('/', {
  name: 'homepage',
  action() {
    mount(AppContainer, {
      content: () => <NotesListContainer />
    })
  }
})

FlowRouter.route('/notes/:_id', {
  name: 'noteDetail',
  action(params) {
    mount(AppContainer, {
      content: () => <NoteContentContainer id={params._id} />
    })
  }
})