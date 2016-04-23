import React from 'react'
import { FlowRouter } from 'meteor/kadira:flow-router'

export const List = (props) => {
  return	<ul className="item-list">
    {
      props.collection.map((item, index) => {
      	const path = FlowRouter.path( "noteDetail" , {_id: item._id})
      	
        return <li key={index} className="list-group-item"><a href={path}>{item.title}</a></li>
      })
    }
  </ul>
}

List.propTypes = {
  collection: React.PropTypes.array.isRequired
}

