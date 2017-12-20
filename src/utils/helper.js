import React from 'react';
import { Form, Input, Select } from 'antd';
import { func } from './common';
const Option = Select.Option;

export const FormField = props => {
  let field = props.fieldAttribute;
  let type = field.type || 'input';  
  let title = func.titleCase(field.name);
  const { getFieldDecorator } = props.form;

  const Types = {
    input: () => {      
      return (
        <Input placeholder={title} />
      )
    },
    select: () => {
      let options = field.options;      
      return (
      <Select placeholder={title}>
        { options.map((option, index) => <Option key={index} value={option.value}>{option.name}</Option>)}              
      </Select> 
    )}
  }  
  return (
    <Form.Item>
      {getFieldDecorator(field.name, {
        rules: field.validation,
      })(
        Types[type]()
      )}
  </Form.Item> 
  )  
}

