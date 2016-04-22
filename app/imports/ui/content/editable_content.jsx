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

  showContent(content){

    const
      isEmpty          = content === ""
      ,
      emptyMsg         =  <div className="centered gray-pill help-text">
                           Empty Note
                          </div>
      ,
      displayedContent = isEmpty? emptyMsg : content

    return  <span className="editable" onClick={this.toggleEditMode}>
              {displayedContent}
            </span>
  }

  render(){
    return this.state.isEditing?
      <TextFieldAutoSave inputValue={this.props.content} handleUpdates={this.props.handleUpdates} field={this.props.field} />
    :
      this.showContent(this.props.content)
    ;
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
