import React from 'react'
import { AppHeader } from './app_header'

export const AppLayout = ({content}) =>
  <div id="app-container">
    <AppHeader />
    <div id="main-content">
      {content()}
    </div>
  </div>