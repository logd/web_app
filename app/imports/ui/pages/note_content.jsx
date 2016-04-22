import React from 'react'
import autoBind from 'react-autobind'
import { EditableContent } from '../content/editable_content'

export const NoteContent = (props) => {
    return props.subsReady?
      <EditableContent
        field="content"
        content={props.note.content}
        handleUpdates={props.handleUpdates}
      />
    : 
      null
}
