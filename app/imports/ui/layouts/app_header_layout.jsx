import React from 'react'
import { PageTitle } from '../content/page_title'

export const AppHeaderLayout = (props) =>
  <div id="app-header">
  	<div className="header-left">
	   {props.headerLeft}
	  </div>
	  <div className="header-center">
	    {props.headerCenter}
	  </div>
	  <div className="header-right">
      {props.headerRight}
    </div>
  </div>

AppHeaderLayout.propTypes = {
  headerLeft:   React.PropTypes.object,
  headerCenter: React.PropTypes.object,
  headerRight:  React.PropTypes.object
}

AppHeaderLayout.defaultProps = { 
  headerCenter: <PageTitle />
}
