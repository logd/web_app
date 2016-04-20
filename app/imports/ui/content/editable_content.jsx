import React from 'react'
import autoBind from 'react-autobind'
// import TextFieldAutoSave from '../forms/TextFieldAutoSave.jsx'

export class EditableContent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isEditing: this.props.isEditing
    }
    autoBind(this)
  }
  
  toggleEditMode(){
     this.setState({ isEditing: !this.state.isEditing })
  }
  // setEditMode(){
  //   this.setState({ isEditing: true })
  // }

  // doneEditing(){
  //    this.setState({ isEditing: false })
  // }

  showField(){

    return this.state.isEditing?
      FOO
    : 
      <span className="editable" onClick={this.toggleEditMode}>{this.props.content}</span>
    ;
  }

  render(){
    return this.showField()
  }
}

EditableContent.propTypes = { 
  content:       React.PropTypes.string.isRequired,
  handleUpdates: React.PropTypes.func.isRequired,
  isEditing:     React.PropTypes.bool
}

EditableContent.defaultProps = {
  isEditing: false
}