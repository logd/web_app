import React from 'react'

export const List = (props) => {
  return	<ul className="item-list">
    {
      props.collection.map((item, index) => {
        return <li key={index} className="list-group-item">{item.title}</li>
      })
    }
  </ul>
}

List.propTypes = {
  collection: React.PropTypes.array.isRequired
}