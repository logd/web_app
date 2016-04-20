import React from 'react'
import autoBind from 'react-autobind'
import '../api/notes/notes'

export const NoteDetail = (props) => {
    return props.subsReady? <div className="app-container">Note Detail View: {props.note.title}</div> : null
}

// export class NoteDetail extends React.Component {
//   constructor(props){
//     super(props)
//     autoBind(this)
//   }

//   render() {
//     return <div className="app-container">Note Detail View: {this.props.note.title}</div>     
//   }
// }