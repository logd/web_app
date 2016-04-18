import { FlowRouter } from 'meteor/kadira:flow-router'
import React from 'react'
import { mount } from 'react-mounter'

//COMPONENTS
import AppContainer from '../containers/app_container'
import { Homepage } from './homepage'


FlowRouter.route('/', {
  name: 'homepage',
  action() {
    mount(AppContainer, {
      content: () => <Homepage />
    })
  }
})