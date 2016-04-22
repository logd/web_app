const AppUtils = {}

AppUtils.appInfo = {
  appTitle: "Logd"
}

AppUtils.forms = {
  shiftReturn: (e) => (e.which === 13 && e.shiftKey)
}

export default AppUtils
