import { FlowRouter } from 'meteor/kadira:flow-router'
import React from 'react'
import { mount } from 'react-mounter'

//COMPONENTS
import AppContainer from '../containers/app_container'
import { NewNoteContainer } from '../containers/new_note_container'
import NotesListContainer from '../containers/notes_list_container'
import { NoteTitleContainer, NoteContentContainer } from '../containers/note_detail_container'


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
  action() {
    mount(AppContainer, {
      header: () => <NoteTitleContainer />,
      content: () => <NoteContentContainer />
    })
  }
})


// How to pass through a param into a component
// FlowRouter.route('/notes/:_id', {
//   name: 'noteDetail',
//   action(params) {
//     mount(AppContainer, {
//       header: () => <NoteTitleContainer id={params._id} />,
//       content: () => <NoteContentContainer  id={params._id} />
//     })
//   }
// })
// then...
// export const NoteTitleContainer = createContainer((props) => {
//   const id = props.id

//   return {
//     handleUpdates
//   }
// }, EditableTitleHeader)