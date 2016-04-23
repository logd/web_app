import { FlowRouter } from 'meteor/kadira:flow-router'
import React from 'react'
import { mount } from 'react-mounter'

//COMPONENTS
import AppContainer from '../containers/app_container'
import NewNoteContainer from '../containers/new_note_container'
import NotesListContainer from '../containers/notes_list_container'
import NoteContentContainer from '../containers/note_content_container'


FlowRouter.route('/', {
  name: 'homepage',
  action() {
    mount(AppContainer, {
      header: () => <NewNoteContainer />,
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