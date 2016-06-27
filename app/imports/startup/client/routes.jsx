import { FlowRouter } from 'meteor/kadira:flow-router'
import React from 'react'
import { mount } from 'react-mounter'

//COMPONENTS
import AppContainer from '../../ui/containers/app_container'
import { NewNoteContainer } from '../../ui/containers/new_note_container'
import NotesListContainer from '../../ui/containers/notes_list_container'
import { NoteTitleContainer, NoteContentContainer } from '../../ui/containers/note_detail_container'


function redirectIfAnonymous(context, redirect) {
  if(!Meteor.userId() || Meteor.loggingIn()){
    // console.log("context path: ", context.path)
    Session.set("requestedPage", context.path)
    Session.set("loginRedirect", true)
    // Session.set("requestedPage", context.path)
    redirect('login')
  }
}
function redirectIfSignedIn(context, redirect) {
  if (Meteor.userId()) {
    //console.log("already signed in")
    redirect('homepage') 
  }
}


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
      header: (props) => <NoteTitleContainer id={params._id} {...props} />,
      content: (props) => <NoteContentContainer id={params._id} {...props} />
    })
  }
})

FlowRouter.route('/login', {
  name: 'login',
  triggersEnter: [redirectIfSignedIn],
  action() {
    mount(MainLayout, {
      content: () => <Login />
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