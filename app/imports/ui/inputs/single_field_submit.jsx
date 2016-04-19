import React from 'react'
import autoBind from 'react-autobind'

export class SingleFieldSubmit extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      inputValue: this.props.inputValue,
      autoFocus: this.props.autoFocus
    }
    autoBind(this)
  }

  updateInputValue(e){
    if(e.target.value.length <= this.props.maxLength){
      this.setState({inputValue: e.target.value})
    } else {
      alert("Sorry, max allowed character count is " + this.props.maxLength)
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.handleSubmit(this.state.inputValue.trim())
    this.setState({inputValue: ""})
  }

  // handleOnKeyPress(e) {
  //   // submit via return key for mobile safari
  //   if ( e.which === 13 ) {
  //     e.preventDefault()
  //     this.handleContentInput()
  //   }
  // }

  handleOnBlur(){
    // if (this.props.saveOnBlur) {
    //   this.handleContentInput()
    // } else {
    //   this.props.handleOnBlur()
    // }
  }

  render() {
      return <form className="single-field-submit" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="newNote"
          placeholder={this.props.placeholder}
          value={this.state.inputValue}
          onChange={this.updateInputValue}
          autoFocus={this.state.autoFocus}
         
        
        />
         <input type="submit" style={{display:'none'}} />
      </form>
  }
}

// onKeyPress={this.handleOnKeyPress}

  // onBlur={this.handleOnBlur}

SingleFieldSubmit.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
  placeholder: React.PropTypes.string
}

SingleFieldSubmit.defaultProps = {
  inputValue:  ""  ,
  placeholder: "New...",
  autoFocus:  true,
  saveOnBlur: false,
  handleOnBlur: null,
  maxLength:1000
}