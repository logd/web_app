import React from 'react'
import autoBind from 'react-autobind'
import '../api/notes/notes'

export class NoteDetail extends React.Component {
  constructor(props){
    super(props)
    autoBind(this)
  }

  render() {
    return <div className="app-container">Note Detail View</div>     
  }
}