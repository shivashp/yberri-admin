import React from 'react';
import { Input } from 'antd';
import { withValidation } from '../../utils';
import Form from './Form';

let forms = require('./forms.json');

class Dashboard extends React.Component {

  generateForm = () => {
    return forms.fields.map(data => {
      let ValidatedInput = withValidation(Input, data);
      return <ValidatedInput key={data.id} />
    })
  }

  render() {
    return (
      <div className="content-paper">             
        <Form />
      </div>
    )
  }
}

export default Dashboard;