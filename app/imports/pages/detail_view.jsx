import React from 'react'
import { EditableContent } from '../ui/content/editable_content'

export const DetailView = (props) => {
    return props.subsReady? <div className="app-container">
      <div>Title: {props.note.title}</div>
      <div>Content: <EditableContent handleUpdates={props.handleUpdates} content={props.note.content} /></div>
    </div> : null
}
