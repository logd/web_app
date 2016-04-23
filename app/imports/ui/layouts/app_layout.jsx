import React from 'react'
// import { AppHeader } from './app_header'

export const AppLayout = ({header, content}) =>
  <div id="app-container">
    {header()}
    <div id="main-content">
      {content()}
    </div>
  </div>