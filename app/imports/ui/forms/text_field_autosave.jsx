import React from 'react'
import autoBind from 'react-autobind'
import { _ } from 'meteor/underscore'
import { TextBtn } from '../buttons/text_btn'
import AppUtils from '../../utils/app_utils'

export class TextFieldAutoSave extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      inputValue: this.props.inputValue
    }
    autoBind(this)
  }

  saveChanges(e){
    const updatedValue = e.target.value
    const saveInterval = 300

    this.setState({inputValue: updatedValue})

    this.autoSave = this.autoSave || _.throttle(content => {
      this.props.handleUpdates(this.props.field, content)
    }, saveInterval)

    this.autoSave(updatedValue)
  }

  doneEditing(e){
    e.preventDefault()
    this.props.doneEditing()
  }

  handleOnBlur(){
    this.props.doneEditing()
  }

  handleOnKeyPress(e) {
    if (AppUtils.forms.shiftReturn(e)) {
      e.preventDefault()
      this.doneEditing(e)
      return false
    }
  }

	render() {

    return <form className="min-full-height flex-column">
            <textarea className="invisible flex-main-content"
              placeholder={this.props.placeholder}
              value={this.state.inputValue}
              onChange={this.saveChanges}
              autoFocus={this.props.autoFocus}
              onBlur={this.props.doneEditing}
              onKeyPress={this.handleOnKeyPress}
            />
	          <div className="form-controls flex-column-centered">
	            <TextBtn label="Done" />
	            <div className="help-text block-padding">(Or use Shift + Return)</div>
	            </div>
          </form>
	}
}

TextFieldAutoSave.propTypes = {
  inputValue: React.PropTypes.string
}

TextFieldAutoSave.defaultProps = {
  inputValue:"",
  autoFocus: false,
  multiLine: false
}

// let singleLineForm = <form className="single-field-submit" onSubmit={this.doneEditing}>
//                        <input
//                           type="text"
//                           placeholder={this.props.placeholder}
//                           value={this.state.inputValue}
//                           onChange={this.saveChanges}
//                           autoFocus={this.props.autoFocus}
//                           onBlur={this.handleOnBlur}
//                         />
//                        <input type="submit" style={{display:'none'}} />
//                     </form>

// return this.props.multiLine? multiLineForm : singleLineForm
