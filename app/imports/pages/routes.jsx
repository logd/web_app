import { FlowRouter } from 'meteor/kadira:flow-router'
import React from 'react'
import { mount } from 'react-mounter'

//COMPONENTS
import AppContainer from '../containers/app_container'
import { Homepage } from './homepage'
import NoteDetailContainer from '../containers/note_detail_container'


FlowRouter.route('/', {
  name: 'homepage',
  action() {
    mount(AppContainer, {
      content: () => <Homepage />
    })
  }
})

FlowRouter.route('/notes/:_id', {
  name: 'noteDetail',
  action(params) {
    mount(AppContainer, {
      content: () => <NoteDetailContainer id={params._id} />
    })
  }
})