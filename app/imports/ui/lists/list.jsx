import React from 'react'
// import _ from 'lodash'

// const displayListItems = (item) => <li key={item._id} className="list-group-item">{item.title}</li>


// export const List = (props) =>
//   <ul className="item-list">
//     _.each(props.collection, displayListItems(item))
//   </ul>

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

      // props.items.map((item, index) => {
      //   //TODO: set path as a prop
      //   const path = FlowRouter.path( "noteDetail" , {_id: item._id})
        
      //   return <li key={index} className="list-group-item">
      //           <div className="item-list-main-content">
      //              <a href={path}>{item.title}</a>
      //           </div>
      //           {showDeleteBtn(item)}
      //           </li>
      // })