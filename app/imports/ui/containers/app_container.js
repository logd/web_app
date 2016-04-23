// import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import { AppLayout }  from '../layouts/app_layout'
import { FlowRouter }  from 'meteor/kadira:flow-router'


export default createContainer(() => {
 const routeName = FlowRouter.getRouteName()

  return {
    routeName
  }

}, AppLayout)
