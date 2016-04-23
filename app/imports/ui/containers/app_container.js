// import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import { AppLayout }  from '../layouts/app_layout'

export default createContainer(() => {
 
  return {
    currentUser: "foo",
    routeName: "bar"
  }

}, AppLayout)
