import React from 'react'
import autoBind from 'react-autobind'
import { TextFieldAutoSave } from '../forms/text_field_autosave'
//<ReactMarkdown source={this.data.note.content} />

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

  contentIsEmpty(content) {
    return content === ""
  }
  
  showEditMode(content){
    return <TextFieldAutoSave inputValue={content} handleUpdates={this.props.handleUpdates} field={this.props.field} />
  } 
  
  showViewMode(content) {
    return this.contentIsEmpty(content)?
        <div className="centered gray-pill help-text">Empty Note</div>
      :
        <span className="editable" onClick={this.toggleEditMode}>
          {content}
        </span>
  } 
   

  render(){
    const content = this.props.content 

    return this.state.isEditing?
      this.showEditMode(content)
    :
      this.showViewMode(content)
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
