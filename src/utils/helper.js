import React from 'react';
import { Form, Input } from 'antd';
import { func } from './common';

export const FormField = props => {
  let field = props.fieldAttribute;
  let title = func.titleCase(field.name);
  const { getFieldDecorator } = props.form;
  return (
    <Form.Item>
      {getFieldDecorator(field.name, {
        rules: field.validation,
      })(
        <Input placeholder={title} />
      )}
  </Form.Item> 
  )
}
