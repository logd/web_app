import { createContainer } from 'meteor/react-meteor-data'
import { NewItemHeader }  from '../forms/new_item_header'

export default createContainer(() => {
 
  return {
    currentView: "foo"
  }


}, NewItemHeader)
