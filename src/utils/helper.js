import React from 'react';
import {
  isValidEmail, isNotNull, func
} from './common';

const withValidation = (WrappedComponent, attributes) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        errors: ''
      }
    }
    onChange = e => {
      let value = e.target.value;
      let errors = '';
      if(value.length > 5){
        console.log("Email validity: ", isValidEmail(value));
        errors = "Length Cannot exceed 5";
      }
      console.log(" Is Not Null ", isNotNull(value));
      this.setState({
        errors
      });
      
    }
    render() {
      let field = attributes;
      let title = func.titleCase(field.name)
      return (
        <div>
          {title}
          <WrappedComponent onChange={this.onChange} placeholder={title}/>
          <div style={{color: 'red'}}>{this.state.errors}</div>
        </div>
      )
    }
  }
}

export {
  withValidation
};