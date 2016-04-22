import React from 'react'
import { EditableContent } from '../content/editable_content'

export const DetailView = (props) => {
    return props.subsReady?
      <EditableContent field="content" handleUpdates={props.handleUpdates} content={props.note.content} />
    : 
      null
}


  // <div>Title: {props.note.title}</div>