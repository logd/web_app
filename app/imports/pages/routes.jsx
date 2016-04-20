import { FlowRouter } from 'meteor/kadira:flow-router'
import React from 'react'
import { mount } from 'react-mounter'

//COMPONENTS
import AppContainer from '../containers/app_container'
import { Homepage } from './homepage'
import { NoteDetail } from './note_detail'


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
      content: () => <NoteDetail id={params._id} />
    })
  }
})