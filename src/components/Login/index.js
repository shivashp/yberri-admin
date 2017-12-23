import React, { Component } from 'react';
import {
  Divider, Form, Button
} from 'antd';
import { FormField } from '../../utils';
const FormItem = Form.Item;

let form = require('./form.json');

class Login extends Component {
  generateForm = () => form.fields.map(data => <FormField key={data.id} fieldAttribute={data} form = {this.props.form}/>);
  
    handleSubmit = e => {
      e.preventDefault();    
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          this.props.history.push("/dashboard");
        }
      });
    }

  render() {
    return (
      <div id="login-page">
      <div className="dark-overlay"></div>
        <div className="content-paper">
          <div className="section-heading">
            Login
          </div>
          <Divider />
          <div className="section-body">
          <Form onSubmit={this.handleSubmit}>            
            {this.generateForm()}       
            <div className="forgot-password">
              <a href="" style={{float:"right"}}>Forgot Password?</a>
            </div>              
            <FormItem>                        
              <Button type="primary" htmlType="submit" style={{width: '100%'}}>
                Login
              </Button>                  
            </FormItem>
          </Form>
          <div className="meta">
            
          </div>
          </div>
        </div>
      </div>
    );
  }
}

const Register = () => (
  <div>Register Page</div>
)

export default Form.create()(Login);