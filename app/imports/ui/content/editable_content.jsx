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
      FOO
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

 // noteContent(){
 //    return this.data.note.content === ""?
 //      <div className="centered gray-pill help-text">Empty note</div>
 //    : 
 //      <ReactMarkdown source={this.data.note.content} />
 //  }