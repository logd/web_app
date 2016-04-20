import React from 'react'

export const DetailView = (props) => {
    return props.subsReady? <div className="app-container">{props.note.title}</div> : null
}
