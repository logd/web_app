import React from 'react'
import AppUtils from '../../utils/app_utils'

export const PageTitle = (props) => <h1 className="page-title">{props.pageTitle}</h1>

PageTitle.propTypes = {
	pageTitle: React.PropTypes.string
}

PageTitle.defaultProps = { 
  pageTitle: AppUtils.appInfo.appTitle
}


    
