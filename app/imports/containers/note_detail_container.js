import { createContainer } from 'meteor/react-meteor-data'
import { Meteor } from 'meteor/meteor'
import { Notes } from '../api/notes/notes'
import { DetailView } from '../ui/layouts/detail_view'

export default createContainer((props) => {

	const
	  id = props.id,
	  subscription = Meteor.subscribe('notes.detail', id),
	  handleUpdates = () => { }

  return {
    subsReady: subscription.ready(),
    note: Notes.findOne({_id: id }),
    handleUpdates: handleUpdates
  }

}, DetailView)
