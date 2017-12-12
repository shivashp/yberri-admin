import React from 'react';
import DataTable from '../DataTable';
import { Button } from 'antd';

const columns = [{
  title: 'First Name',
  dataIndex: 'firstname',
  key: 'firstname',  
}, {
  title: 'Last Name',
  dataIndex: 'lastname',
  key: 'lastname',
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
},{
  title: 'Action',
  key: 'action',
  className: 'table-action',
  render: (text, record) => (
    <span>      
      <Button type="danger">Delete</Button>      
    </span>
  ),
}];

const data = [{
  key: '1',
  firstname: 'John',
  lastname: 'Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  firstname: 'Jim',
  lastname: 'Green',
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  firstname: 'Joe',
  lastname: 'Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
}, {
  key: '4',
  firstname: 'Jim',
  lastname: 'Green',
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '5',
  firstname: 'Joe',
  lastname: 'Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
}, {
  key: '6',
  firstname: 'Jim',
  lastname: 'Green',
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '7',
  firstname: 'Joe',
  lastname: 'Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
}];

export default () => <DataTable name="Staff" columns={columns} data={data}/>