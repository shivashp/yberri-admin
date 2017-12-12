import React from 'react';
import DataTable from '../DataTable';
import { Button } from 'antd';

const columns = [{
  title: 'Category Name',
  dataIndex: 'categoryName',
  key: 'categoryName',  
}, {
  title: 'Items',
  dataIndex: 'items',
  key: 'items',
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
  categoryName: 'Breakfast',
  items: 4
}, {
  key: '2',
  categoryName: 'Lunch',
  items: 10
}, {
  key: '3',
  categoryName: 'Snacks',
  items: 18
}, {
  key: '4',
  categoryName: 'Veg Snacks',
  items: 12,
}, {
  key: '5',
  categoryName: 'Non-veg Snacks',
  items: 14
}, {
  key: '6',
  categoryName: 'Dinner',
  items: 4
}, {
  key: '7',
  categoryName: 'Drinks',
  items: 5
}];

export default () => <DataTable name="Item Category" columns={columns} data={data}/>