import React from 'react';
import { Form, Button, Divider } from 'antd';
import { FormField } from '../../utils';
const FormItem = Form.Item;

let form = require('./form.json');

class ItemForm extends React.Component {

  generateForm = () => form.fields.map(data => <FormField key={data.id} fieldAttribute={data} form = {this.props.form}/>);

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
      <div className="content-paper animated fadeIn"> 
        <div className="section-heading">
          Add Item Category
        </div>
        <Divider />   
        <Form onSubmit={this.handleSubmit} className="login-form">            
          {this.generateForm()}
          <FormItem>                        
            <Button type="primary" htmlType="submit">
              Save Item Category
            </Button>
            <Button type="danger" htmlType="reset" style={{marginLeft: 10}} onClick={this.props.handleClick}>
              Cancel
            </Button>            
          </FormItem>
        </Form>
      </div>
    )
  }
}

export default Form.create()(ItemForm);