import React from 'react';
import DataTable from '../DataTable';
import { Button, Tag } from 'antd';

let handleTagChange = (record, text, index) => {  
  console.log("Record", record);  
  console.log("Index: ", index);  
}

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
}, {
  title: 'Status',
  key: 'status',
  render: (text, record, index) => (
    <Tag className={record.status?'tag-success':'tag-danger'} onClick={() => handleTagChange(record, text, index)}>{record.status ? 'Active': 'Inactive'}</Tag>
  ),
}, {
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
  status: true,
}, {
  key: '2',
  firstname: 'Jim',
  lastname: 'Green',
  age: 42,
  address: 'London No. 1 Lake Park',
  status: true,
}, {
  key: '3',
  firstname: 'Joe',
  lastname: 'Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  status: false,
}, {
  key: '4',
  firstname: 'Jim',
  lastname: 'Green',
  age: 42,
  address: 'London No. 1 Lake Park',
  status: false,
}, {
  key: '5',
  firstname: 'Joe',
  lastname: 'Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  status: false,
}, {
  key: '6',
  firstname: 'Jim',
  lastname: 'Green',
  age: 42,
  address: 'London No. 1 Lake Park',
  status: true,
}, {
  key: '7',
  firstname: 'Joe',
  lastname: 'Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  status: true,
}];

export default () => <DataTable name="Staff" columns={columns} data={data}/>