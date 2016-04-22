import React from 'react'
import { AppHeader } from './app_header'

export const AppLayout = ({content}) =>
  <div id="app-container">
    <AppHeader />
   {content()}
  </div>