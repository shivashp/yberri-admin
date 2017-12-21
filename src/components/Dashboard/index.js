import React from 'react';
import { Form, Button } from 'antd';
import { FormField } from '../../utils';
const FormItem = Form.Item;

let forms = require('./forms.json');

class Dashboard extends React.Component {

  generateForm = () => forms.fields.map(data => <FormField key={data.id} fieldAttribute={data} form = {this.props.form}/>);

  handleSubmit = e => {
    e.preventDefault();    
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }


  render() {
    return (
      <div className="content-paper"> 
        <Form onSubmit={this.handleSubmit} className="login-form">            
          {this.generateForm()}
          <FormItem>                        
            <Button type="primary" htmlType="submit" className="login-form-button">
              Add
            </Button>            
          </FormItem>
        </Form>
      </div>
    )
  }
}

export default Form.create()(Dashboard);